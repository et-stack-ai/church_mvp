# Deploying to Railway via GitHub

## Prerequisites

- [Railway account](https://railway.app) (free tier works)
- GitHub account
- Node.js 20+ installed locally

---

## Step 1 — Test locally

```bash
cd solace-showcase
npm install
npm run build   # must pass before deploying
npm start       # verify at http://localhost:3000
```

---

## Step 2 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial showcase"
```

Create a new repository on github.com (or via GitHub CLI):

```bash
gh repo create solace-showcase --public --source=. --remote=origin --push
```

Or manually:

```bash
git remote add origin https://github.com/YOUR_USERNAME/solace-showcase.git
git branch -M main
git push -u origin main
```

---

## Step 3 — Deploy on Railway

1. Go to [railway.app](https://railway.app) and sign in
2. Click **+ New Project**
3. Select **Deploy from GitHub repo**
4. Authorize Railway and choose `solace-showcase`
5. Railway auto-detects Next.js — click **Deploy Now**
6. Wait ~2 minutes for the build

### Get a public URL

Settings tab → **Networking** → click **Generate Domain**

Your app is live at something like:
`https://solace-showcase-production.up.railway.app`

Every `git push origin main` triggers an automatic redeploy.

---

## Environment Variables

None required for this showcase. For a production build you would add variables in Railway's **Variables** tab.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Build fails | Check build logs in Railway dashboard — usually a missing `node_modules` or TS error |
| Port not found | Railway sets `$PORT` automatically; Next.js 14 reads it natively |
| White screen | Confirm `npm run build` passes locally first |
| Redeploy needed | Railway dashboard → project → **Redeploy** button |

---

## Project Structure

```
solace-showcase/
├── src/app/
│   ├── page.tsx          # Landing page
│   ├── catalog/page.tsx  # Content library
│   ├── journey/page.tsx  # Daily journey (interactive)
│   ├── journal/page.tsx  # Private journal (interactive)
│   └── pricing/page.tsx  # Plans + FAQ
├── src/components/
│   └── Nav.tsx
├── railway.toml          # Railway config
└── package.json
```
