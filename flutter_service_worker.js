'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/refs/heads/master": "9757a77eb657730d42c2b9101f5c89cf",
".git/refs/heads/web": "59490dd6a6f56238052ae941d6490312",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/objects/pack/pack-7953dfa08f5306445921368bdf3d91991cc78e58.pack": "1e8a98a71961da3cb84c93e1cc5a46ac",
".git/objects/pack/pack-7953dfa08f5306445921368bdf3d91991cc78e58.rev": "b65f42168054d18f2eaab59f907b8af9",
".git/objects/pack/pack-7953dfa08f5306445921368bdf3d91991cc78e58.idx": "644c6848840b02ee6319f610c3957988",
".git/packed-refs": "b479045ddd98efe0bb437c25906bf8a3",
".git/logs/refs/remotes/origin/HEAD": "e010ba14dac25ddb53662f3538e478d9",
".git/logs/refs/heads/master": "e010ba14dac25ddb53662f3538e478d9",
".git/logs/refs/heads/web": "1441fccb9f7c3032bb967d24c07da838",
".git/logs/HEAD": "0f98860e21bb89472d0bddba5c374611",
".git/FETCH_HEAD": "bcb6c86f1482b9e62813b2922e3b81a1",
".git/index": "2dfca214f6dca15b0d78900037d223b8",
".git/config": "16fd5f673a4245fbb3c58a9977e2df58",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
"LICENSE": "bcdb43c50b21cc0ecd1f4e039fc1ed70",
"assets/AssetManifest.json": "503b289d4bcb4fab1d5e6cc02f911e94",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "d95da96f6d7c5b5b0f9a4f9b42b5884e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/icons/bike.png": "6d639181e67fc090415f288b3069ff17",
"assets/icons/bus.png": "cad4ee9a5fefbda72a1d5d5d909be964",
"assets/icons/camping.png": "7441376c1f75465ad396fb1e599b3fc7",
"assets/icons/cowboy-camp.png": "ccc63450c50239dd33824b07bf943049",
"assets/icons/dangerous.png": "ec5b3fe50e7c4634a75a80ce1ca33573",
"assets/icons/details.png": "9a196eef1d7d281fa10598bd67daf7ce",
"assets/icons/fire.png": "265299c53b42244abb6f81a0edecd35c",
"assets/icons/forest.png": "1d13901123b6d95d57b16cee5e38fcb2",
"assets/icons/hammock.png": "baeeec77e089ffcefaa2dc8b892665af",
"assets/icons/hiking.png": "44b44859991ac748d4dcbc2c29b55fe2",
"assets/icons/hostel.png": "4e91290dc21a294c8fe22c186f61cdb0",
"assets/icons/hotel.png": "c1e7f24732bb6cc7500e86c21ef42152",
"assets/icons/info.png": "3ccb661b631cac04fd9e2f9e8e2da219",
"assets/icons/local-parking.png": "c51c668843e4dded19252c86fdc58b23",
"assets/icons/park.png": "6a64a8d15191b80f1e613bad30202128",
"assets/icons/place-blue.png": "b50a8512330336ae24b87b0fcaac8ff6",
"assets/icons/place-green.png": "619b2344e8b1bcb2a97c37d35a2e0850",
"assets/icons/place-grey.png": "9a92795c2a0c8f88af9b3a4b4ec5d6cd",
"assets/icons/place-red.png": "2736365010ce44ac49060d1af9f90d85",
"assets/icons/pool.png": "9775f9c7ca93d17050cd13a947d36b11",
"assets/icons/restaurant.png": "8c030850dcb6c220f2a852570c0ad07b",
"assets/icons/shelter.png": "ae4dfb4f5f73f4ca684ab733358828bf",
"assets/icons/shopping-cart.png": "666f1bcce86023c6bca6d14c7a579c52",
"assets/icons/shower.png": "d1228a8b4aee22c253e2f4f6bedc2dcc",
"assets/icons/terrain.png": "2d629f404bf1cc01ab38f3d14febcc5e",
"assets/icons/trail-magic.png": "a430c4fb96b33a31a2e78378aecfc41f",
"assets/icons/warning.png": "ca4b417528dcd0eb15a5595ed12adab4",
"assets/icons/water-drop-outlined.png": "3ea35d3bff8ab1f2996f18812d2d3666",
"assets/icons/water-drop.png": "a3e639ebaf438144a30e0873878745e4",
"assets/icons/water.png": "ef0e3bbe81cec8b53ceaa1ae5172c4c8",
"assets/icons/wc.png": "79aa46bb83fb9297923c34b6d9654ff1",
"assets/images/about.png": "9c78ba62584705010b886aeabdb792e4",
"assets/images/github-qr.png": "cd2e1d587ba070aa913c2ad59640fb01",
"assets/images/github-readme-qr.png": "2d7154f6608fcde1973551017054ee73",
"assets/images/launcher.png": "7230be55205d612125328de924663b05",
"assets/kml/american-discovery-trail.kml": "6d6ab6050387dd8ed7f37f7e4b975af8",
"assets/kml/appalachian-trail.kml": "0b9cb44aae28ce799c6c4d74562e8ca8",
"assets/kml/arizona-trail.kml": "031ac23780d269881871fe224b2ccd19",
"assets/kml/colorado-trail.kml": "70f0ca0e459fab1b55b4a63fc8e04956",
"assets/kml/continental-divide-national-scenic-trail.kml": "97cbd52a69881cdc8219b6c128577352",
"assets/kml/east-coast-greenway-super.kml": "406a2bb2df3a840a193712e794fcd56a",
"assets/kml/empty.kml": "3f8fc0d3fb9224b83abc5f2a8ab7a5ad",
"assets/kml/florida-national-scenic-trail.kml": "7179924ba024a260347f64ec8ee9ca5f",
"assets/kml/long-trail.kml": "67ce85ef62a30850c80072457d62cc1b",
"assets/kml/north-american-pacific-crest-trail.kml": "08307f26a14c257c638bbbcd63991502",
"assets/kml/sample.kmz": "cda81559ba3fa705005c6a97969035eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "2147963e04ef3991e7988a822e50fac3",
"assets/thumbnails/american-discovery-trail.png": "f210f86645af7242deea40bbe0dcd84a",
"assets/thumbnails/appalachian-trail.png": "06eaa77ce604303d7e8b285c898fd7f2",
"assets/thumbnails/arizona-trail.png": "73937e694166587a4b076b5e644c4173",
"assets/thumbnails/central-california.png": "19f2d3f2e27efc51dd7875165093736b",
"assets/thumbnails/colorado-trail.png": "14f4847a1a96626808ad53cdc29fedd7",
"assets/thumbnails/continental-divide-national-scenic-trail.png": "cb7329fe41d152ded33c4d9820187464",
"assets/thumbnails/east-coast-greenway-super.png": "60f634d08e6c5804998bdf11213f0347",
"assets/thumbnails/florida-national-scenic-trail.png": "b7286327bf562c134e8d9bd67d6f1f9d",
"assets/thumbnails/long-trail.png": "91255fae4d7441fdd82b9a426a507d3c",
"assets/thumbnails/modis-fire.png": "e2067b79f7626880e82199cfe93c36f9",
"assets/thumbnails/north-american-pacific-crest-trail.png": "77d9eb052a714220afbac546d0c2debe",
"assets/thumbnails/northern-california.png": "157f2ec81a43dfd73fec130421754a4c",
"assets/thumbnails/oregon.png": "bd1615f7e7e1f3e5006396f010c33afd",
"assets/thumbnails/southern-california.png": "0466b879814a980a506821c6c7dbe284",
"assets/thumbnails/washington.png": "c9e8abc268266e5c4286e732c9dec9a6",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "428494e79d329529c7bef3b6d84c576b",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "3db6da041f26a85effda05d3f6a90d25",
"icons/Icon-512.png": "8fe73e0ca049c2f92643a76fd34f4164",
"index.html": "33a8d0effcfc4d7cb78dbf9d522c501a",
"/": "33a8d0effcfc4d7cb78dbf9d522c501a",
"main.dart.js": "dcd8adacfe27b0858f9712418d5d8335",
"manifest.json": "51a91ae769bcfa4c0e4ae1ef64877aea",
"version.json": "931184a70941c24c718a6572d46488db",
"README.md": "b0ce2151985e5e28c4f2d55f2726c961"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
