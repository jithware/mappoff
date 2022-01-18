'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"main.dart.js": "378f2f6a274034c99bc834ba3b9bf271",
"version.json": "9b9ae0a9b1a8d0f2f2141647702439af",
"assets/images/launcher.png": "7230be55205d612125328de924663b05",
"assets/images/google-play-qr.png": "71f6a18ce9c4bc40d85e7e4da0c614c3",
"assets/images/github-web-qr.png": "b9e6b7af764816a870042b33f3ce999e",
"assets/kml/sample.kmz": "0747b158688fc9dcc8adff7ec41b8b6a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "abe36ec2af5b638c1977fd6bb0a474fc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "4153f8eae4924d319f2fa04fd4258165",
"assets/icons/place-red.png": "8843a10799187b67bc99837c2fa5607b",
"assets/icons/place-green.png": "4466d702f112c76340ddaef77bbfca86",
"assets/icons/place-blue.png": "35a9e422d3a747d1d0e02d37549c0300",
"assets/icons/place-grey.png": "3359e8f64f2f8e2925221ac9ae3206dd",
"assets/icons/water-drop-blue.png": "c45b81e718ac5be57ca1b6c43af6ea7c",
"assets/icons/water-drop-outlined-blue.png": "54c2f97a4e1464e78f5534e6bbd19840",
"assets/icons/water-blue.png": "72e654b5ecdeb68808fbf5b94cde865a",
"assets/icons/park-green.png": "07e725b448882ec4ac29610d893f6102",
"assets/icons/forest-green.png": "b5f56f102cbd7f384eaa422cce9ff30b",
"assets/icons/terrain-green.png": "3e0280e7de05e2cd220b878c7fa562c3",
"assets/icons/hiking-green.png": "5f10549331525e187e417161f0e9d26d",
"assets/icons/details-green.png": "0ead49faecf898ada211c7e2ec260ab9",
"assets/icons/home-brown.png": "465aa38681b3355c35b4542fd84459b6",
"assets/icons/local-parking-blue300.png": "70bae409b11e6f0be0ffd5a0fdfcfcb6",
"assets/icons/restaurant-blue300.png": "97ff43eec64105fcf9fdb0d21be3c575",
"assets/icons/info-blue300.png": "dfb58ea61c3c3f21b975599fa23205ce",
"assets/icons/warning-amber.png": "d28710da7d4286f2e34ad06821cba883",
"assets/icons/dangerous-red.png": "ecd3c3d0dc181dadf4155498be4e5cfc",
"assets/icons/local-fire-department-deepOrange.png": "b4630ddab0ce5681170641e6fccd3e32",
"favicon.png": "428494e79d329529c7bef3b6d84c576b",
"icons/Icon-192.png": "3db6da041f26a85effda05d3f6a90d25",
"icons/Icon-512.png": "8fe73e0ca049c2f92643a76fd34f4164",
"index.html": "08d1a7093af658ca078e8e867d68b36b",
"/": "08d1a7093af658ca078e8e867d68b36b",
"manifest.json": "51a91ae769bcfa4c0e4ae1ef64877aea",
"README.md": "e6a644bcfdd6c8db32422b0afcd3e938"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
