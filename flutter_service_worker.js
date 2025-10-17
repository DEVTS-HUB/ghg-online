'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/animation/Loading.gif": "4a360df54fe43938b9d5f73fb8025c50",
"assets/AssetManifest.bin": "eb0f710d1e5884488eda191ed78d401b",
"assets/AssetManifest.bin.json": "701ec21467d2fc7cc0f52627bb35db34",
"assets/AssetManifest.json": "d55f65f0b775f965c09842f553d68a86",
"assets/FontManifest.json": "15a9222ee991feb9509c82523fac1889",
"assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/fonts/Mada-Black.ttf": "8a12323a9232c22466c316fe5cb76f6a",
"assets/fonts/MaterialIcons-Regular.otf": "4068ac0d29995006f8bf38ead8076171",
"assets/icons/amendoim.svg": "1bd9bd624fd4bb19eb0c22dfddede4ff",
"assets/icons/calendar_icon.png": "88ce59fe2f741f53c827f0ee404ed162",
"assets/icons/edit.svg": "18322bb44519538ff98dddf2b8220ef0",
"assets/icons/icon_beans.svg": "1150bcd774ca19fbd2ef1a17dbde9f4c",
"assets/icons/icon_calendar.svg": "9acb30411ed34cb65a2ac5960dfbb764",
"assets/icons/icon_corn.svg": "e1cb29a2544721d83777dd1b8b76ca1d",
"assets/icons/icon_cotton.svg": "8453fa61e8269708e9cce7e86caf91dd",
"assets/icons/icon_google.png": "937c87b4439809d5b17b82728df09639",
"assets/icons/icon_livestockandpasture.svg": "355a3cce1e299e98cdcc6d91a51b1661",
"assets/icons/icon_rice.svg": "ee7351f9adfbe2b82fb9af6b8cf52ecc",
"assets/icons/icon_soy.svg": "aaefce1295d1677128ba8e0626d1949a",
"assets/icons/icon_sugarcane.svg": "19d87f26fb050ed7261783c84c5d8569",
"assets/icons/icon_wheat.svg": "07f1941983fa0c57ed45dbb5a3374c71",
"assets/icons/Img_icon_perfil.png": "f030550b98e1c3bc916c6b2d4bf2350c",
"assets/icons/mandioca.svg": "4e386d2458ea002ec742865eee0e1ece",
"assets/icons/piscicultura.svg": "c527d560c76168bb04c6e23ada57e502",
"assets/icons/trash.svg": "65349bdbc917e9dc98f7a8f14c10d533",
"assets/images/About/Agricultor.jpg": "339448141f56483d8f2198b13d2d90f0",
"assets/images/About/Capa.jpg": "a7eca7740662733f4111efd3b8dbc54d",
"assets/images/About/Logo.png": "3e38996abddd04b9bed612232abdd58c",
"assets/images/About/Plant.jpg": "fad5c8eba96bf88e195b1b9a5cd7e8b0",
"assets/images/Cotton.jpg": "790ac2a76697cc0e0ffd5201a80c2464",
"assets/images/Florest.jpg": "8aacaa29bca8b14ec944dce4ab57ab63",
"assets/images/GHG-BlueArara.png": "669aeb187404e500a8f40e80392ca821",
"assets/images/GHG-City.png": "87ba6a564c2a320f3b92f1d8efa45648",
"assets/images/GHG-Florest.png": "d21012a6e45a17d6381b7d0b79ae7afb",
"assets/images/Menu/Amendoim.jpg": "1ed2922c3e5e1e9dc7fda96737745948",
"assets/images/Menu/Beans.jpg": "ffb020015e997b78881374386956264b",
"assets/images/Menu/Corn.jpg": "44093fd14960221e20726cc362f2a510",
"assets/images/Menu/Cotton.jpg": "c4871992b990bd189bb2a37fbbb2e784",
"assets/images/Menu/LivestockAndPasture.jpg": "9fce9f0f81c687fc356a7e692f1a7069",
"assets/images/Menu/Mandioca.jpg": "09e552e506b0f5c4ec3cc730b5812b04",
"assets/images/Menu/Piscicultura.jpg": "7689022ef6b454a98370132377610fa1",
"assets/images/Menu/Rice.jpg": "6c7e29601487a1b40ffcb69a8d4e545d",
"assets/images/Menu/Soy.jpg": "8a3098d128c127c8a2c1ac8a6afac559",
"assets/images/Menu/Sugarcane.jpg": "9632c61362687fe30d97c097990a0961",
"assets/images/Menu/Wheat.jpg": "66ee0f01b1129a806479c0345fd1361e",
"assets/images/Splash-Plant.png": "0579b4a8ec893de8439b55d6a2606ac8",
"assets/images/Sugarcane.jpg": "96ae0c24058777e51684c51f03c2ab90",
"assets/NOTICES": "b795efdd15306408291e39cde680492e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/svg/agrycicle.svg": "88e36192553b4b4cd2f46b599dbf4502",
"assets/svg/facebook.svg": "ae6fc85f0b34360892b21c5a984e7709",
"assets/svg/GHG_logo_s3.svg": "1747216eed3e286cf82f1940d10c42b5",
"assets/svg/instagram.svg": "93d54c838f886c9b6e8bd64e899510e9",
"assets/svg/linkedin.svg": "4a82c6a5a0b7038c1348137d9e05ec76",
"assets/svg/mail.svg": "98f3abfec4e44b68019bc3b16bae3f9b",
"assets/web/assets/animation/Loading.gif": "4a360df54fe43938b9d5f73fb8025c50",
"assets/web/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/web/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/web/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/web/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/web/assets/fonts/Mada-Black.ttf": "8a12323a9232c22466c316fe5cb76f6a",
"assets/web/assets/icons/amendoim.svg": "1bd9bd624fd4bb19eb0c22dfddede4ff",
"assets/web/assets/icons/calendar_icon.png": "88ce59fe2f741f53c827f0ee404ed162",
"assets/web/assets/icons/edit.svg": "18322bb44519538ff98dddf2b8220ef0",
"assets/web/assets/icons/icon_beans.svg": "1150bcd774ca19fbd2ef1a17dbde9f4c",
"assets/web/assets/icons/icon_calendar.svg": "9acb30411ed34cb65a2ac5960dfbb764",
"assets/web/assets/icons/icon_corn.svg": "e1cb29a2544721d83777dd1b8b76ca1d",
"assets/web/assets/icons/icon_cotton.svg": "8453fa61e8269708e9cce7e86caf91dd",
"assets/web/assets/icons/icon_google.png": "937c87b4439809d5b17b82728df09639",
"assets/web/assets/icons/icon_livestockandpasture.svg": "355a3cce1e299e98cdcc6d91a51b1661",
"assets/web/assets/icons/icon_rice.svg": "ee7351f9adfbe2b82fb9af6b8cf52ecc",
"assets/web/assets/icons/icon_soy.svg": "aaefce1295d1677128ba8e0626d1949a",
"assets/web/assets/icons/icon_sugarcane.svg": "19d87f26fb050ed7261783c84c5d8569",
"assets/web/assets/icons/icon_wheat.svg": "07f1941983fa0c57ed45dbb5a3374c71",
"assets/web/assets/icons/Img_icon_perfil.png": "f030550b98e1c3bc916c6b2d4bf2350c",
"assets/web/assets/icons/mandioca.svg": "4e386d2458ea002ec742865eee0e1ece",
"assets/web/assets/icons/piscicultura.svg": "c527d560c76168bb04c6e23ada57e502",
"assets/web/assets/icons/trash.svg": "65349bdbc917e9dc98f7a8f14c10d533",
"assets/web/assets/images/about/Agricultor.jpg": "339448141f56483d8f2198b13d2d90f0",
"assets/web/assets/images/about/Capa.jpg": "a7eca7740662733f4111efd3b8dbc54d",
"assets/web/assets/images/about/Logo.png": "3e38996abddd04b9bed612232abdd58c",
"assets/web/assets/images/about/Plant.jpg": "fad5c8eba96bf88e195b1b9a5cd7e8b0",
"assets/web/assets/images/Cotton.jpg": "790ac2a76697cc0e0ffd5201a80c2464",
"assets/web/assets/images/Florest.jpg": "8aacaa29bca8b14ec944dce4ab57ab63",
"assets/web/assets/images/GHG-BlueArara.png": "669aeb187404e500a8f40e80392ca821",
"assets/web/assets/images/GHG-City.png": "87ba6a564c2a320f3b92f1d8efa45648",
"assets/web/assets/images/GHG-Florest.png": "d21012a6e45a17d6381b7d0b79ae7afb",
"assets/web/assets/images/menu/Amendoim.jpg": "1ed2922c3e5e1e9dc7fda96737745948",
"assets/web/assets/images/menu/Beans.jpg": "ffb020015e997b78881374386956264b",
"assets/web/assets/images/menu/Corn.jpg": "44093fd14960221e20726cc362f2a510",
"assets/web/assets/images/menu/Cotton.jpg": "c4871992b990bd189bb2a37fbbb2e784",
"assets/web/assets/images/menu/LivestockAndPasture.jpg": "9fce9f0f81c687fc356a7e692f1a7069",
"assets/web/assets/images/menu/Mandioca.jpg": "09e552e506b0f5c4ec3cc730b5812b04",
"assets/web/assets/images/menu/Piscicultura.jpg": "7689022ef6b454a98370132377610fa1",
"assets/web/assets/images/menu/Rice.jpg": "6c7e29601487a1b40ffcb69a8d4e545d",
"assets/web/assets/images/menu/Soy.jpg": "8a3098d128c127c8a2c1ac8a6afac559",
"assets/web/assets/images/menu/Sugarcane.jpg": "9632c61362687fe30d97c097990a0961",
"assets/web/assets/images/menu/Wheat.jpg": "66ee0f01b1129a806479c0345fd1361e",
"assets/web/assets/images/Splash-Plant.png": "0579b4a8ec893de8439b55d6a2606ac8",
"assets/web/assets/images/Sugarcane.jpg": "96ae0c24058777e51684c51f03c2ab90",
"assets/web/assets/svg/agrycicle.svg": "88e36192553b4b4cd2f46b599dbf4502",
"assets/web/assets/svg/facebook.svg": "ae6fc85f0b34360892b21c5a984e7709",
"assets/web/assets/svg/GHG_logo_s3.svg": "1747216eed3e286cf82f1940d10c42b5",
"assets/web/assets/svg/instagram.svg": "93d54c838f886c9b6e8bd64e899510e9",
"assets/web/assets/svg/linkedin.svg": "4a82c6a5a0b7038c1348137d9e05ec76",
"assets/web/assets/svg/mail.svg": "98f3abfec4e44b68019bc3b16bae3f9b",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "cb87233fe4f03fe0f9b31c9e9bc12ec6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23fbdce79ba543aa0abf5ec83417379a",
"/": "23fbdce79ba543aa0abf5ec83417379a",
"main.dart.js": "c45bac3372bbb906bb4e094fbcb763a6",
"manifest.json": "0102a9b6652d8710f48e797c39ccbf6a",
"version.json": "8d87cec9907ca773abc8831af1abf03a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
