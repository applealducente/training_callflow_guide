// api/content.js
// Serves the guide content and lets the admin page save edits.
//   GET                          -> saved content from KV, or the bundled public/content.json
//   POST { password, content }   -> saves content (ADMIN_PASSWORD required)

const fs = require('fs');
const path = require('path');
const { kvGet, kvSet, isConfigured } = require('./_kv');

const CONTENT_KEY = 'fcf-content-v1';

function bundled() {
  const file = path.join(process.cwd(), 'public', 'content.json');
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'no-store');
    if (isConfigured()) {
      try {
        const saved = await kvGet(CONTENT_KEY);
        if (saved && typeof saved === 'object' && Array.isArray(saved.tabs)) {
          return res.status(200).json(saved);
        }
      } catch (e) {
        console.error('KV read error (content):', e);
      }
    }
    try {
      return res.status(200).json(bundled());
    } catch (e) {
      return res.status(500).json({ error: 'Content file is missing.' });
    }
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      return res.status(500).json({ error: 'Admin password not configured on server.' });
    }
    if (!body.password || body.password !== adminPassword) {
      return res.status(401).json({ error: 'Incorrect password.' });
    }
    if (!body.content || !Array.isArray(body.content.tabs)) {
      return res.status(400).json({ error: 'Content must include a tabs list.' });
    }
    if (!isConfigured()) {
      return res.status(500).json({ error: 'Storage is not connected to this project yet.' });
    }
    try {
      await kvSet(CONTENT_KEY, body.content);
    } catch (e) {
      console.error('KV write error (content):', e);
      return res.status(500).json({ error: 'Failed to save content.' });
    }
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
