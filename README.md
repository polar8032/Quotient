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

**Android:** open the link in **Chrome** (or Samsung Internet / Edge) and tap **Install app** at the top, or menu ⋮ → **Install app**.
Brave can't install web apps on Android. It only makes shortcuts that open in Brave with the address bar.
Brave can stay your default browser: the installed app still opens on its own.

**iPhone / iPad:** open the link in **Safari** → Share → **Add to Home Screen** → keep **Open as Web App** on → Add.

If an old icon opens with the address bar, delete it first. It's a shortcut, not the app.

## Updating

Upload the new `index.html` and `sw.js`. The installed app updates the next time it's opened online.
