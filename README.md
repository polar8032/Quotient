# Quotient

A smart calculator that runs entirely in your browser: no server, no API, works offline.
Ask in plain words ("18% tip on 64,50 for 3 people"), work a Sheet line by line, or shop with a Basket.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (for example `quotient`).
2. Upload **everything in this folder** to the root of the repository: `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, `README.md` and the `icons` folder.
   On github.com: **Add file → Upload files**, drag the files and the `icons` folder in, then **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and **Save**.
4. After a minute your app is live at `https://YOUR-USERNAME.github.io/quotient/`.

## Install it

- **Android / Chrome / Edge (desktop too):** open the link and tap **Install app** at the top, or use the browser menu → **Install app** / **Add to Home screen**.
- **iPhone / iPad:** open the link in **Safari**, tap **Share**, then **Add to Home Screen**.

Once opened, it works offline. Your tape, pins, sheet and basket stay on your device.

## Updating

Upload a new `index.html` and `sw.js` (the build gives `sw.js` a new version name each time).
The installed app picks up the new version the next time it's opened online.
