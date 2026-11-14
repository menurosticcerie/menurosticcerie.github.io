// Menu rosticcerie: serve solo perché il browser permetta di installare la pagina. Non salva
// niente: ogni richiesta va in rete, così il menu è sempre quello di oggi.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
