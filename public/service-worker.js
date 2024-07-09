// public/service-worker.js

self.addEventListener('install', (event) => {
    console.log('Service worker installing...');
    // You can add code to cache files during the install event here.
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service worker activating...');
    // You can add code to clean up old caches here.
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  });
  