const CACHE_NAME = "italy_seria2";
var urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/sework.js",
  "/img/436px-Serie_A_Logo_(ab_2019).png",
  "/img/wp2011113-serie-a-wallpapers.jpg",
  "/img/wp2011114-serie-a-wallpapers.png",
  "/img/wp2011120-serie-a-wallpapers.jpg",
  "/img/icon192.png",
  "/img/icon512.png",
  "/css/materialize.min.css",
  "/css/style.css",
  "/halaman/footer.html",
  "/halaman/klasemen.html",
  "/halaman/tim.html",
  "/halaman/favorit.html",
  "/halaman/navigasi.html",
  "/halaman/home.html",
  "/js/materialize.min.js",
  "/js/jquery-2.1.1.min.js",
  "/js/navigasi.js",
  "/js/serviceworker.js",
  "/js/api.js",
  "/js/idb.js",
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

  self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  self.addEventListener("fetch", function(event) {
    var BASE_URL = "https://api.football-data.org/v2/";
  
    if (event.request.url.indexOf(BASE_URL) > -1) {
      event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
          return fetch(event.request).then(function(response) {
            cache.put(event.request.url, response.clone());
            return response;
          })
        })
      );
    } else {
      event.respondWith(
          caches.match(event.request, { ignoreSearch: true }).then(function(response) {
              return response || fetch (event.request);
          })
      )
  }
  });

  self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    var options = {
      body: body,
      icon: 'img/icon192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });
