# Quotient

A smart calculator that runs entirely in your browser: no server, no API, works offline.

## Put it on GitHub Pages

1. Create a repository (for example `quotient`).
2. Upload **all the files in this folder** to the **root** of the repository, all together, with no subfolders:
   `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `maskable-192.png`, `maskable-512.png`,
   `home-icon-180.png`, `favicon-32.png`, `icon.svg` (and `README.md`).
   On github.com: **Add file → Upload files**, select them all, **Commit changes**.
3. **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
4. Open `https://YOUR-USERNAME.github.io/quotient/` (with **https**).

## Install it as a real app (no address bar)

Tap **Install app** at the top of the page. It shows the steps for your phone and checks the page.
Every line should have a green tick. A red "!" names the file that's missing.

- **Android (Chrome):** menu ⋮ → **Install app**. If you see a box with **Install** and **Create shortcut**, choose **Install**.
- **iPhone / iPad:** open the link in **Safari** → Share → **Add to Home Screen** → keep **Open as Web App** switched **on** → Add.

If you already added it and it opens with the address bar, **delete that icon first**. It's a shortcut, not the app.
Then reload the page once and install again.

## Updating

Upload the new `index.html` and `sw.js`. The installed app updates the next time it's opened online.
