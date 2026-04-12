/* =====================================================
   MRI業務マニュアル script.js
   - Markdownページ読み込み・レンダリング
   - 全文検索（search-index.json ベース）
   - 目次（TOC）自動生成
   - ハンバーガーメニュー
   - 画像ライトボックス
   - PWA インストール
   ===================================================== */

// ===== marked.js 設定 =====
if (typeof marked !== 'undefined') {
  marked.setOptions({
    breaks: true,
    gfm: true,
  });
}

// ===== ページマップ =====
const PAGE_MAP = {
  'head/stroke':          'docs/manual/head/stroke.md',
  'head/aneurysm':        'docs/manual/head/aneurysm.md',
  'head/vertigo':         'docs/manual/head/vertigo.md',
  'head/epilepsy':        'docs/manual/head/epilepsy.md',
  'head/headache':        'docs/manual/head/headache.md',
  'head/neuro':           'docs/manual/head/neuro.md',
  'head/tumor':           'docs/manual/head/tumor.md',
  'head/child':           'docs/manual/head/child.md',
  'inner_ear/iac':        'docs/manual/inner_ear/iac.md',
  'sinus/sinus':          'docs/manual/sinus/sinus.md',
  'pituitary/pituitary':  'docs/manual/pituitary/pituitary.md',
  'orbit/orbit':          'docs/manual/orbit/orbit.md',
  'neck/neck':            'docs/manual/neck/neck.md',
  'neck/mra':             'docs/manual/neck/mra.md',
  'chest/chest':          'docs/manual/chest/chest.md',
  'heart/heart':          'docs/manual/heart/heart.md',
  'breast/breast':        'docs/manual/breast/breast.md',
  'abdomen/liver':        'docs/manual/abdomen/liver.md',
  'abdomen/mrcp':         'docs/manual/abdomen/mrcp.md',
  'abdomen/kidney':       'docs/manual/abdomen/kidney.md',
  'pelvis/uterus':        'docs/manual/pelvis/uterus.md',
  'pelvis/prostate':      'docs/manual/pelvis/prostate.md',
  'pelvis/rectum':        'docs/manual/pelvis/rectum.md',
  'spine/cervical':       'docs/manual/spine/cervical.md',
  'spine/thoracic':       'docs/manual/spine/thoracic.md',
  'spine/lumbar':         'docs/manual/spine/lumbar.md',
  'spine/total':          'docs/manual/spine/total.md',
  'checkin':              'docs/manual/checkin.md',
  'contrast':             'docs/manual/contrast.md',
  'minutes/index':        'docs/minutes/index.md',
  'updates/index':        'docs/updates/index.md',
};

// ===== 状態管理 =====
let currentPage = 'home';
let searchIndex = [];
let tocModal = null;

// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initSearch();
  initNavLinks();
  initLightbox();
  initTocFab();
  loadSearchIndex();

  // URL ハッシュからページ復元
  const hash = location.hash.replace('#', '');
  if (hash && PAGE_MAP[hash]) {
    navigateTo(hash);
  }
});

// ===== ハンバーガーメニュー =====
function initHamburger() {
  const btn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const closeBtn = document.getElementById('sidebarClose');

  btn.addEventListener('click', () => sidebar.classList.toggle('open'));
  overlay.addEventListener('click', () => sidebar.classList.remove('open'));
  closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));

  // 検索トグル
  const searchToggle = document.getElementById('searchToggleBtn');
  const searchBar = document.getElementById('searchBar');
  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) {
      document.getElementById('searchInput').focus();
    }
  });
}

// ===== ナビリンク（data-page 属性） =====
function initNavLinks() {
  document.body.addEventListener('click', e => {
    const link = e.target.closest('[data-page]');
    if (!link) return;
    e.preventDefault();
    const page = link.dataset.page;
    navigateTo(page);
    // サイドバーを閉じる
    document.getElementById('sidebar').classList.remove('open');
    // 検索バーを閉じる
    document.getElementById('searchBar').classList.remove('open');
  });
}

// ===== ページ遷移 =====
function navigateTo(page) {
  currentPage = page;
  location.hash = page;

  const homePage = document.getElementById('homePage');
  const manualPage = document.getElementById('manualPage');

  // アクティブリンク更新
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });

  if (page === 'home') {
    homePage.classList.remove('hidden');
    manualPage.classList.add('hidden');
    document.getElementById('fabToc').style.display = 'none';
    window.scrollTo(0, 0);
    return;
  }

  if (PAGE_MAP[page]) {
    homePage.classList.add('hidden');
    manualPage.classList.remove('hidden');
    loadMarkdownPage(PAGE_MAP[page]);
    window.scrollTo(0, 0);
  }
}

// ===== Markdown ページ読み込み =====
async function loadMarkdownPage(mdPath) {
  const content = document.getElementById('manualContent');
  content.innerHTML = '<div class="loading">読み込み中...</div>';

  try {
    const res = await fetch(mdPath);
    if (!res.ok) throw new Error('not found');
    const md = await res.text();
    renderMarkdown(md);
  } catch (err) {
    content.innerHTML = `
      <div class="notice-box notice-warning">
        <div class="notice-title">⚠️ ページが見つかりません</div>
        <p>マニュアルファイル（<code>${mdPath}</code>）がまだ作成されていません。</p>
        <p>管理者が Markdown ファイルを追加するとここに表示されます。</p>
      </div>`;
  }
}

// ===== Markdown レンダリング =====
function renderMarkdown(md) {
  const content = document.getElementById('manualContent');

  // カスタム記法を前処理
  let processed = preprocessMarkdown(md);

  // marked でレンダリング
  const html = typeof marked !== 'undefined' ? marked.parse(processed) : fallbackRender(processed);
  content.innerHTML = html;

  // 後処理
  postprocessContent(content);

  // TOC 生成
  buildTOC(content);

  // FAB TOC ボタン表示
  const fabToc = document.getElementById('fabToc');
  if (fabToc) fabToc.style.display = 'flex';
}

// ===== Markdown 前処理（独自記法） =====
function preprocessMarkdown(md) {
  // :::warning ... ::: → 注意ボックス
  md = md.replace(/:::warning\s*(.*?)\n([\s\S]*?):::/gm, (_, title, body) =>
    `<div class="notice-box notice-warning"><div class="notice-title">⚠️ ${title}</div>${body.trim()}</div>\n`
  );
  // :::danger ... :::
  md = md.replace(/:::danger\s*(.*?)\n([\s\S]*?):::/gm, (_, title, body) =>
    `<div class="notice-box notice-danger"><div class="notice-title">🚨 ${title}</div>${body.trim()}</div>\n`
  );
  // :::info ... :::
  md = md.replace(/:::info\s*(.*?)\n([\s\S]*?):::/gm, (_, title, body) =>
    `<div class="notice-box notice-info"><div class="notice-title">ℹ️ ${title}</div>${body.trim()}</div>\n`
  );
  // :::success ... :::
  md = md.replace(/:::success\s*(.*?)\n([\s\S]*?):::/gm, (_, title, body) =>
    `<div class="notice-box notice-success"><div class="notice-title">✅ ${title}</div>${body.trim()}</div>\n`
  );
  // 動画プレースホルダ [VIDEO:タイトル]
  md = md.replace(/\[VIDEO:(.*?)\]/g, (_, title) =>
    `<div class="placeholder-box"><span class="placeholder-icon">🎬</span><strong>${title}</strong><br>動画ファイルをここに追加してください<br><small>assets/videos/ フォルダに MP4 を置いてリンクを設定</small></div>`
  );
  // 画像プレースホルダ [IMG:説明]
  md = md.replace(/\[IMG:(.*?)\]/g, (_, desc) =>
    `<div class="placeholder-box"><span class="placeholder-icon">🖼️</span><strong>${desc}</strong><br>画像ファイルをここに追加してください<br><small>assets/images/ フォルダに画像を置いてリンクを設定</small></div>`
  );
  return md;
}

// ===== コンテンツ後処理 =====
function postprocessContent(container) {
  // 見出しに ID 付与
  container.querySelectorAll('h2, h3, h4').forEach(h => {
    const id = textToId(h.textContent);
    h.id = id;
  });

  // 画像クリックでライトボックス
  container.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  // 外部リンクを新タブで開く
  container.querySelectorAll('a[href^="http"]').forEach(a => {
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

// ===== TOC 生成 =====
function buildTOC(container) {
  const tocNav = document.getElementById('tocNav');
  if (!tocNav) return;
  tocNav.innerHTML = '';

  const headings = container.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  headings.forEach(h => {
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.className = h.tagName === 'H3' ? 'toc-h3' : 'toc-h2';
    a.addEventListener('click', e => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // モバイルTOCを閉じる
      if (tocModal) tocModal.classList.remove('open');
    });
    tocNav.appendChild(a);
  });

  // スクロール連動ハイライト
  initTocHighlight(container);
}

function initTocHighlight(container) {
  const headings = Array.from(container.querySelectorAll('h2, h3'));
  const tocLinks = document.querySelectorAll('#tocNav a, .toc-modal-content a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-60px 0px -60% 0px' });

  headings.forEach(h => observer.observe(h));
}

// ===== FAB TOC ボタン（スマホ） =====
function initTocFab() {
  const fab = document.getElementById('fabToc');
  if (!fab) return;
  fab.style.display = 'none';

  // TOC モーダル作成
  tocModal = document.createElement('div');
  tocModal.className = 'toc-modal';
  tocModal.innerHTML = `
    <div class="toc-modal-overlay"></div>
    <div class="toc-modal-content">
      <div class="toc-modal-title">目次</div>
      <nav id="tocModalNav"></nav>
    </div>`;
  document.body.appendChild(tocModal);

  tocModal.querySelector('.toc-modal-overlay').addEventListener('click', () => {
    tocModal.classList.remove('open');
  });

  fab.addEventListener('click', () => {
    // TOC内容をモーダルに複製
    const tocNav = document.getElementById('tocNav');
    const modalNav = document.getElementById('tocModalNav');
    modalNav.innerHTML = tocNav.innerHTML;
    // クリックで閉じる
    modalNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => tocModal.classList.remove('open'));
    });
    tocModal.classList.add('open');
  });
}

// ===== 検索 =====
async function loadSearchIndex() {
  try {
    const res = await fetch('search-index.json');
    if (res.ok) {
      searchIndex = await res.json();
    }
  } catch (e) {
    // インデックスなし
  }
}

function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const clearBtn = document.getElementById('searchClearBtn');

  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => performSearch(input.value), 150);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    results.innerHTML = '';
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('searchBar').classList.remove('open');
    }
  });
}

function performSearch(query) {
  const results = document.getElementById('searchResults');
  query = query.trim();

  if (!query || query.length < 2) {
    results.innerHTML = '';
    return;
  }

  const q = query.toLowerCase();
  const hits = searchIndex
    .filter(item =>
      item.title.toLowerCase().includes(q) ||
      (item.content && item.content.toLowerCase().includes(q))
    )
    .slice(0, 10);

  if (hits.length === 0) {
    results.innerHTML = `<div class="search-no-result">「${escapeHtml(query)}」に一致するページが見つかりませんでした</div>`;
    return;
  }

  results.innerHTML = hits.map(item => {
    const snippet = getSnippet(item.content || '', q);
    return `
      <div class="search-result-item" data-page="${escapeHtml(item.page)}" tabindex="0" role="button">
        <div class="search-result-title">${highlight(item.title, q)}</div>
        <div class="search-result-section">${escapeHtml(item.section || '')}</div>
        ${snippet ? `<div class="search-result-snippet">${highlight(snippet, q)}</div>` : ''}
      </div>`;
  }).join('');

  // 検索結果クリックで遷移
  results.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      navigateTo(el.dataset.page);
      document.getElementById('searchBar').classList.remove('open');
      results.innerHTML = '';
      document.getElementById('searchInput').value = '';
    });
  });
}

function getSnippet(text, query, len = 80) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return '';
  const start = Math.max(0, idx - 20);
  const end = Math.min(text.length, idx + len);
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
}

function highlight(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = escapeRegex(escapeHtml(query));
  return escapeHtml(text).replace(new RegExp(escaped, 'gi'), m => `<mark>${m}</mark>`);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ===== ライトボックス =====
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const closeBtn = lb.querySelector('.lightbox-close');
  const overlay = lb.querySelector('.lightbox-overlay');

  [closeBtn, overlay].forEach(el => {
    el.addEventListener('click', () => lb.classList.add('hidden'));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lb.classList.add('hidden');
  });
}

function openLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = src;
  img.alt = alt || '';
  lb.classList.remove('hidden');
}

// ===== ユーティリティ =====
function textToId(text) {
  return text
    .replace(/[■▶▼①②③④⑤⑥⑦⑧⑨⑩\s]/g, '-')
    .replace(/[^a-zA-Z0-9\u3040-\u9FFF-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase() || 'section-' + Math.random().toString(36).slice(2, 6);
}

function fallbackRender(md) {
  // marked.js がない場合の簡易レンダラー（開発用）
  return '<pre>' + escapeHtml(md) + '</pre>';
}

// ===== Service Worker 登録 =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/mri-manual/sw.js').catch(() => {});
  });
}

// ===== PWA インストールバナー =====
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallBanner();
});

function showInstallBanner() {
  const banner = document.createElement('div');
  banner.style.cssText = `
    position:fixed;bottom:80px;left:50%;transform:translateX(-50%);
    background:#1a5276;color:#fff;padding:12px 20px;border-radius:24px;
    font-size:0.85rem;z-index:999;box-shadow:0 4px 16px rgba(0,0,0,.3);
    display:flex;align-items:center;gap:10px;white-space:nowrap;`;
  banner.innerHTML = `📱 ホーム画面に追加できます
    <button style="background:#fff;color:#1a5276;border:none;padding:4px 12px;border-radius:12px;font-weight:700;cursor:pointer;" id="installBtn">追加</button>
    <button style="background:none;border:none;color:#fff;cursor:pointer;font-size:1rem;" id="dismissInstall">✕</button>`;
  document.body.appendChild(banner);

  document.getElementById('installBtn').addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    }
    banner.remove();
  });
  document.getElementById('dismissInstall').addEventListener('click', () => banner.remove());
}
