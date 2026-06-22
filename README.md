# Portfolio

Personal portfolio for **Sundreshan K** — skills, projects, certificates, journey timeline, and contact.

**Live:** Connect [Render](https://render.com) to this repo for auto-deploy on every push to `main`.

## Tech stack

- React 19 + Vite 8
- Tailwind CSS v4
- Framer Motion, Swiper, react-icons

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Output folder: `dist/`

## Deploy on Render (Static Site — recommended)

1. [Render Dashboard](https://dashboard.render.com) → **New** → **Static Site**
2. Connect GitHub repo: `sundreshan21/Portfolio`, branch `main`
3. Use these settings:

| Setting | Value |
|---------|--------|
| **Root Directory** | *(empty)* |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Environment Variables** | *(none required)* |

4. **Redirects / Rewrites** (if not using `render.yaml`):

| Source | Destination | Action |
|--------|-------------|--------|
| `/*` | `/index.html` | **Rewrite** |

5. Click **Create Static Site**. Render assigns a URL like `https://portfolio-xxxx.onrender.com`.

### Blueprint (optional)

This repo includes `render.yaml`. Use **New → Blueprint** and select the repo to apply the same settings automatically.

### Web Service (alternative)

| Setting | Value |
|---------|--------|
| **Language** | Node |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

## Environment variables

Not required for the current build. If you add Vite env vars later, prefix them with `VITE_` (e.g. `VITE_API_URL`) and set them in Render → **Environment**.

## Project structure

```
src/
  components/   # UI sections (Hero, About, Skills, …)
  data/         # projects, skills, certificates
  context/      # theme (dark / light)
public/         # images, favicon
```

## License

Private portfolio project — © Sundreshan K.
