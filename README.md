# FCF Sales Call Flow Guide

Copy of the Phoenix Ascension guide (cc-convext-phoenixascension), rebuilt with the
FCF Sales CFG v1.3 scripting and the Premium Cleaner Add-On update.

## What's in it

- `public/` – the site (same front end as Phoenix: sign-in gate, tabs, step locks,
  floating calculators, notes, search, Admin and Usage pages).
- `public/content.json` – the starting scripts and rates. Admins can edit everything
  later from `/admin`; saved edits live in storage and override this file.
- `api/` – Vercel functions: `content` (load/save scripts), `login` (admin password),
  `reset` (drop saved edits), `track` (sign-in log for the Usage page), `_kv` (storage helper).

Step locks: Sales Pitch unlocks after Discovery, Booking after Sales Pitch, and
System Notes only after the Premium Cleaner offer is confirmed.

## Deploy on Vercel

1. Create a new Vercel project from this folder (Framework preset: Other). Vercel serves
   `public/` and turns `api/` into functions automatically.
2. Storage: add an Upstash Redis (KV) integration to the project, the same way Phoenix has.
   The helper reads `KV_REDIS_URL_KV_REST_API_URL` and `KV_REDIS_URL_KV_REST_API_TOKEN`;
   if your integration names them differently, rename them in `api/_kv.js`.
   This project uses its own keys (`fcf-content-v1`, `fcf-usage-v1`), so it can even
   share Phoenix's database without overwriting Phoenix data.
3. Environment variables:
   - `ADMIN_PASSWORD` – for `/admin` (editing scripts) and resetting usage data.
   - `DASHBOARD_PASSWORD` – for `/dashboard` (TL usage view).
4. Redeploy after adding the variables.

Without storage connected, the guide still works from `content.json`; only saving
admin edits and the usage log need it.
