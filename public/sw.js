const CACHE_NAME = "product-cache";
self.addEventListener("install", (e) => {
  async function preCacheResources() {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(["/index.html"]);
  }
  e.waitUntil(preCacheResources());
});

self.addEventListener("fetch", (e) => {
  console.log(e, e.request, "requesrt");
});
