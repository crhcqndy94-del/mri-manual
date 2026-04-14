/* Service Worker - MRI業務マニュアル PWA */
const CACHE_NAME = 'mri-manual-v4';

// オフライン時のコアアセット（インストール時にキャッシュ）
const CORE_ASSETS = [
  '/mri-manual/',
  '/mri-manual/index.html',
  '/mri-manual/style.css',
  '/mri-manual/script.js',
  '/mri-manual/manifest.json',
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
];

// インストール：コアアセットをキャッシュ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS).catch(err => {
        console.warn('SW: Some assets failed to cache', err);
      });
    })
  );
  self.skipWaiting();
});

// アクティベート：古いキャッシュを全て削除
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// フェッチ：ネットワーク優先（network-first）
// → 常に最新をサーバーから取得し、オフライン時だけキャッシュにフォールバック
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 外部CDN（jsdelivr）はキャッシュ優先でよい
  if (url.hostname.includes('jsdelivr.net')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        return cached || fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        });
      })
    );
    return;
  }

  // 同一オリジンのリクエストはネットワーク優先
  if (url.origin === location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // 成功したらキャッシュを更新しておく（次回オフライン用）
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => {
          // オフライン時：キャッシュにフォールバック
          return caches.match(event.request).then(cached => {
            if (cached) return cached;
            // HTMLリクエストにはトップページを返す
            if (event.request.destination === 'document') {
              return caches.match('/mri-manual/index.html');
            }
            return new Response('オフライン中です', { status: 503 });
          });
        })
    );
  }
});
