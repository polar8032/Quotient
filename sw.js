// Quotient service worker: works fully offline after the first visit.
const VERSION = 'quotient-0b631c0e';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './maskable-512.png', './home-icon-180.png'];
// each file is cached on its own, so one missing file never stops the app from installing
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(CORE.map(u => c.add(new Request(u, { cache: 'reload' }))))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // the page itself: try the network first so updates arrive, fall back to the saved copy offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req.url, { cache: 'no-store', credentials: 'same-origin' }).then(res => { if (!res.ok) throw 0; const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return res; }).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  // fonts and app files: serve from cache, refresh in the background
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(VERSION).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    }));
  }
});
// tapping a Quotient notification brings the app back (or opens it)
self.addEventListener('notificationclick', e => {
  e.notification.close(); const url = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => { for (const c of list) { if ('focus' in c) return c.focus(); } return self.clients.openWindow(url); }));
});
