'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"main.dart.js": "dd39847a9fdccd008f83fbdba79b2b30",
"version.json": "a70ec4b489660ec763c69bb9aafc6918",
"assets/images/launcher.png": "7230be55205d612125328de924663b05",
"assets/kml/sample.kmz": "12dfe5ed6e50a2ae1760d58cb69a8204",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "edb5b7e90b45f5501de0ff358707b5b2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "4153f8eae4924d319f2fa04fd4258165",
"assets/icons/place.png": "603c1f77ad3d40b120622a5e9dde0413",
"assets/icons/water_drop.png": "87f36a1ea5ac9d0058e3ff773430edc0",
"assets/icons/water_drop_outlined.png": "f0aff8583d31edc4de1858a5a40cb84b",
"assets/icons/home.png": "0b9e729d46f0120fc1a7936fd24c679d",
"assets/icons/info.png": "d2de21b69caeab7255b1df5ec1186daa",
"assets/icons/forest.png": "d7cb0f429cdf7ed0a4aa1ec36cfecf3d",
"assets/icons/local_parking.png": "d3f7c1ca54a1ce0cc88068bfa2c35e9b",
"assets/icons/park.png": "9cc93c9b6455583dc05f64e5a4a010f8",
"assets/icons/terrain.png": "89609d0266f24a1993466d83587421ee",
"assets/icons/hiking.png": "22804578e31d459258c5b20d165b353a",
"assets/icons/restaurant.png": "a2c7db6cb914a1c1f263ed1bd6dd665c",
"assets/icons/water.png": "e1b172437392d1a04821bcdd1c2af9f1",
"assets/icons/warning.png": "e5aa3f94fef71ddf956f8fae5edec286",
"assets/icons/dangerous.png": "5d5a26f50fa945ac75b1784305a9f712",
"assets/icons/details.png": "3d01ba602b2e347ba0c55d522207fe23",
"assets/icons/place_red.png": "30aefb2c8f527cf18f5923e5bfd1ff04",
"assets/icons/place_green.png": "a5c04ae81dbffe11a7c9a8c3c956afc3",
"assets/icons/place_blue.png": "9eeff35d8928b651b68aee1f52d16cd3",
"assets/icons/water_drop_blue.png": "33b26dff42c2b876db90b39c17f41cfd",
"assets/icons/water_drop_outlined_blue.png": "9aeca3f3701d9daecd31fe4ae1254e2e",
"assets/icons/water_blue.png": "5641ab26cb7fc753b11df1a25d645c90",
"assets/icons/place_grey.png": "637cd9546ed686667cb571cfb1e0525c",
"assets/icons/park_green.png": "52724f1fd61e76529a885d9bd003bf0c",
"assets/icons/forest_green.png": "b019ad73b720c2ce4279a1215f6e2c6e",
"assets/icons/terrain_green.png": "c35c393d265d4022f78b31669926bce2",
"assets/icons/hiking_green.png": "69f294bf999aef3681014280940e4ecd",
"assets/icons/details_green.png": "df87838d04eb16500e39facd29adbc4b",
"assets/icons/home_brown.png": "8f032b1adb7a2a45802b57a90e2cd469",
"assets/icons/local_parking_blue300.png": "a8e3d7e9081b670c3ed7bbed20436627",
"assets/icons/restaurant_blue300.png": "a1840e78b6054be98db5bf50473478b0",
"assets/icons/info_blue300.png": "b6eec3cfddbcbb9d763804b94b15740a",
"assets/icons/warning_amber.png": "63f04fc0ca9fbc7add712cf31292465a",
"assets/icons/dangerous_red.png": "80e48616ca148b748927f3264c2e341b",
"favicon.png": "428494e79d329529c7bef3b6d84c576b",
"icons/Icon-192.png": "3db6da041f26a85effda05d3f6a90d25",
"icons/Icon-512.png": "8fe73e0ca049c2f92643a76fd34f4164",
"index.html": "e29b51505786eb22f6b53363171600fe",
"/": "e29b51505786eb22f6b53363171600fe",
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
