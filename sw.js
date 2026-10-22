const CACHE_NAME = "saincho-v57-quality-round1-20261022";
const APP_SHELL_CACHE = `${CACHE_NAME}-shell`;
const RUNTIME_CACHE = `${CACHE_NAME}-runtime`;

const APP_SHELL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./robots.txt",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/favicon-16.png",
  "./app.js",
  "./styles.css",
  "./data.js",
  "./content.js",
  "./nearby.js",
  "./facility-evidence.js",
  "./official-page-evidence.js",
  "./assets/japan-map-mobile.svg",
  "./assets/saincho-header-ritual.webp",
  "./assets/sauna-hero.webp",
  "./assets/sameshi-sprite-v1.webp",
  "./assets/saincho-gear-editorial-v1.jpg",
  "./assets/achievement-mascot.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_SHELL_CACHE)
      .then((cache) => cache.addAll(APP_SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("saincho-") && !key.startsWith(CACHE_NAME)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.startsWith("/api/") || url.pathname === "/version.json") {
    event.respondWith(fetch(event.request));
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(fetchAndCache(event.request).catch(() => caches.match("./index.html")));
    return;
  }

  // Version-query module imports must resolve to the pre-cached hashed file.
  const ignoreSearch = /\.[a-f0-9]{8}\.js$/.test(url.pathname);
  const cached = caches.match(event.request, { ignoreSearch });
  const fetched = fetchAndCache(event.request);
  event.waitUntil(fetched.catch(() => undefined));
  event.respondWith(cached.then(async response => response || await fetched).catch(() => Response.error()));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = new URL(event.notification.data?.url || "/", self.location.origin).href;
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((windows) => {
      const existing = windows.find((client) => client.url === target || client.url.startsWith(self.location.origin));
      if (existing) return existing.navigate(target).then(() => existing.focus());
      return self.clients.openWindow(target);
    })
  );
});

function fetchAndCache(request) {
  return fetch(request).then((response) => putRuntimeCache(request, response));
}

async function putRuntimeCache(request, response) {
  if (!response || !response.ok) return response;
  const copy = response.clone();
  try {
    const cache = await caches.open(RUNTIME_CACHE);
    await cache.put(request, copy);
  } catch { /* Cache quota must not prevent an online response. */ }
  return response;
}
