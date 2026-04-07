const cacheName = 'ahmedfm-v1';
const assets = ['/', '/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    fetch(fetchEvent.request).catch(() => caches.match(fetchEvent.request))
  );
});