const JogoMemoria= "jogo-da-memoria";
const assets = [
  "src",
  "/",
  "/index.html",
  "/style.css",
  "/scripts.js",
 
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(JogoMemoria).then(cache => {
        cache.addAll(assets)
      })
    )
  })

  self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
