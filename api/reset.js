// api/reset.js
// Throws away the admin's saved edits so the guide falls back to public/content.json.

const { kvDel, isConfigured } = require('./_kv');

const CONTENT_KEY = 'fcf-content-v1';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { password } = req.body || {};
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return res.status(500).json({ error: 'Admin password not configured on server.' });
  }
  if (password !== adminPassword) {
    return res.status(401).json({ error: 'Incorrect password.' });
  }
  if (isConfigured()) {
    try { await kvDel(CONTENT_KEY); } catch (e) { /* nothing saved yet */ }
  }
  return res.status(200).json({ success: true, message: 'Content reset.' });
};
