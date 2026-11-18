/* 山西稷山板枣生产系统 H5 数字展馆 —— 页面与交互 */
(function () {
  'use strict';
  const D = window.JS_DATA, M = window.JS_MEDIA || {};
  const HALLS = D.halls;
  const ON_PLATFORM = /^\/h5(\/|$)/.test(location.pathname);
  const SHOT = '2026 年项目实拍';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const isSB = (stem) => /^SB-/.test(stem);
  const src = (stem) => 'assets/img/' + (isSB(stem) ? stem : 'JSBZ-' + stem) + '.jpg';
  const meta = (stem) => M[stem] || {};
  // 视频文件在资源库平台上；公网版没有视频，播放按钮不显示
  const canVideo = (stem) => !!(ON_PLATFORM && stem && M[stem] && M[stem].video);
  const capOf = (stem, over) => over || (isSB(stem) ? '' : [meta(stem).cap, meta(stem).date].filter(Boolean).join(' · '));
  // 申报书以外的影像，说明里一律注明「2026 年项目实拍」
  const withShot = (stem, cap) => (isSB(stem) || /2026/.test(cap)) ? cap : (cap ? cap + ' · ' : '') + SHOT;
  const hallById = (id) => HALLS.find((h) => h.id === id);
  // 讲解音频带上版本号，换新录音后不会读到浏览器里的旧缓存
  const VER = (() => { const sc = document.querySelector('script[src*="app.js"]'); const m = sc && /[?&]v=([^&]+)/.exec(sc.src); return m ? m[1] : ''; })();

  /* ---------- 本机存储（失败时只在内存里记） ---------- */
  const mem = {};
  const store = {
    get(k, d) { try { const v = localStorage.getItem('jsbz3-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } },
    set(k, v) { mem[k] = v; try { localStorage.setItem('jsbz3-' + k, JSON.stringify(v)); } catch (e) { /* 忽略 */ } }
  };
  const state = { voice: store.get('voice', false), stamps: store.get('stamps', []), page: '' };

  /* ---------- 图标 ---------- */
  const I = {
    cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    snd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18.2 6.5a8 8 0 0 1 0 11"/></svg>',
    mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5M10.5 8v5M8 10.5h5"/></svg>'
  };

  /* ---------- 板啾啾 ---------- */
  function mascotSVG(mood) {
    const g = (id) => id + '-' + mood;
    const armL = mood === 'wave' ? ' transform="rotate(30 54 135)"' : '';
    const armR = mood === 'point' ? ' transform="rotate(-60 170 132)"' : '';
    const red = 'url(#' + g('red') + ')', limb = 'url(#' + g('limb') + ')';
    const mouth = mood === 'wave' || mood === 'happy'
      ? '<path d="M101 126 Q 112 142 123 126 Q 112 128.5 101 126 Z" fill="#5a1d17" stroke="#3b2318" stroke-width="1.2" stroke-linejoin="round"/><path d="M106.5 134 Q 112 138.5 117.5 134 Q 112 132 106.5 134 Z" fill="#f07a7f"/>'
      : '<path d="M102 127 Q 112 134.5 122 127" stroke="#3b2318" stroke-width="1.9" fill="none" stroke-linecap="round"/>';
    return '<svg class="mz" viewBox="0 0 224 236" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>' +
      '<radialGradient id="' + g('red') + '" cx="34%" cy="26%" r="80%"><stop offset="0" stop-color="#ff6a5c"/><stop offset=".38" stop-color="#ec1c24"/><stop offset=".8" stop-color="#c50f17"/><stop offset="1" stop-color="#97080f"/></radialGradient>' +
      '<linearGradient id="' + g('limb') + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4333a"/><stop offset="1" stop-color="#b80c14"/></linearGradient>' +
      '<linearGradient id="' + g('face') + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8bf9f"/><stop offset=".16" stop-color="#f6d8bd"/><stop offset="1" stop-color="#fae3cd"/></linearGradient>' +
      '<linearGradient id="' + g('stem') + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a5030"/><stop offset=".45" stop-color="#6b3a1e"/><stop offset="1" stop-color="#46220f"/></linearGradient>' +
      '<linearGradient id="' + g('leaf') + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5fbf45"/><stop offset="1" stop-color="#2c7a22"/></linearGradient>' +
      '<radialGradient id="' + g('blush') + '"><stop offset="0" stop-color="#f58b95" stop-opacity=".75"/><stop offset="1" stop-color="#f58b95" stop-opacity="0"/></radialGradient></defs>' +
      '<ellipse cx="112" cy="226" rx="54" ry="6.5" fill="rgba(0,0,0,.2)"/>' +
      '<path d="M83 195 C 81 209, 84 221, 96 222 C 107 223, 111 213, 108 198 Z" fill="' + limb + '"/><ellipse cx="132" cy="211" rx="19" ry="14" fill="' + red + '"/><ellipse cx="125" cy="205" rx="6" ry="3.2" fill="#fff" opacity=".45"/>' +
      '<g' + armR + '><path d="M168 128 C 184 128, 194 138, 193 152 C 193 161, 190 167, 186 172" stroke="' + limb + '" stroke-width="21" fill="none" stroke-linecap="round"/><circle cx="185" cy="174" r="12.5" fill="' + red + '"/><ellipse cx="181" cy="169" rx="4.2" ry="2.6" fill="#fff" opacity=".5"/></g>' +
      '<g' + armL + '><path d="M56 136 C 40 138, 26 136, 25 122 C 24 114, 27 106, 31 100" stroke="' + limb + '" stroke-width="21" fill="none" stroke-linecap="round"/><circle cx="32" cy="95" r="14" fill="' + red + '"/><ellipse cx="27" cy="89" rx="5" ry="3" fill="#fff" opacity=".55"/></g>' +
      '<path d="M112 56 C 103 47, 84 43, 70 47 C 52 52, 45 71, 45 93 C 45 121, 48 151, 54 173 C 59 196, 82 206, 112 206 C 142 206, 165 196, 170 173 C 176 151, 179 121, 179 93 C 179 71, 172 52, 154 47 C 140 43, 121 47, 112 56 Z" fill="' + red + '" stroke="#8e0a10" stroke-width="1.6"/>' +
      '<path d="M61 64 C 54 76, 52 92, 54 106" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/><ellipse cx="78" cy="56" rx="10" ry="4.8" transform="rotate(-16 78 56)" fill="#fff" opacity=".55"/>' +
      '<rect x="63.5" y="73.5" width="97" height="77" rx="32" fill="#a90a12" opacity=".55"/><rect x="66" y="76" width="92" height="72" rx="30" fill="url(#' + g('face') + ')"/>' +
      '<ellipse cx="81" cy="129" rx="10.5" ry="6.2" fill="url(#' + g('blush') + ')"/><ellipse cx="143" cy="129" rx="10.5" ry="6.2" fill="url(#' + g('blush') + ')"/>' +
      '<ellipse cx="92" cy="110" rx="5.5" ry="7" fill="#1d1210"/><ellipse cx="132" cy="110" rx="5.5" ry="7" fill="#1d1210"/><circle cx="90.3" cy="107.2" r="2.1" fill="#fff"/><circle cx="130.3" cy="107.2" r="2.1" fill="#fff"/>' +
      '<ellipse cx="112" cy="119" rx="6.4" ry="4.6" fill="#e9707d"/><ellipse cx="110" cy="117.4" rx="2.3" ry="1.2" fill="#fff" opacity=".6"/>' + mouth +
      '<path d="M111 54 C 109 42, 106 32, 110 26 C 114 20, 123 19, 129 25" stroke="url(#' + g('stem') + ')" stroke-width="11" fill="none" stroke-linecap="round"/>' +
      '<path d="M117 48 C 126 34, 146 29, 162 35 C 153 47, 134 54, 117 48 Z" fill="url(#' + g('leaf') + ')" stroke="#24661c" stroke-width="1"/><path d="M119 47 C 131 41.5, 145 38, 159 35.5" stroke="#2a6e20" stroke-width="1.3" fill="none" stroke-linecap="round"/>' +
      '</svg>';
  }

  /* ---------- 印章 ---------- */
  function sealSVG(txt, color, uid) {
    const c = color || 'var(--seal)';
    const a = txt.charAt(0), b = txt.charAt(1);
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<filter id="rough' + uid + '"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="' + ((parseInt(String(uid).replace(/\D/g, ''), 10) || 0) + 3) + '"/><feDisplacementMap in="SourceGraphic" scale="2.6"/></filter>' +
      '<g filter="url(#rough' + uid + ')" fill="none" stroke="' + c + '"><rect x="8" y="8" width="84" height="84" rx="9" stroke-width="6"/><rect x="17" y="17" width="66" height="66" rx="4" stroke-width="1.6"/></g>' +
      '<g fill="' + c + '" font-family="JSSerif, Songti SC, STSong, serif" font-weight="700" text-anchor="middle" filter="url(#rough' + uid + ')">' +
      '<text x="50" y="47" font-size="27">' + esc(a) + '</text><text x="50" y="77" font-size="27">' + esc(b) + '</text></g></svg>';
  }

  /* ---------- 讲解音频 ---------- */
  const audio = new Audio(); audio.preload = 'none';
  let curKey = null;
  function playKey(key) {
    if (!key) return;
    if (curKey === key && !audio.paused) { audio.pause(); return; }
    curKey = key; audio.src = 'assets/audio/' + key + '.mp3' + (VER ? '?v=' + VER : '');
    audio.play().catch(() => { curKey = null; syncAudio(); });
    syncAudio();
  }
  function autoPlay(key) { if (!key || (curKey === key && !audio.paused)) return; playKey(key); }
  function stopAudio() { audio.pause(); curKey = null; syncAudio(); }
  function syncAudio() {
    const playing = !audio.paused && curKey;
    $$('[data-a]').forEach((el) => {
      const on = playing && el.dataset.a === curKey;
      el.classList.toggle('playing', !!on);
      const ic = el.querySelector('.ic'); if (ic) ic.innerHTML = on ? I.pause : I.play;
      const tx = el.querySelector('.tx'); if (tx) tx.textContent = on ? (el.dataset.on || '暂停') : (el.dataset.off || '收听');
    });
    const g = $('#guide'); if (g) g.classList.toggle('talk', !!(playing && curKey === pageNarr()));
  }
  ['play', 'pause', 'ended'].forEach((ev) => audio.addEventListener(ev, () => { if (ev === 'ended') curKey = null; syncAudio(); }));
  function pageNarr() {
    const p = state.page;
    if (p === 'cover' || p === 'prelude') return p;
    const h = hallById(p); return h ? h.narr : null;
  }
  const audioBtn = (key, off, on) => '<button class="pill" data-a="' + key + '" data-off="' + (off || '收听') + '" data-on="' + (on || '暂停') + '"><span class="ic">' + I.play + '</span><span class="tx">' + (off || '收听') + '</span></button>';

  /* ---------- 小部件 ---------- */
  function ph(stem, opts) {
    opts = Object.assign({}, opts || {});
    if (opts.video && !canVideo(opts.video)) opts.video = null;
    const m = meta(stem);
    const cap = withShot(stem, capOf(stem, opts.cap));
    const v = opts.video ? '<span class="play">' + I.play + '视频</span>' : '';
    const attrs = opts.video ? ' data-v="' + opts.video + '"' : ' data-z="' + stem + '" data-g="' + (opts.g || 'p') + '" data-cap="' + esc(cap) + '"';
    return '<button class="ph ' + (opts.r == null ? 'r43' : opts.r) + (opts.cls ? ' ' + opts.cls : '') + '"' + attrs + ' aria-label="' + esc(cap || '查看大图') + '"><img loading="lazy" src="' + src(stem) + '" alt="' + esc(cap) + '"' + (m.w ? ' width="' + m.w + '" height="' + m.h + '"' : '') + '>' + v + '</button>';
  }
  function fig(stem, opts) { opts = opts || {}; return '<figure>' + ph(stem, opts) + '<figcaption>' + esc(withShot(stem, capOf(stem, opts.cap))) + '</figcaption></figure>'; }
  const sec = (title, lede, body, id) => '<section class="sec wrap"' + (id ? ' id="' + id + '"' : '') + '><h2>' + esc(title) + '</h2>' + (lede ? '<p class="lede">' + esc(lede) + '</p>' : '') + '<div class="body">' + body + '</div></section>';
  const recTable = (rows, cls) => '<table class="rec' + (cls ? ' ' + cls : '') + '">' + rows.map((r) => '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>').join('') + '</table>';
  const srcNote = (t) => t ? '<p class="src">' + esc(t) + '</p>' : '';
  const para = (t) => '<p class="txt">' + esc(t) + '</p>';
  const tags = (list, cls) => '<div class="tags' + (cls ? ' ' + cls : '') + '">' + list.map((t) => '<span>' + esc(t) + '</span>').join('') + '</div>';
  const quote = (q, s, cls) => '<blockquote class="qt' + (cls ? ' ' + cls : '') + '"><p>' + esc(q) + '</p>' + (s ? '<cite>' + esc(s) + '</cite>' : '') + '</blockquote>';
  const nums = (list) => '<div class="vals">' + list.map((n) => '<div class="val"><span class="big">' + esc(n[0]) + '<small>' + esc(n[1]) + '</small></span><p>' + esc(n[2]) + '</p></div>').join('') + '</div>';
  function bars(rows, opts) {
    opts = opts || {};
    const max = opts.max || Math.max.apply(null, rows.map((r) => r[1]));
    return '<div class="bars">' + rows.map((r) => '<div class="brow"><span class="bl">' + esc(r[0]) + '</span><span class="bt"><i style="width:' + Math.max(1.5, r[1] / max * 100).toFixed(1) + '%"></i></span><span class="bv">' + esc(r[2] || r[1]) + '</span></div>').join('') + '</div>';
  }
  function legendList(list) { return '<ul class="lgd">' + list.map((l) => '<li><i style="background:' + l[0] + '"></i>' + esc(l[1]) + '</li>').join('') + '</ul>'; }
  function mapBox(m, g) {
    return '<figure class="mapbox">' + ph(m.img, { r: '', g: g || 'map', cap: m.t, cls: 'map' }) + '<span class="zm">' + I.zoom + '点击放大</span>' +
      '<figcaption><b>' + esc(m.t) + '</b>' + (m.legend ? legendList(m.legend) : '') + (m.note ? '<span class="nt">' + esc(m.note) + '</span>' : '') + '</figcaption></figure>';
  }
  // 多张图件：上方切换，点击图片可左右翻看全部
  function mapTabs(list, g) {
    return '<div class="maptabs" data-mt><div class="chips scr" role="tablist">' + list.map((m, i) => '<button class="chip" role="tab" aria-pressed="' + (i === 0) + '" data-i="' + i + '">' + esc(m.tab || m.t) + '</button>').join('') + '</div>' +
      list.map((m, i) => '<div class="mt"' + (i ? ' hidden' : '') + '>' + mapBox(m, g) + '</div>').join('') + '</div>';
  }
  function mountMapTabs(root) {
    $$('[data-mt]', root).forEach((box) => {
      const btns = $$('.chips .chip', box), panes = $$(':scope > .mt', box);
      btns.forEach((b) => { b.onclick = () => { const i = +b.dataset.i; btns.forEach((x, j) => x.setAttribute('aria-pressed', j === i)); panes.forEach((p, j) => { p.hidden = j !== i; }); }; });
    });
  }
  function scans(list, g, label) {
    return '<div class="scans"><span class="sl">' + esc(label || '原件扫描') + '</span><div class="hscroll">' + list.map((s, i) => ph(s, { r: '', g: g, cap: (label || '原件扫描') + '（' + (i + 1) + '/' + list.length + '）', cls: 'scan' })).join('') + '</div></div>';
  }
  function toast(t) {
    const el = document.createElement('div'); el.className = 'toast'; el.textContent = t; document.body.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }
  // 一组可展开的条目（原生 details，键盘和读屏都能用）
  const acc = (rows, cls) => '<div class="acc' + (cls ? ' ' + cls : '') + '">' + rows.map((r) => '<details><summary><b>' + esc(r[0]) + '</b>' + (r[2] ? '<em>' + esc(r[2]) + '</em>' : '') + '</summary><p>' + esc(r[1]) + '</p>' + (r[3] || '') + '</details>').join('') + '</div>';
  const vrows = (rows) => '<div class="vrows">' + rows.map((r) => '<div class="vr"><b>' + esc(r[0]) + '</b><p>' + esc(r[1]) + '</p></div>').join('') + '</div>';

  /* ---------- 大图与视频 ---------- */
  function openLightbox(list, idx) {
    let i = idx;
    const el = document.createElement('div'); el.className = 'lb'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
    const hd = (it) => ON_PLATFORM && !isSB(it.stem) && meta(it.stem).hd;
    function draw() {
      const it = list[i];
      el.innerHTML = '<div class="top"><span>' + (list.length > 1 ? (i + 1) + ' / ' + list.length : '') + '</span><button aria-label="关闭">' + I.x + '</button></div>' +
        '<div class="stage"><img src="' + src(it.stem) + '" alt=""></div>' +
        '<div class="cap">' + esc(it.cap) + '<small>' + (isSB(it.stem) ? '图片出自申报书' : '素材编号 JSBZ-' + esc(it.stem)) + '</small></div>' +
        (list.length > 1 ? '<button class="nav p" aria-label="上一张">' + I.l + '</button><button class="nav n" aria-label="下一张">' + I.r + '</button>' : '');
      const im = $('.stage img', el);
      if (hd(it)) { const b = '/media/image/JSBZ-' + it.stem + '-2K.jpg', pre = new Image(); pre.onload = () => { im.src = b; }; pre.src = b; }
      $('.top button', el).onclick = close;
      $$('.nav', el).forEach((n) => { n.onclick = (e) => { e.stopPropagation(); go(n.classList.contains('n') ? 1 : -1); }; });
    }
    function go(d) { i = (i + d + list.length) % list.length; draw(); }
    function close() { el.remove(); document.removeEventListener('keydown', key); }
    function key(e) { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); }
    let sx = null;
    el.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', (e) => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50 && list.length > 1) go(dx < 0 ? 1 : -1); sx = null; });
    document.addEventListener('keydown', key);
    document.body.appendChild(el); draw();
  }
  function openVideo(stem) {
    const m = meta(stem);
    const el = document.createElement('div'); el.className = 'lb'; el.setAttribute('role', 'dialog');
    const body = '<video controls playsinline webkit-playsinline preload="metadata" poster="' + src(stem) + '" src="/media/' + esc(m.video) + '"></video>';
    el.innerHTML = '<div class="top"><span>视频</span><button aria-label="关闭">' + I.x + '</button></div><div class="stage">' + body + '</div><div class="cap">' + esc(withShot(stem, capOf(stem))) + '<small>素材编号 JSBZ-' + esc(stem) + '</small></div>';
    const v = $('video', el);
    $('.top button', el).onclick = () => { v.pause(); el.remove(); };
    document.body.appendChild(el); stopAudio(); v.play().catch(() => {});
  }

  /* 全局点击：大图、视频、音频 */
  document.addEventListener('click', (e) => {
    const z = e.target.closest('[data-z]');
    if (z) {
      const all = $$('[data-z][data-g="' + z.dataset.g + '"]');
      openLightbox(all.map((n) => ({ stem: n.dataset.z, cap: n.dataset.cap || '' })), Math.max(0, all.indexOf(z))); return;
    }
    const v = e.target.closest('[data-v]'); if (v) { openVideo(v.dataset.v); return; }
    const a = e.target.closest('[data-a]'); if (a) { playKey(a.dataset.a); return; }
    const go = e.target.closest('[data-go]'); if (go) { go.classList.add('hl'); setTimeout(() => { location.hash = go.dataset.go; }, 140); }
  });

  /* ---------- 盖章 ---------- */
  function hasStamp(id) { return state.stamps.indexOf(id) >= 0; }
  function addStamp(id) {
    if (hasStamp(id)) return false;
    state.stamps = state.stamps.concat(id); store.set('stamps', state.stamps); return true;
  }

  /* ---------- 页面骨架 ---------- */
  function bar(title, back) {
    return '<header class="bar"><a class="back" href="#' + back[0] + '">' + I.back + esc(back[1]) + '</a><div class="ttl">' + esc(title) + '</div>' +
      '<button class="snd' + (state.voice ? ' on' : '') + '" data-voice aria-label="语音导览" aria-pressed="' + state.voice + '">' + (state.voice ? I.snd : I.mute) + '</button></header>';
  }
  function voiceBtnSync() {
    $$('[data-voice]').forEach((b) => { b.classList.toggle('on', state.voice); b.setAttribute('aria-pressed', state.voice); b.innerHTML = state.voice ? I.snd : I.mute; });
    $$('.switch').forEach((s) => s.setAttribute('aria-checked', state.voice));
  }
  function setVoice(on) {
    state.voice = on; store.set('voice', on); voiceBtnSync();
    if (on) { const k = pageNarr(); if (k) autoPlay(k); toast('语音导览已开启'); } else { stopAudio(); toast('语音导览已关闭'); }
  }
  document.addEventListener('click', (e) => { if (e.target.closest('[data-voice]')) setVoice(!state.voice); });

  /* ================= 封面 ================= */
  function pCover() {
    return {
      html: '<section class="cover"><div class="pan"><img src="assets/pano/' + D.coverPano + '.jpg" alt="稷山古枣林航拍全景"></div><div class="veil"></div>' +
        '<div class="in"><div class="org">' + esc(D.org) + '</div><div class="grow"></div>' +
        '<div class="mzrow">' + mascotSVG('wave') + '</div>' +
        '<h1>' + D.titleLines.map((t) => '<span>' + esc(t) + '</span>').join('') + '</h1>' +
        '<div class="sub">' + esc(D.subtitle) + '</div>' +
        '<p class="lead">' + esc(D.lead) + '</p>' +
        '<div class="acts"><a class="btn-enter" href="#prelude">进入展馆' + I.arrow + '</a>' +
        '<button class="switch" role="switch" aria-checked="' + state.voice + '"><span class="tg"></span>语音导览</button></div>' +
        '<p class="credit">封面为 2026 年项目航拍全景</p></div></section>',
      mount(root) {
        $('.switch', root).onclick = () => setVoice(!state.voice);
        // iOS 和微信里，声音必须在点击时先放出来；这里点「进入展馆」时直接开始播放序厅讲解
        $('.btn-enter', root).addEventListener('click', () => { if (state.voice) autoPlay('prelude'); });
      }
    };
  }

  /* ================= 序厅 ================= */
  function pPrelude() {
    const P = D.prelude, Z = P.zone;
    const facts = recTable(P.facts) + srcNote(P.factsSrc) +
      '<div class="doc">' + ph(P.cover, { r: '', g: 'doc', cap: '申报书封面' }) + '<div><b>申报书</b><p>' + esc(D.source.replace(/（.*）/, '')) + '</p><p class="small">正文五章：遗产地概况、遗产特征、遗产功能与重要性评估、问题挑战与机遇、保护与发展措施；另附图件与照片、技术规程、四季歌、修剪歌、物候历、管理办法和科研文献目录。</p></div></div>';
    const zone = mapBox({ img: Z.img, t: Z.t, legend: Z.legend }, 'zone') + '<p class="txt" style="margin-top:12px">' + esc(Z.note) + '</p>' + tags(Z.villages, 'vill') +
      '<div class="row"><a class="pill" href="ar.html#sandbox">' + I.cube + 'AR 沙盘：立起三个分区</a></div>';
    const pts = '<ol class="feats">' + P.points.map((p) => {
      const h = hallById(p.to);
      return '<li><button data-go="' + p.to + '"><span class="n">' + '一二三四五'.charAt(P.points.indexOf(p)) + '</span><b>' + esc(p.t) + '</b><p>' + esc(p.d) + '</p><span class="to">第' + h.no + '展厅 · ' + esc(h.name) + I.r + '</span></button></li>';
    }).join('') + '</ol>';
    const rows = HALLS.map((h) => '<button class="lrow" data-go="' + h.id + '"><span class="no">' + h.no + '</span><span class="nm"><b>' + esc(h.name) + '</b><small>' + esc(h.sub) + '</small></span><span class="chev">' + I.r + '</span></button>').join('');
    return {
      html: bar('序厅', ['cover', '封面']) + '<div class="page">' +
        '<div class="hero short"><img src="' + src(P.hero) + '" alt="' + esc(P.heroCap) + '"></div>' +
        '<header class="hall-head wrap"><div class="no">序厅</div><h1>遗产概要</h1><p class="pc">' + esc(P.heroCap) + '</p></header>' +
        '<div class="wrap"><p class="hall-intro">' + esc(P.intro) + '</p><div class="narr">' + audioBtn('prelude', '收听序厅讲解', '暂停讲解') + '</div></div>' +
        sec('基本信息', '', facts) +
        sec('遗产地范围', '稷峰镇、化峪镇两个乡镇 68 个行政村，总面积 308 平方公里。', zone) +
        sec('主要特点', '申报书概括的五个特点，点击进入相应展厅。', pts) +
        sec('展厅索引', '八个展厅大体对应申报书的章节。', '<div class="ledger">' + rows + '</div>') +
        '<div class="wrap endcta"><a class="btn-main" href="#map">进入展厅导览' + I.arrow + '</a></div>' +
        '</div>'
    };
  }

  /* ================= 展厅导览 ================= */
  function pMap() {
    const n = state.stamps.length;
    const tiles = HALLS.map((h, i) => '<a class="tile" href="#' + h.id + '"><img loading="lazy" src="' + src(h.hero) + '" alt=""><span class="shade"></span>' +
      (hasStamp(h.id) ? '<span class="got">' + sealSVG(h.seal, '#fff', 'm' + i) + '</span>' : '') +
      '<span class="t"><small>第' + h.no + '展厅</small><b>' + esc(h.name) + '</b></span></a>').join('');
    return {
      html: bar('展厅导览', ['prelude', '序厅']) + '<div class="page">' +
        '<div class="map-head wrap"><h1>展厅导览</h1><p>八个展厅依申报书的章节排列。看完一个展厅，在厅尾盖一枚章。</p></div>' +
        '<div class="links wrap"><a href="#prelude"><b>序厅</b><span>遗产概要 · 范围 · 特点</span></a><a href="#passport"><b>观展护照</b><span>已集章 ' + n + ' / 8</span></a></div>' +
        '<a class="arlink wrap" href="ar.html"><span class="ic">' + I.cube + '</span><span class="tx"><b>AR 体验</b><small>扫描申报书里的三张图，图上立起遗产地沙盘、板枣糖丝和开甲演示</small></span><span class="chev">' + I.r + '</span></a>' +
        '<div class="tiles wrap">' + tiles + '</div>' +
        '<div class="foot">' + esc(D.org) + '编制<br>资料来源：' + esc(D.source) + '及其附件<br>标注「' + SHOT + '」的影像为本项目 2026 年 10 月采集素材<br>讲解音频为语音合成</div>' +
        '</div>'
    };
  }

  /* ================= 展厅公用 ================= */
  function hallShell(h, body) {
    const i = HALLS.indexOf(h), prev = HALLS[i - 1], next = HALLS[i + 1];
    const done = hasStamp(h.id);
    return '<div class="page">' +
      '<div class="hero"><img src="' + src(h.hero) + '" alt="' + esc(h.heroCap) + '">' +
      '<div class="hero-bar"><button onclick="location.hash=\'map\'" aria-label="返回展厅导览">' + I.back + '</button><button data-voice class="' + (state.voice ? 'on' : '') + '" aria-label="语音导览">' + (state.voice ? I.snd : I.mute) + '</button></div></div>' +
      '<header class="hall-head wrap"><div class="no">第' + h.no + '展厅 · ' + (i + 1) + ' / 8</div><h1>' + esc(h.name) + '</h1><p class="pc">' + esc(h.heroCap) + '</p></header>' +
      '<div class="wrap"><p class="hall-intro">' + esc(h.intro) + '</p><div class="narr">' + audioBtn(h.narr, '收听本厅讲解', '暂停讲解') + '</div></div>' +
      body +
      '<div class="stampbox"><p>' + (done ? '本厅印章已盖好。' : '看完本厅，盖一枚展厅印章。') + '</p><button class="stampbtn' + (done ? ' done' : '') + '" data-stamp="' + h.id + '"><span class="lbl">盖　章</span><span class="seal">' + sealSVG(h.seal, null, 'h' + i) + '</span></button>' +
      '<a class="small" href="#passport">查看观展护照（' + state.stamps.length + ' / 8）</a></div>' +
      '<nav class="pager">' + (prev ? '<a href="#' + prev.id + '"><span>上一厅</span><b>' + esc(prev.name) + '</b></a>' : '<a href="#prelude"><span>返回</span><b>序厅</b></a>') +
      (next ? '<a class="nx" href="#' + next.id + '"><span>下一厅</span><b>' + esc(next.name) + '</b></a>' : '<a class="nx" href="#passport"><span>观展结束</span><b>观展护照</b></a>') + '</nav>' +
      '</div>';
  }
  function mountStamp(root, h) {
    const b = $('[data-stamp]', root); if (!b) return;
    b.onclick = () => {
      if (!addStamp(h.id)) { toast('本厅已经盖过章了'); return; }
      b.classList.add('done'); if (navigator.vibrate) { try { navigator.vibrate(30); } catch (e) { /* 忽略 */ } }
      b.previousElementSibling.textContent = '本厅印章已盖好。';
      $('a.small', b.parentNode).textContent = '查看观展护照（' + state.stamps.length + ' / 8）';
      toast(state.stamps.length === 8 ? '八枚印章已集齐，去生成观展护照吧！' : '盖章成功，已集 ' + state.stamps.length + ' / 8');
    };
  }
  // 一组按钮切换一组面板（季节、类型、措施等）
  function mountSwitch(root, sel, onShow) {
    $$(sel, root).forEach((box) => {
      const btns = $$('[data-sw]', box), panes = $$('[data-pane]', box);
      const show = (i) => { btns.forEach((b, j) => { b.setAttribute('aria-pressed', j === i); b.setAttribute('aria-selected', j === i); }); panes.forEach((p, j) => { p.hidden = j !== i; }); if (onShow) onShow(box, i); };
      btns.forEach((b, j) => { b.onclick = () => show(j); });
    });
  }

  /* ---------- 第一展厅 遗产地概况 ---------- */
  function pHall1(h) {
    const H = D.hall1;
    const tot = H.terrain.reduce((a, t) => a + t[1], 0);
    const stack = '<div class="stack" role="img" aria-label="地貌构成：' + H.terrain.map((t) => t[0] + t[2] + '%').join('，') + '">' + H.terrain.map((t, i) => '<span class="s' + i + '" style="flex:' + t[1] + '"><b>' + esc(t[0]) + '</b>' + t[2] + '%</span>').join('') + '</div>' +
      '<p class="small" style="margin-top:6px">' + H.terrain.map((t) => t[0] + ' ' + t[1] + ' 平方公里').join('，') + '，合计 ' + tot + ' 平方公里。</p>';
    const grades = '<div class="gtab">' + H.soil.grades.map((g) => '<span><small>' + esc(g[0]) + '</small>' + esc(g[1]) + '</span>').join('') + '</div>';
    const body =
      sec('区位与地形', '逐级查看遗产地的位置。点击图片放大，可左右翻看。', mapTabs(H.maps, 'h1map') + srcNote(H.mapNote)) +
      sec('地理概况', '', recTable(H.geo) + '<h3 class="sub">地貌构成</h3>' + stack) +
      sec('土壤条件', '', para(H.soil.text) + '<h3 class="sub">耕地土壤养分等级</h3>' + grades + srcNote(H.soil.src)) +
      sec('气候特点', '', para(H.climate.text) + '<div style="margin-top:14px">' + nums(H.climate.nums) + '</div>' + recTable(H.climate.rows, 'mt')) +
      sec('社会经济状况', '', para(H.econ.text) + recTable(H.econ.rows, 'mt') + srcNote(H.econ.src));
    return { html: hallShell(h, body), mount(root) { mountMapTabs(root); } };
  }

  /* ---------- 第二展厅 起源与演变 ---------- */
  function pHall2(h) {
    const H = D.hall2;
    const tl = '<div class="tl">' + H.timeline.map((e) => '<div class="ev"><div class="when">' + esc(e.when) + '</div><h3>' + esc(e.title) + '</h3><p>' + esc(e.d) + '</p>' +
      (e.quotes ? '<div class="qs">' + e.quotes.map((q) => '<p><span>' + esc(q[0]) + '</span><cite>' + esc(q[1]) + '</cite></p>').join('') + '</div>' : '') +
      (e.link ? '<a class="lk" href="#' + e.link[0] + '">' + esc(e.link[1]) + I.r + '</a>' : '') +
      (e.note ? '<p class="note">' + esc(e.note) + '</p>' : '') + '</div>').join('') + '</div>';
    const wis = '<div class="wis">' + H.wisdom.map((w) => '<article>' + fig(w.img, { g: 'wis', cap: w.cap }) + '<h3>' + esc(w.t) + '</h3>' + para(w.d) + (w.quote ? quote(w.quote[0], w.quote[1]) : '') + '</article>').join('') + '</div>';
    const body = sec('时间轴', '从野生酸枣到中国重要农业文化遗产。', tl) +
      sec('先民的三项创造', '申报书「起源与演变历史」中提到的三项传统，至今仍在流传。', wis);
    return {
      html: hallShell(h, body),
      mount(root) {
        if (!('IntersectionObserver' in window)) { $$('.ev', root).forEach((e) => e.classList.add('on')); return; }
        const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) en.target.classList.add('on'); }), { rootMargin: '0px 0px -35% 0px' });
        $$('.ev', root).forEach((e) => io.observe(e));
      }
    };
  }

  /* ---------- 第三展厅 农业特征 ---------- */
  function sugarSVG() {
    // 一颗掰开的干板枣，拉出糖丝；刻度尺 0—30 厘米，每厘米 10 个单位
    let ticks = '';
    for (let c = 0; c <= 30; c++) {
      const x = 40 + c * 9.6, big = c % 5 === 0;
      ticks += '<line x1="' + x + '" y1="58" x2="' + x + '" y2="' + (big ? 68 : 63) + '" stroke="#8F877C" stroke-width="' + (big ? 1.2 : .8) + '"/>' + (big ? '<text x="' + x + '" y="80" text-anchor="' + (c === 30 ? 'end' : 'middle') + '" dx="' + (c === 30 ? 6 : 0) + '" font-size="10" fill="#6C645B">' + (c === 30 ? '30 厘米' : c) + '</text>' : '');
    }
    return '<svg class="sg" viewBox="0 0 340 92" role="img" aria-label="板枣糖丝长度示意：25 到 30 厘米">' +
      '<defs><linearGradient id="sgT" x1="0" x2="1"><stop offset="0" stop-color="#C98A2B"/><stop offset=".8" stop-color="#E2B75A"/><stop offset="1" stop-color="#E2B75A" stop-opacity=".35"/></linearGradient></defs>' +
      '<rect x="' + (40 + 25 * 9.6) + '" y="16" width="' + (5 * 9.6) + '" height="42" fill="#A0855C" opacity=".14"/>' +
      '<text x="' + (40 + 27.5 * 9.6) + '" y="12" text-anchor="middle" font-size="10" fill="#A0855C">25—30 厘米</text>' +
      '<line x1="40" y1="58" x2="' + (40 + 30 * 9.6) + '" y2="58" stroke="#8F877C" stroke-width="1"/>' + ticks +
      '<path class="thr" pathLength="100" d="M36 36 Q 180 46 ' + (40 + 28 * 9.6) + ' 37" fill="none" stroke="url(#sgT)" stroke-width="1.6" stroke-linecap="round"/>' +
      '<g class="half"><path d="M8 22 C 8 14, 22 12, 30 16 C 36 19, 38 28, 36 40 C 34 50, 22 54, 14 50 C 6 46, 6 32, 8 22 Z" fill="#7A2320"/><path d="M14 24 C 16 20, 26 20, 30 24 C 33 30, 32 40, 28 45 C 24 49, 16 47, 13 42 C 10 36, 11 29, 14 24 Z" fill="#D9A55A"/><ellipse cx="21" cy="35" rx="3.4" ry="6" fill="#8A5A2B"/></g>' +
      '</svg>';
  }
  function pHall3(h) {
    const H = D.hall3, T = H.trees;
    const trees = bars(T.rows, { max: 80000 }) + srcNote(T.src) + '<div style="margin-top:16px">' + fig(T.img, { g: 'h3t', cap: T.cap, r: 'r169' }) + '</div>' + '<p class="txt" style="margin-top:12px">' + esc(T.text) + '</p>';
    const types = '<div class="sw" data-swbox><div class="chips" role="tablist">' + H.types.map((t, i) => '<button class="chip" role="tab" data-sw aria-pressed="' + (i === 0) + '">' + esc(t.t) + '</button>').join('') + '</div>' +
      H.types.map((t, i) => '<div class="grid2" data-pane style="margin-top:14px"' + (i ? ' hidden' : '') + '>' + t.imgs.map((s, j) => ph(s, { g: 'type', cap: t.t + '（' + (j + 1) + '）' })).join('') + '</div>').join('') + '</div>' + srcNote(H.typesSrc);
    const Q = H.quality;
    const quality = quote(Q.rhyme, '申报书引用的民间说法', 'rhyme') + recTable(Q.rows) +
      '<div class="sugar"><div class="sgw">' + sugarSVG() + '</div><div class="sgc"><button class="pill solid" data-pull>拉糖丝</button><span>制干后掰开，能拉出 25—30 厘米长的金黄色糖丝。</span></div></div>' +
      '<div class="row"><a class="pill" href="ar.html#zao">' + I.cube + 'AR 掰开一颗板枣</a></div>' + srcNote(Q.src);
    const P = H.products;
    const prod = para(P.text) + tags(P.chips) + '<div style="margin-top:14px">' + fig(P.img, { g: 'h3p', cap: P.cap }) + '</div>';
    const land = fig('SB-06', { g: 'h3l', cap: '枣麦套种间作复合生产（申报书图 2-5）' }) + '<p class="txt" style="margin-top:12px">' + esc(H.land.text) + '</p>' + '<h3 class="sub">合理的水肥利用</h3>' + para(H.land.water);
    const E = H.econ;
    const econ = nums(E.nums) + recTable(E.rows, 'mt') + srcNote(E.src) + '<h3 class="sub">五条增收途径</h3><ul class="dots2">' + E.ways.map((w) => '<li>' + esc(w) + '</li>').join('') + '</ul>';
    const honors = '<div class="hscroll honors">' + H.honors.map((x) => '<figure>' + ph(x.img, { r: '', g: 'hon', cap: x.t }) + '<figcaption>' + esc(x.t) + '</figcaption></figure>').join('') + '</div>';
    const body = sec('集中的古板枣树分布', '全县古板枣树数量（株）。', trees) +
      sec('稷山枣典型类型', '切换查看申报书收录的四个类型。', types) +
      sec('板枣的品质', '', quality) +
      sec('以板枣为主的多样化产品', '', prod) +
      sec('集约的土地利用方式', '', land) +
      sec('突出的经济价值', '', econ) +
      sec('所获荣誉', H.honorText, honors);
    return {
      html: hallShell(h, body),
      mount(root) {
        mountSwitch(root, '[data-swbox]');
        const box = $('.sugar', root), btn = $('[data-pull]', root);
        btn.onclick = () => { box.classList.remove('on'); void box.offsetWidth; box.classList.add('on'); btn.textContent = '再拉一次'; };
      }
    };
  }

  /* ---------- 第四展厅 生态特征 ---------- */
  function wellSVG(W) {
    return '<svg class="well" viewBox="0 0 340 210" role="img" aria-label="地下水位变化示意：往年 1 到 2 米，如今上百米">' +
      '<rect x="0" y="34" width="340" height="176" fill="#E7E1D3"/><rect x="0" y="30" width="340" height="6" fill="#B79E73"/>' +
      '<text x="85" y="20" text-anchor="middle" font-size="12" fill="#2B251F" font-weight="600">往年 · 河滩地</text><text x="255" y="20" text-anchor="middle" font-size="12" fill="#2B251F" font-weight="600">如今</text>' +
      '<rect x="72" y="36" width="26" height="30" fill="#F8F8F4" stroke="#8F877C"/><rect x="73" y="52" width="24" height="13" fill="#7FA7B5"/>' +
      '<path d="M108 36 v16" stroke="#6C645B"/><path d="M104 36 h8 M104 52 h8" stroke="#6C645B"/><text x="116" y="48" font-size="11" fill="#2B251F">水位 ' + esc(W.past) + '</text>' +
      '<rect x="242" y="36" width="26" height="160" fill="#F8F8F4" stroke="#8F877C"/>' +
      '<path d="M236 110 l12 -6 l12 6 l12 -6 l6 3" stroke="#E7E1D3" stroke-width="8" fill="none"/><path d="M236 106 l12 -6 l12 6 l12 -6 M236 116 l12 -6 l12 6 l12 -6" stroke="#8F877C" fill="none"/>' +
      '<rect x="243" y="182" width="24" height="13" fill="#7FA7B5"/>' +
      '<path d="M282 36 v146" stroke="#6C645B" stroke-dasharray="3 3"/><path d="M278 36 h8 M278 182 h8" stroke="#6C645B"/><text x="290" y="150" font-size="11" fill="#2B251F">打井</text><text x="290" y="165" font-size="11" fill="#2B251F">' + esc(W.now) + '</text>' +
      '<text x="12" y="204" font-size="10" fill="#8F877C">示意图，不按比例</text></svg>';
  }
  function pHall4(h) {
    const H = D.hall4, B = H.bio, W = H.water;
    const bio = nums(B.nums) + '<h3 class="sub">脊椎动物 190 种，按纲统计</h3>' + bars(B.classes.map((c) => [c[0], c[1], c[1] + ' 种'])) +
      para(B.text) + B.groups.map((g) => '<h3 class="sub">' + esc(g[0]) + '</h3>' + tags(g[1].split('、'))).join('') + srcNote(B.src);
    const water = para(W.text) + '<div class="wellbox">' + wellSVG(W) + '</div><p class="small">' + esc(W.cmp) + '</p>' + para(W.text2);
    const body = sec('野生动植物生物多样性', '稷山板枣树群被誉为黄土高原上的绿洲。', bio) +
      sec('水土保持和水源涵养', '', water) +
      sec('防风固沙和改良气候', '', para(H.wind)) +
      sec('生态适应', '', para(H.adapt)) +
      sec('农业生态保护图', '', mapBox(H.map, 'h4map'));
    return { html: hallShell(h, body), mount() {} };
  }

  /* ---------- 第五展厅 景观特征 ---------- */
  function pHall5(h) {
    const H = D.hall5, P = H.panos;
    const gal = '<div class="grid2">' + H.gallery.map((g) => '<figure>' + ph(g.img, { g: 'h5g', cap: g.t + '（申报书' + g.n + '）' }) + '<figcaption><b>' + esc(g.t) + '</b> · 申报书' + esc(g.n) + '</figcaption></figure>').join('') + '</div>';
    const pano = '<div class="panotabs">' + P.map((p, i) => '<button class="chip" data-p="' + i + '" aria-pressed="' + (i === 0) + '">' + esc(p.name) + '</button>').join('') + '</div>' +
      '<div class="pano"><div class="strip"><img alt=""><span class="hint">← 左右拖动 →</span></div><h3><b></b><span>360° 全景展开 · ' + SHOT + '</span></h3><p></p></div>' +
      (ON_PLATFORM ? '<div style="margin-top:12px"><a class="pill" href="/tour/" target="_blank" rel="noopener">进入 VR 全景导览' + I.arrow + '</a></div>' : '');
    const body = sec('古树之美', '', quote(H.quote, H.quoteSrc, 'big') + para(H.text)) +
      sec('景观图集', '申报书照片「生态景观」图 5—图 10，点击放大。', gal) +
      sec('农业景观保护图', '', mapBox(H.map, 'h5map')) +
      sec('360° 全景', '国家板枣公园及周边，' + SHOT + '，横向拖动浏览。', pano);
    return {
      html: hallShell(h, body),
      mount(root) {
        const strip = $('.strip', root), img = $('.strip img', root), hint = $('.hint', root);
        const showPano = (i) => {
          const p = P[i]; img.src = 'assets/pano/' + p.id + '.jpg'; img.alt = p.name + '全景展开图';
          $('.pano h3 b', root).textContent = p.name; $('.pano p', root).textContent = p.d;
          $$('.panotabs .chip', root).forEach((c) => c.setAttribute('aria-pressed', +c.dataset.p === i));
          img.onload = () => { strip.scrollLeft = (img.width - strip.clientWidth) / 2; };
          hint.style.opacity = 1;
        };
        $$('.panotabs .chip', root).forEach((c) => { c.onclick = () => showPano(+c.dataset.p); });
        strip.addEventListener('scroll', () => { hint.style.opacity = 0; }, { passive: true });
        let dn = null;
        strip.addEventListener('mousedown', (e) => { dn = [e.clientX, strip.scrollLeft]; e.preventDefault(); });
        window.addEventListener('mousemove', (e) => { if (dn) strip.scrollLeft = dn[1] - (e.clientX - dn[0]); });
        window.addEventListener('mouseup', () => { dn = null; });
        showPano(0);
      }
    };
  }

  /* ---------- 第六展厅 技术体系 ---------- */
  function ringSVG() {
    // 示意：根部吸收的水分养分照常上行；树冠光合产物下行到环割口受阻，留在上部供果
    return '<svg class="ring" viewBox="0 0 340 250" role="img" aria-label="环割原理示意">' +
      '<defs><marker id="ah1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#5E6743"/></marker>' +
      '<marker id="ah2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#7A2320"/></marker></defs>' +
      '<ellipse cx="170" cy="52" rx="96" ry="34" fill="#C9D0AE"/><ellipse cx="120" cy="60" rx="46" ry="24" fill="#B5BF92"/><ellipse cx="222" cy="58" rx="48" ry="24" fill="#B5BF92"/>' +
      '<circle cx="132" cy="68" r="5" fill="#9E2A24"/><circle cx="198" cy="72" r="5" fill="#9E2A24"/><circle cx="168" cy="44" r="5" fill="#9E2A24"/><circle cx="230" cy="50" r="4.5" fill="#9E2A24"/>' +
      '<path d="M156 84 L150 210 L190 210 L184 84 Z" fill="#8A6A4B"/><path d="M162 90 L158 204 M176 90 L180 204" stroke="#6E5238" stroke-width="1.2"/>' +
      '<rect x="150" y="142" width="38" height="7" fill="#F2E3C4" stroke="#7A2320" stroke-width="1.2"/>' +
      '<path d="M150 210 C 130 222, 110 226, 92 236 M170 210 C 168 224, 166 232, 162 244 M190 210 C 210 222, 232 228, 252 236" stroke="#8A6A4B" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M128 92 V 136" stroke="#7A2320" stroke-width="2.4" marker-end="url(#ah2)"/><path d="M118 142 H 138" stroke="#7A2320" stroke-width="2.4"/>' +
      '<path d="M212 226 V 96" stroke="#5E6743" stroke-width="2.4" marker-end="url(#ah1)"/>' +
      '<text x="14" y="108" font-size="11" fill="#7A2320">光合产物向下</text><text x="14" y="123" font-size="11" fill="#7A2320">在环割处受阻，</text><text x="14" y="138" font-size="11" fill="#7A2320">留在树冠供果实</text>' +
      '<text x="222" y="170" font-size="11" fill="#5E6743">根部的水分和</text><text x="222" y="185" font-size="11" fill="#5E6743">养分照常向上</text>' +
      '<text x="196" y="140" font-size="11" fill="#2B251F">环割口</text>' +
      '<text x="330" y="244" font-size="10" fill="#8F877C" text-anchor="end">示意图</text></svg>';
  }
  function calCard(c) {
    return '<div class="hd"><h3>' + esc(c.stage) + '</h3><span class="when">' + esc(c.when) + '</span></div>' +
      '<table class="rec cal">' + c.items.map((it) => '<tr><th>' + esc(it[0]) + '</th><td>' + esc(it[1]) + (it[2] ? '<small>目的：' + esc(it[2]) + '</small>' : '') + '</td></tr>').join('') + '</table>';
  }
  function pHall6(h) {
    const H = D.hall6, A = H.agro, G = H.graft, S = H.steps;
    const layers = '<div class="layers">' + A.layers.map((l) => '<div class="ly"><b>' + esc(l.k) + '</b><p>' + esc(l.d) + '</p></div>').join('') + '</div>';
    const agro = para(A.text) + layers + '<h3 class="sub">常见的林下作物</h3>' + tags(A.crops) + '<h3 class="sub">放养家禽</h3>' + tags(A.birds);
    const graft = para(G.text) + '<div class="ringbox">' + ringSVG() + '</div>' + para(G.ring) + '<div class="grid2" style="margin-top:14px">' + G.imgs.map((x) => fig(x[0], { g: 'ring', cap: x[1] })).join('') + '</div>' +
      '<div class="row"><a class="pill" href="ar.html#ring">' + I.cube + 'AR 开甲七步演示</a></div>';
    const stepper = '<div class="stepper"><div class="dots">' + S.map((p, i) => '<button data-i="' + i + '"><i>' + (i + 1) + '</i>' + esc(p.name) + '</button>').join('') + '</div><div class="stepcard"></div></div>';
    const C = H.calendar;
    const months = '<div class="months" aria-hidden="true">' + [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => '<span data-m="' + m + '">' + m + '</span>').join('') + '</div>';
    const cal = months + '<div class="calrow">' + C.map((c, i) => '<button class="cbtn" data-c="' + i + '"><b>' + esc(c.stage) + '</b><small>' + esc(c.when) + '</small></button>').join('') + '</div>' +
      '<div class="calcard"></div>' + srcNote(H.calSrc) + scans(H.calScans, 'calscan', '物候历原件');
    const songs = '<div class="songs" data-swbox><div class="seg" role="tablist">' + H.songs.map((s, i) => '<button role="tab" data-sw aria-selected="' + (i === 0) + '">' + s.k + '</button>').join('') + '</div>' +
      H.songs.map((s, i) => '<div data-pane' + (i ? ' hidden' : '') + '><div class="poem">' + s.lines.map((l) => '<p' + (l === '……' ? ' class="gap"' : '') + '>' + esc(l) + '</p>').join('') + '</div>' +
        '<div class="row">' + audioBtn(s.voice, '听「' + s.k + '」', '暂停') + '</div>' + (s.note ? '<p class="note">' + esc(s.note) + '</p>' : '') + '</div>').join('') + '</div>' +
      srcNote(H.songSrc) + scans(H.songScans, 'songscan', '四季歌原件');
    const Pr = H.prune;
    const prune = '<div class="poem">' + Pr.lines.map((l) => '<p' + (l === '……' ? ' class="gap"' : '') + '>' + esc(l) + '</p>').join('') + '</div><div class="row">' + audioBtn(Pr.voice, '听修剪歌', '暂停') + '</div>' + srcNote(Pr.src) + scans(Pr.scans, 'prscan', '修剪歌原件');
    const Pe = H.pests;
    const pests = para(Pe.survey) + '<h3 class="sub">' + esc(Pe.oldT) + '</h3>' + tags(Pe.old) + para(Pe.now) + '<p class="txt" style="margin-top:8px">' + esc(Pe.way) + '</p><div style="margin-top:14px">' + fig(Pe.img, { g: 'pest', cap: Pe.cap }) + '</div>';
    const tools = '<div class="hscroll">' + H.tools.map((t) => '<div class="tool">' + ph(t[0], { g: 'tools', cap: t[1] + '（申报书）' }) + '<b>' + esc(t[1]) + '</b></div>').join('') + '</div>';
    const body = sec('林下复合种养', '枣树、林下作物、家禽和土壤，彼此互补。', agro) +
      sec('嫁接与环割', '', graft) +
      sec('一颗板枣的一年', '申报书「稷山板枣生产过程」图 11—图 19。点击步骤依次查看，可收听讲解。', stepper) +
      sec('全年物候历', '点选物候期，查看当期的管理措施。', cal) +
      sec('四季歌', '《稷山板枣无公害标准化管理四季歌》，可收听朗读。', songs) +
      sec('修剪歌', '', prune) +
      sec('病虫害防治', '', pests) +
      sec('标准化栽植', H.rulesSrc, acc(H.rules)) +
      sec('传统农具', H.toolsText, tools);
    return {
      html: hallShell(h, body),
      mount(root) {
        // 生产过程分步
        const card = $('.stepcard', root), dots = $$('.dots button', root);
        const show = (i) => {
          const p = S[i];
          dots.forEach((d, j) => { d.classList.toggle('cur', j === i); d.classList.toggle('done', j < i); });
          const row = dots[i].parentNode; row.scrollTo({ left: dots[i].offsetLeft - row.clientWidth / 2 + dots[i].offsetWidth / 2, behavior: 'smooth' });
          card.innerHTML = ph(p.img, { r: 'r169', g: 'proc', cap: p.name + '（申报书）' }) +
            '<div class="hd"><h3>' + esc(p.name) + '</h3><span class="when">' + esc(p.when) + '</span></div><div class="stage">第 ' + (i + 1) + ' / ' + S.length + ' 步</div>' +
            '<p class="t">' + esc(p.text) + '</p>' +
            '<div class="ctl"><button class="pill" data-prev ' + (i ? '' : 'disabled') + '>' + I.l + '上一步</button>' + audioBtn(p.voice, '听一听') +
            '<button class="pill solid" data-next>' + (i < S.length - 1 ? '下一步' + I.r : '从头看') + '</button></div>';
          $('[data-prev]', card).onclick = () => i && show(i - 1);
          $('[data-next]', card).onclick = () => show(i < S.length - 1 ? i + 1 : 0);
          syncAudio();
        };
        dots.forEach((d) => { d.onclick = () => show(+d.dataset.i); });
        show(0);
        // 物候历：默认选中本月所在的物候期
        const cbtns = $$('.cbtn', root), cc = $('.calcard', root), ms = $$('.months span', root);
        const nowM = new Date().getMonth() + 1;
        ms.forEach((s) => s.classList.toggle('now', +s.dataset.m === nowM));
        const pick = (i, scroll) => {
          cbtns.forEach((b, j) => b.setAttribute('aria-pressed', j === i));
          ms.forEach((s) => s.classList.toggle('on', C[i].m.indexOf(+s.dataset.m) >= 0));
          cc.innerHTML = calCard(C[i]);
          if (scroll) { const r = cbtns[i].parentNode; r.scrollTo({ left: cbtns[i].offsetLeft - 8, behavior: 'smooth' }); }
        };
        cbtns.forEach((b, j) => { b.onclick = () => pick(j); });
        let start = C.findIndex((c) => c.m.indexOf(nowM) >= 0); if (start < 0) start = 0;
        pick(start); requestAnimationFrame(() => { const r = cbtns[start].parentNode; r.scrollLeft = cbtns[start].offsetLeft - 8; });
        mountSwitch(root, '[data-swbox]');
      }
    };
  }

  /* ---------- 第七展厅 文化特征 ---------- */
  function pHall7(h) {
    const H = D.hall7, L = H.legend, F = H.food, E = H.events;
    const classics = para(H.classicsText) + H.classics.map((c) => quote(c[0], c[1]) + (c[2] ? '<p class="small qn">' + esc(c[2]) + '</p>' : '')).join('');
    const poems = H.poems.map((p) => '<div class="pm"><h3>' + esc(p.t) + '</h3><div class="who">' + esc(p.who) + '</div><div class="poem' + (p.prose ? ' prose' : ' verse') + '">' + p.lines.map((l) => '<p>' + esc(l) + '</p>').join('') + '</div><div class="row">' + audioBtn(p.id, '听朗读', '暂停') + '</div></div>').join('');
    const people = acc(H.people.map((p) => [p.name, p.d, p.era, p.src ? '<p class="src" style="margin-top:6px">' + esc(p.src) + '</p>' : ''])) + '<div style="margin-top:16px">' + fig(H.peopleImg[0], { g: 'ppl', cap: H.peopleImg[1], r: 'r169' }) + '</div>';
    const legend = '<figure>' + ph(L.img, { r: '', g: 'leg', cap: L.credit }) + '<figcaption>' + esc(L.credit) + '</figcaption></figure>' +
      '<div class="story2">' + L.summary.map((t) => para(t)).join('') + '</div><div class="row">' + audioBtn(L.voice, '听啾啾讲传说', '暂停') + '</div>' + srcNote(L.note);
    const food = para(F.text) + '<div class="grid2" style="margin-top:14px">' + F.items.map((x) => fig(x[0], { g: 'food', cap: x[1] + '（申报书）' })).join('') + '</div><p class="txt" style="margin-top:12px">' + esc(F.text2) + '</p>';
    const events = para(E.text) + '<div class="grid2" style="margin-top:14px">' + E.items.map((x) => fig(x[0], { g: 'evt', cap: x[1] + '（申报书）' })).join('') + '</div>';
    const body = sec('典籍里的「羊枣」', '', classics) +
      sec('历史人物', '点开人名查看事迹。', people) +
      sec('诗文', '申报书引用的两篇诗文。', poems) +
      sec('板儿与板枣的传说', '稷山民间广为流传，是宣传板枣起源的重要民间轶事。', legend) +
      sec('饮食文化', '', food) +
      sec('节庆与文化活动', '', events) +
      sec('后稷故里', '', para(H.houji)) +
      sec('农业文化保护图', '', mapBox(H.map, 'h7map'));
    return { html: hallShell(h, body), mount() {} };
  }

  /* ---------- 第八展厅 价值与保护 ---------- */
  function zonesSVG(Z) {
    return '<svg class="zones" viewBox="0 0 340 190" role="img" aria-label="保护区分区示意：核心区、缓冲区、发展区">' +
      '<ellipse cx="170" cy="95" rx="164" ry="88" fill="#E3E5D8" stroke="#B9BDA6"/><ellipse cx="170" cy="100" rx="112" ry="60" fill="#C7CDAF" stroke="#9EA684"/><ellipse cx="170" cy="106" rx="58" ry="30" fill="#5E6743"/>' +
      '<text x="170" y="111" text-anchor="middle" font-size="14" fill="#fff" font-weight="700">' + esc(Z[0][0]) + '</text>' +
      '<text x="170" y="62" text-anchor="middle" font-size="13" fill="#2B251F">' + esc(Z[1][0]) + '</text>' +
      '<text x="170" y="26" text-anchor="middle" font-size="13" fill="#2B251F">' + esc(Z[2][0]) + '</text>' +
      '<text x="336" y="186" text-anchor="end" font-size="10" fill="#8F877C">示意图</text></svg>';
  }
  function pHall8(h) {
    const H = D.hall8, R = H.rule;
    const later = '<div class="later">' + H.later.map((x) => '<div class="lt">' + (x.img ? ph(x.img, { g: 'later', cap: x.cap }) : '<div class="ph r43 yr"><b>' + esc((x.when || '').replace(/\D/g, '')) + '</b><span>第四批中国重要<br>农业文化遗产</span></div>') +
      '<div><b>' + esc(x.t) + '</b>' + (x.when ? '<span class="when">' + esc(x.when) + '</span>' : '') + '<p>' + esc(x.d) + '</p>' + (x.img ? '<span class="shot">' + SHOT + '</span>' : '') + '</div></div>').join('') + '</div>' + srcNote(H.laterSrc);
    const measures = '<div class="sw" data-swbox><div class="chips" role="tablist"><button class="chip" role="tab" data-sw aria-pressed="true">已采取的措施</button><button class="chip" role="tab" data-sw aria-pressed="false">拟采取的措施</button></div>' +
      '<div data-pane>' + vrows(H.done) + '</div><div data-pane hidden>' + vrows(H.plan) + '</div></div>';
    const rule = '<div class="zonebox">' + zonesSVG(R.zones) + '</div>' + recTable(R.zones) + srcNote(R.zoneNote) +
      '<h3 class="sub">条文摘要</h3>' + recTable(R.articles, 'art') + '<div style="margin-top:14px">' + fig(R.img, { g: 'rule', cap: R.imgT, r: 'r34' }) + '</div>' + srcNote(R.src);
    const body = sec('遗产的功能与重要性', '申报书第三部分「遗产功能与重要性评估」。', vrows(H.values)) +
      sec('与同类枣区比较', H.compareSrc, recTable(H.compare)) +
      sec('问题与挑战', D.prelude.threat, '<h3 class="sub">主要问题</h3>' + vrows(H.problems) + '<h3 class="sub">主要挑战</h3>' + vrows(H.challenges)) +
      sec('机遇', '', '<ul class="dots2">' + H.chances.map((c) => '<li>' + esc(c) + '</li>').join('') + '</ul>') +
      sec('保护与发展措施', '', measures) +
      sec('管理办法', '申报书附件六。保护区分为核心区、缓冲区和发展区。', rule) +
      sec('发展布局图', '', mapTabs(H.maps, 'h8map')) +
      sec('承诺', '申报书第七部分「承诺函」。', quote(H.promise, '山西省稷山县人民政府', 'promise')) +
      sec('申报之后', '申报书里的几项打算，后来的情况。', later) +
      sec('科学研究', '', para(H.research));
    return { html: hallShell(h, body), mount(root) { mountSwitch(root, '[data-swbox]'); mountMapTabs(root); } };
  }

  /* ================= 观展护照 ================= */
  function pPassport() {
    const n = state.stamps.length;
    const seals = HALLS.map((h, i) => '<a href="#' + h.id + '" class="' + (hasStamp(h.id) ? '' : 'no') + '"><span class="sl">' + sealSVG(h.seal, null, 'p' + i) + '</span>' + esc(h.name) + '</a>').join('');
    return {
      html: bar('观展护照', ['map', '导览']) + '<div class="page">' +
        '<div class="pass"><h2>观展护照</h2><div class="cnt">' + esc(D.title) + '<br>已集章 ' + n + ' / 8</div><div class="seals">' + seals + '</div></div>' +
        '<div class="poster"><button class="btn-main" data-make>生成我的观展海报</button><div class="out"></div></div>' +
        (n < 8 ? '<p class="wrap small" style="margin-top:14px;text-align:center">还差 ' + (8 - n) + ' 个展厅没有盖章，点上方灰色印章可直接前往。</p>' : '') +
        '</div>',
      mount(root) { $('[data-make]', root).onclick = () => makePoster($('.out', root)); }
    };
  }
  function svgImg(svgStr) {
    return new Promise((res) => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStr); });
  }
  async function makePoster(out) {
    out.innerHTML = '<p>正在生成…</p>';
    try { if (document.fonts && document.fonts.load) await Promise.race([document.fonts.load('700 40px JSSerif'), new Promise((r) => setTimeout(r, 1500))]); } catch (e) { /* 忽略 */ }
    const W = 1080, H = 1620, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
    const serif = 'JSSerif, "Songti SC", STSong, serif', sans = '-apple-system, "PingFang SC", "Noto Sans CJK SC", sans-serif';
    g.fillStyle = '#EEEEE9'; g.fillRect(0, 0, W, H);
    const bg = await new Promise((r) => { const im = new Image(); im.onload = () => r(im); im.onerror = () => r(null); im.src = 'assets/pano/' + D.coverPano + '.jpg'; });
    if (bg) { const hh = 560, ww = bg.width * hh / bg.height; g.drawImage(bg, (W - ww) / 2, 0, ww, hh); const gr = g.createLinearGradient(0, 200, 0, 560); gr.addColorStop(0, 'rgba(238,238,233,0)'); gr.addColorStop(1, 'rgba(238,238,233,1)'); g.fillStyle = gr; g.fillRect(0, 200, W, 360); }
    g.strokeStyle = '#A0855C'; g.lineWidth = 2; g.strokeRect(40, 40, W - 80, H - 80);
    g.fillStyle = '#2B251F'; g.textAlign = 'center';
    g.font = '700 96px ' + serif; g.fillText('观展护照', W / 2, 520);
    g.font = '700 36px ' + serif; g.fillStyle = '#5E6743'; g.fillText(D.titleLines[0] + D.titleLines[1], W / 2, 590); g.fillText(D.subtitle + ' · ' + D.titleLines[2], W / 2, 640);
    g.fillStyle = '#A0855C'; g.fillRect(W / 2 - 40, 672, 80, 2);
    const cols = 4, cw = 200, top = 720;
    for (let i = 0; i < 8; i++) {
      const h = HALLS[i], got = hasStamp(h.id);
      const x = (W - cols * cw) / 2 + (i % cols) * cw + cw / 2, y = top + Math.floor(i / cols) * 250;
      const im = await svgImg(sealSVG(h.seal, got ? '#A8322A' : '#CFCCC1', 'c' + i));
      if (im) { g.save(); g.translate(x, y + 80); g.rotate(got ? (i % 2 ? .08 : -.1) : 0); g.globalAlpha = got ? .95 : .7; g.drawImage(im, -78, -78, 156, 156); g.restore(); }
      g.globalAlpha = 1; g.fillStyle = got ? '#2B251F' : '#8F877C'; g.font = '700 26px ' + serif; g.fillText(h.name, x, y + 196);
    }
    const n = state.stamps.length;
    g.fillStyle = '#2B251F'; g.font = '700 44px ' + serif; g.fillText(n === 8 ? '八厅印章已集齐' : '已集 ' + n + ' / 8 枚展厅印章', W / 2, 1290);
    const mz = await svgImg(mascotSVG('wave'));
    if (mz) g.drawImage(mz, 96, 1330, 180, 190);
    g.textAlign = 'left'; g.fillStyle = '#6C645B'; g.font = '30px ' + sans;
    g.fillText('板啾啾陪你逛完了稷山板枣数字展馆', 300, 1400);
    const d = new Date(); g.fillText(d.getFullYear() + ' 年 ' + (d.getMonth() + 1) + ' 月 ' + d.getDate() + ' 日', 300, 1450);
    g.font = '26px ' + sans; g.fillStyle = '#8F877C'; g.fillText(D.org, 300, 1500);
    try {
      const url = c.toDataURL('image/jpeg', .9);
      out.innerHTML = '<img src="' + url + '" alt="我的观展海报"><p>长按图片保存到手机，或分享给朋友。</p>';
    } catch (e) { out.innerHTML = '<p>海报生成失败，请稍后重试。</p>'; }
  }

  /* ================= 路由 ================= */
  const pages = { cover: pCover, prelude: pPrelude, map: pMap, passport: pPassport };
  const hallFns = [pHall1, pHall2, pHall3, pHall4, pHall5, pHall6, pHall7, pHall8];
  let sayTimer = null;
  function guideSay(text) {
    const g = $('#guide'); if (!g) return;
    $('.bub', g).textContent = text; g.classList.add('say');
    clearTimeout(sayTimer); sayTimer = setTimeout(() => g.classList.remove('say'), 5200);
  }
  function render() {
    const id = (location.hash || '').replace(/^#/, '') || 'cover';
    const hi = HALLS.findIndex((h) => h.id === id);
    const fn = hi >= 0 ? () => hallFns[hi](HALLS[hi]) : pages[id] || pCover;
    const prev = state.page;
    state.page = hi >= 0 || pages[id] ? id : 'cover';
    const p = fn();
    const app = $('#app'); app.innerHTML = p.html; window.scrollTo(0, 0);
    $$('.lb, .sheet').forEach((e) => e.remove());
    p.mount && p.mount(app);
    const h = HALLS[hi];
    if (h) mountStamp(app, h);
    voiceBtnSync();
    document.title = (h ? '第' + h.no + '展厅 ' + h.name : id === 'prelude' ? '序厅' : id === 'map' ? '展厅导览' : id === 'passport' ? '观展护照' : '稷山板枣数字馆') + (state.page === 'cover' ? '' : ' · 稷山板枣数字馆');
    const g = $('#guide'); g.classList.toggle('hide', state.page === 'cover');
    if (state.page !== prev) {
      const k = pageNarr();
      if (state.voice && k && state.page !== 'cover') { autoPlay(k); } else if (curKey && /^(h\d|prelude|cover)$/.test(curKey)) { stopAudio(); }
      if (h) guideSay(h.guide); else if (state.page === 'map') guideSay('选一个展厅进去看看吧，看完记得盖章哦。'); else if (state.page === 'prelude') guideSay(D.mascot.hello);
      else if (state.page === 'passport') guideSay(state.stamps.length ? '盖了 ' + state.stamps.length + ' 枚章啦，生成海报留个纪念吧！' : '还没有盖章哦，先去展厅逛逛。');
    }
    syncAudio();
  }
  function init() {
    const g = document.createElement('div'); g.id = 'guide'; g.className = 'guide hide';
    g.innerHTML = '<div class="bub" aria-live="polite"></div><button class="me" aria-label="板啾啾：点我收听讲解">' + mascotSVG('idle') + '</button>';
    document.body.appendChild(g);
    $('.me', g).onclick = () => {
      const k = pageNarr();
      if (k) { playKey(k); guideSay(audio.paused ? '想听讲解随时点我。' : '我来给你讲讲这里。'); }
      else guideSay(D.mascot.hello);
    };
    window.addEventListener('hashchange', render);
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
