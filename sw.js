/* Service Worker - MRI業務マニュアル PWA */
const CACHE_NAME = 'mri-manual-v2';

// キャッシュするファイル一覧（コアアセット）
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

// アクティベート：古いキャッシュを削除
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

// フェッチ：キャッシュファースト（Markdownファイル・HTML）
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 同一オリジンのみキャッシュ
  if (url.origin !== location.origin && !url.hostname.includes('jsdelivr.net')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Markdownファイルはキャッシュに保存
        if (response.ok && (
          event.request.url.endsWith('.md') ||
          event.request.url.endsWith('.json') ||
          event.request.url.includes('/docs/')
        )) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // オフライン時：HTMLリクエストにはindexを返す
        if (event.request.destination === 'document') {
          return caches.match('/mri-manual/index.html');
        }
        return new Response('オフライン中です', { status: 503 });
      });
    })
  );
});
