const CACHE_NAME = "saincho-v37-header-home-v1";
const APP_SHELL_CACHE = `${CACHE_NAME}-shell`;
const RUNTIME_CACHE = `${CACHE_NAME}-runtime`;

const APP_SHELL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./robots.txt",
  "./llms.txt",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/saincho-icon-1024.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/favicon-16.png",
  "./assets/sauna-hero.png",
  "./assets/saincho-header-ritual.jpg",
  "./assets/saincho-og-v2.png",
  "./assets/achievement-mascot.png",
];

const FRESH_FIRST_PATHS = new Set([
  "/app.js",
  "/data.js",
  "/content.js",
  "/styles.css",
  "/sw.js",
]);

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(APP_SHELL_CACHE)
      .then((cache) => cache.addAll(APP_SHELL_ASSETS))
      .catch(() => null)
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => !key.startsWith(CACHE_NAME)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);

  if (url.pathname.startsWith("/api/")) {
    event.respondWith(fetch(event.request));
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(fetchAndCache(event.request).catch(() => caches.match("./index.html")));
    return;
  }

  if (FRESH_FIRST_PATHS.has(url.pathname)) {
    event.respondWith(fetchFreshFirst(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetched = fetchAndCache(event.request).catch(() => cached);
      return cached || fetched;
    })
  );
});

function fetchFreshFirst(request) {
  const freshRequest = new Request(request, { cache: "no-cache" });
  return fetch(freshRequest)
    .then((response) => putRuntimeCache(request, response))
    .catch(() => caches.match(request));
}

function fetchAndCache(request) {
  return fetch(request).then((response) => putRuntimeCache(request, response));
}

function putRuntimeCache(request, response) {
  if (!response || !response.ok) return response;
  const copy = response.clone();
  caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy)).catch(() => null);
  return response;
}
