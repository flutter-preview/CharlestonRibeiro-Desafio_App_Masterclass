'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1a7367a9bc50eec4d338930b4dc8069e",
"/": "1a7367a9bc50eec4d338930b4dc8069e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "19cb1666c8bd644f1fec2dc681844769",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "a6f7a63c849fc3004a5ee4e29ed81fb8",
"assets/NOTICES": "dabc4a47d100281e24b2e3bd0df1af2f",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "324a0e0cec3a73b38b58703bc5747b17",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/montserrat/Montserrat-LightItalic.ttf": "109c02a67fc3a8511275cb415d2ce2d9",
"assets/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "7599de565fd20b987468026d7724bba3",
"assets/assets/fonts/montserrat/Montserrat-ThinItalic.ttf": "ff07fc8d013894ad1e432552a67f6c19",
"assets/assets/fonts/montserrat/Montserrat-Black.ttf": "976649f5b0b109bfc06c008372d90094",
"assets/assets/fonts/montserrat/Montserrat-Italic.ttf": "2e79685963d89831a0878b5fe44ce9b5",
"assets/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "b99427f9d8344dbf4befb450f452386c",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "cbdecee7a45d92a998429b0290bf02b0",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "128c3c68ca7303b88442a347292291fa",
"assets/assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "fafaedc048b0a95d5aacef9b650a9489",
"assets/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "026abe49088e8b1a63ab037e3ef13c23",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "bf087000dc560f8f2a318d4ddad4720f",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/assets/fonts/montserrat/Montserrat-Thin.ttf": "250b795c8fe6f7add514bc8af2050b8f",
"assets/assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "c645b4313b3c505b700c292cbdbf3bd8",
"assets/assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "f1d0b5e6b13a3d9bb8cbd9efb8f45043",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "f34bf75e5fbde2ab10e87b35c5b115e2",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/poppins/Poppins-ThinItalic.ttf": "4fc5673b837f1ba41825221a88fc7eb2",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "07502c4fe46025097dd8b1e331182ee0",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "ad298ba8cf26d9c214d28d1eef16fb4c",
"assets/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "4aa49ff8c7de4295787a4c7b318103e5",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "215bb268074bbf9212656b4a8d1fcc30",
"assets/assets/fonts/poppins/Poppins-LightItalic.ttf": "b35333e8e8fbf4546626db4717c97c72",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "010bf26d1f08aa72a7993f1e50bc0a66",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "91aa7b4539f05576f6003d7da0d5fa1c",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "cacbed9f986d5685947088fec7da20af",
"assets/assets/images/logo.png": "1c6365d38f4c66ccad513d6844a9ced0",
"assets/assets/images/masterclass_logo@2x.png": "d9cc183a4c43e040ed0e48763aab9be0",
"assets/assets/images/icon_glasses.svg": "b37e68a075ed53595f9eb4d96fc1ac68",
"assets/assets/images/logo@3x.png": "3476d414d43f6bc8477f592c69fd9f3c",
"assets/assets/images/icon_github.svg": "269d7f3d4981930201136a3babb88b8d",
"assets/assets/images/icon_toys.svg": "e9682baff743621228d5ac4311b6730e",
"assets/assets/images/firebase.png": "34123c1c7f319e2a5c19f9db3293cc79",
"assets/assets/images/dart.png": "31606c73b7cbc156f5aa9b82ce03ac84",
"assets/assets/images/masterclass_logo.png": "14aa6a8436222b6c2aa07cd185f828bf",
"assets/assets/images/icon_target.svg": "8d66b073812e9d08d83e46dbcc2af878",
"assets/assets/images/python.png": "0bd2a3fdcaf291965e49db7e2220f58c",
"assets/assets/images/icon_flutter.svg": "084b23effb5d61aec2daf964e4d5e13c",
"assets/assets/images/icon_moon.svg": "a1a97bdf4b0f6e552b47a50a078e8869",
"assets/assets/images/icon_man.svg": "31b496bb9945a3381f522d73ad662dc5",
"assets/assets/images/django.png": "44052686f4fbdc1d1d53434a080af3b9",
"assets/assets/images/icon_instagram.svg": "e7b7de6d8d45851cb41045238986cf90",
"assets/assets/images/flutter.png": "99745eb485854223786b8b8cc9a12c89",
"assets/assets/images/icon_facebook-f.svg": "7f8379b2fcb3842b6951db34f3a60e0d",
"assets/assets/images/mysql.png": "c4850635263dfbb46eed590d68fa4f38",
"assets/assets/images/my_photo.jpeg": "49bac5da994bcc463bdfcfe987ff18f9",
"assets/assets/images/masterclass_logo@3x.png": "906c1e1a742556b012d6db65b5ccd0a6",
"assets/assets/images/logo@2x.png": "f2c63011a8dee26333138b77184f1374",
"assets/assets/images/icon_arrow.svg": "e7374600f5d19a0c92ef9f9f9fff6043",
"assets/assets/images/icon_whatsapp.svg": "73ce2aeeeb033211adf570c346020b13",
"assets/FontManifest.json": "5bb5a4c965cd628f77dd49b0d98a1007",
"assets/AssetManifest.bin": "7065770754e8c74008c19aa39dd35d8c",
"assets/AssetManifest.json": "32d8668f3352afdc97ac2339b2eeea33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"main.dart.js": "9e6a66f5882955a257b7e993f9a3d153",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "946caac210739ec0dc722b014c0388ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
