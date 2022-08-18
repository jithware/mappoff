'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js": "0c7178c8aae6f70387ca859e563c7329",
"version.json": "efc038dd81ab73ebbcc83d6091bb1e6e",
"assets/icons/place-red.png": "2736365010ce44ac49060d1af9f90d85",
"assets/icons/place-green.png": "619b2344e8b1bcb2a97c37d35a2e0850",
"assets/icons/place-grey.png": "9a92795c2a0c8f88af9b3a4b4ec5d6cd",
"assets/icons/place-blue.png": "b50a8512330336ae24b87b0fcaac8ff6",
"assets/icons/water-drop-outlined.png": "3ea35d3bff8ab1f2996f18812d2d3666",
"assets/icons/water-drop.png": "a3e639ebaf438144a30e0873878745e4",
"assets/icons/water.png": "ef0e3bbe81cec8b53ceaa1ae5172c4c8",
"assets/icons/local-parking.png": "c51c668843e4dded19252c86fdc58b23",
"assets/icons/restaurant.png": "8c030850dcb6c220f2a852570c0ad07b",
"assets/icons/hotel.png": "c1e7f24732bb6cc7500e86c21ef42152",
"assets/icons/info.png": "3ccb661b631cac04fd9e2f9e8e2da219",
"assets/icons/warning.png": "ca4b417528dcd0eb15a5595ed12adab4",
"assets/icons/dangerous.png": "ec5b3fe50e7c4634a75a80ce1ca33573",
"assets/icons/local-fire-department.png": "cd80d4db910f9514e956f0f0f0885cf9",
"assets/icons/shopping-cart.png": "666f1bcce86023c6bca6d14c7a579c52",
"assets/icons/bus.png": "cad4ee9a5fefbda72a1d5d5d909be964",
"assets/icons/gite.png": "4e91290dc21a294c8fe22c186f61cdb0",
"assets/icons/auto-fix-high.png": "19c8c8b85d42808d2ca2d4d66c33dceb",
"assets/icons/camping.png": "7441376c1f75465ad396fb1e599b3fc7",
"assets/icons/auto-graph.png": "18841108529474b9d8e9b0d7195d5b0d",
"assets/icons/shower.png": "d1228a8b4aee22c253e2f4f6bedc2dcc",
"assets/icons/pool.png": "9775f9c7ca93d17050cd13a947d36b11",
"assets/icons/park.png": "6a64a8d15191b80f1e613bad30202128",
"assets/icons/forest.png": "1d13901123b6d95d57b16cee5e38fcb2",
"assets/icons/terrain.png": "2d629f404bf1cc01ab38f3d14febcc5e",
"assets/icons/hiking.png": "44b44859991ac748d4dcbc2c29b55fe2",
"assets/icons/home.png": "ae4dfb4f5f73f4ca684ab733358828bf",
"assets/icons/wc.png": "79aa46bb83fb9297923c34b6d9654ff1",
"assets/images/launcher.png": "7230be55205d612125328de924663b05",
"assets/images/github-readme-qr.png": "2d7154f6608fcde1973551017054ee73",
"assets/kml/sample.kmz": "cda81559ba3fa705005c6a97969035eb",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "f8ca7c5816761abe72e318ebb2d9beed",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "513c40b8ad1ed29898e3729affe27367",
"favicon.png": "428494e79d329529c7bef3b6d84c576b",
"icons/Icon-192.png": "3db6da041f26a85effda05d3f6a90d25",
"icons/Icon-512.png": "8fe73e0ca049c2f92643a76fd34f4164",
"index.html": "fa1885b15ea36f98b37ca570ebe14723",
"/": "fa1885b15ea36f98b37ca570ebe14723",
"manifest.json": "51a91ae769bcfa4c0e4ae1ef64877aea",
"README.md": "84144f9d0fb421efa9be3d01cfc00f90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
