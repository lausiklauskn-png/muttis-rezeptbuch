const CACHE = 'rezeptbuch-v1';
self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(['/muttis-rezeptbuch/']))));
self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request)
    .then(r => r || fetch(e.request))));
