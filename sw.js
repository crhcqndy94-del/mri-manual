/* Service Worker - MRI業務マニュアル PWA */
// バージョンを変える = 古いキャッシュ全削除 + 強制更新
const CACHE_NAME = 'mri-manual-v9';

// キャッシュするのは外部CDNのみ（ローカルファイルは常にネットワークから取得）
const CDN_CACHE = [
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CDN_CACHE).catch(() => {});
    })
  );
  self.skipWaiting(); // 即時アクティベート
});

self.addEventListener('activate', event => {
  event.waitUntil(
    // 古いバージョンのキャッシュを全て削除
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 外部CDN（marked.js）のみキャッシュ優先
  if (url.hostname.includes('jsdelivr.net')) {
    event.respondWith(
      caches.match(event.request).then(cached =>
        cached || fetch(event.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
      )
    );
    return;
  }

  // ローカルファイルは常にネットワーク優先（キャッシュしない）
  // オフライン時のみキャッシュフォールバック
  if (url.origin === location.origin) {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(event.request).then(cached =>
          cached || (event.request.destination === 'document'
            ? caches.match('/mri-manual/index.html')
            : new Response('オフライン中です', { status: 503 }))
        )
      )
    );
  }
});
