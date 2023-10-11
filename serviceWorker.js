const JogoMemoria= "jogo-da-memoria";
const assets = [
  
  "/",
  "index.html",
  "src/style.css",
  "src/imagem/feliz.png",
  "src/scripts.js",
 
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
