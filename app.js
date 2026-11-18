/* 稷山板枣 H5 数字馆 —— 页面与交互 */
(function () {
  'use strict';
  const D = window.JS_DATA, M = window.JS_MEDIA || {}, S = window.JS_STATS || {};
  const HALLS = D.halls;
  const ON_PLATFORM = /^\/h5(\/|$)/.test(location.pathname);
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const src = (stem) => 'assets/img/JSBZ-' + stem + '.jpg';
  const meta = (stem) => M[stem] || {};
  // 视频文件在资源库平台上；公网版没有视频，播放按钮不显示
  const canVideo = (stem) => !!(ON_PLATFORM && stem && M[stem] && M[stem].video);
  const capOf = (stem, over) => over || [meta(stem).cap, meta(stem).date].filter(Boolean).join(' · ');

  /* ---------- 本机存储（失败时只在内存里记） ---------- */
  const mem = {};
  const store = {
    get(k, d) { try { const v = localStorage.getItem('jsbz-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } },
    set(k, v) { mem[k] = v; try { localStorage.setItem('jsbz-' + k, JSON.stringify(v)); } catch (e) { /* 忽略 */ } }
  };
  const state = { voice: store.get('voice', false), stamps: store.get('stamps', []), page: '' };

  /* ---------- 图标 ---------- */
  const I = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    snd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18.2 6.5a8 8 0 0 1 0 11"/></svg>',
    mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    lr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg>',
    person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8.5" r="4"/><path d="M4 21c1.2-4.2 4.3-6.3 8-6.3s6.8 2.1 8 6.3"/></svg>',
    tree: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M24 44V26M24 30l-7-6M24 27l8-7M24 22l-4-5"/><path d="M14 22c-5-1-7-6-4-10 2-3 6-3 8-2 1-4 6-6 10-4 3-3 9-1 9 4 4 0 6 5 3 8 1 4-3 7-7 5"/><path d="M16 44h16"/></svg>'
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

  /* ---------- 印章与枣形节点 ---------- */
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
    curKey = key; audio.src = 'assets/audio/' + key + '.mp3';
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
    const page = pageNarr();
    const g = $('#guide'); if (g) g.classList.toggle('talk', !!(playing && curKey === page));
  }
  ['play', 'pause', 'ended'].forEach((ev) => audio.addEventListener(ev, () => { if (ev === 'ended') curKey = null; syncAudio(); }));
  function pageNarr() {
    const p = state.page;
    if (p === 'cover') return 'cover';
    if (p === 'prelude') return 'prelude';
    const h = HALLS.find((x) => x.id === p); return h ? h.narr : null;
  }
  const audioBtn = (key, off, on) => '<button class="pill" data-a="' + key + '" data-off="' + (off || '收听') + '" data-on="' + (on || '暂停') + '"><span class="ic">' + I.play + '</span><span class="tx">' + (off || '收听') + '</span></button>';

  /* ---------- 小部件 ---------- */
  function ph(stem, opts) {
    opts = Object.assign({}, opts || {});
    if (opts.video && !canVideo(opts.video)) opts.video = null;
    const m = meta(stem);
    const v = opts.video ? '<span class="play">' + I.play + '视频</span>' : '';
    const attrs = opts.video ? ' data-v="' + opts.video + '"' : ' data-z="' + stem + '" data-g="' + (opts.g || 'p') + '"' + (opts.cap ? ' data-cap="' + esc(opts.cap) + '"' : '');
    return '<button class="ph ' + (opts.r || 'r43') + '"' + attrs + ' aria-label="' + esc(opts.cap || m.cap || '查看图片') + '"><img loading="lazy" src="' + src(stem) + '" alt="' + esc(opts.cap || m.cap || '') + '"' + (m.w ? ' width="' + m.w + '" height="' + m.h + '"' : '') + '>' + v + '</button>';
  }
  function fig(stem, opts) { opts = opts || {}; return '<figure>' + ph(stem, opts) + '<figcaption>' + esc(capOf(stem, opts.cap)) + '</figcaption></figure>'; }
  const stub = (text, r) => '<div class="ph stub ' + (r || 'r43') + '">' + esc(text) + '</div>';
  const gap = (t, ask) => '<div class="gapnote' + (ask ? ' ask' : '') + '">' + esc(t) + '</div>';
  const sec = (title, lede, body) => '<section class="sec wrap"><h2>' + esc(title) + '</h2>' + (lede ? '<p class="lede">' + esc(lede) + '</p>' : '') + '<div class="body">' + body + '</div></section>';
  const recTable = (rows) => '<table class="rec">' + rows.map((r) => '<tr><th>' + esc(r[0]) + '</th><td' + (/^待/.test(r[1]) ? ' class="wait"' : '') + '>' + esc(r[1]) + '</td></tr>').join('') + '</table>';
  const videoPill = (stem, label) => canVideo(stem) ? '<button class="pill" data-v="' + stem + '">' + I.play + (label || '看视频') + (M[stem].dur ? ' · ' + fmtDur(M[stem].dur) : '') + '</button>' : '';
  function fmtDur(s) { s = Math.round(s); return s >= 60 ? Math.floor(s / 60) + ' 分 ' + (s % 60) + ' 秒' : s + ' 秒'; }

  function toast(t) {
    const el = document.createElement('div'); el.className = 'toast'; el.textContent = t; document.body.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }

  /* ---------- 大图与视频 ---------- */
  function openLightbox(list, idx) {
    let i = idx;
    const el = document.createElement('div'); el.className = 'lb'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
    const big = (it) => (ON_PLATFORM && meta(it.stem).hd) ? '/media/image/JSBZ-' + it.stem + '-2K.jpg' : src(it.stem);
    function draw() {
      const it = list[i];
      el.innerHTML = '<div class="top"><span>' + (list.length > 1 ? (i + 1) + ' / ' + list.length : '') + '</span><button aria-label="关闭">' + I.x + '</button></div>' +
        '<div class="stage"><img src="' + src(it.stem) + '" alt=""></div>' +
        '<div class="cap">' + esc(it.cap) + '<small>素材编号 JSBZ-' + esc(it.stem) + '</small></div>' +
        (list.length > 1 ? '<button class="nav p" aria-label="上一张">' + I.l + '</button><button class="nav n" aria-label="下一张">' + I.r + '</button>' : '');
      const im = $('.stage img', el);
      if (ON_PLATFORM && meta(it.stem).hd) { const b = big(it), pre = new Image(); pre.onload = () => { im.src = b; }; pre.src = b; }
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
    const cap = '<div class="cap">' + esc(capOf(stem)) + (m.dur ? '，' + fmtDur(m.dur) : '') + '<small>素材编号 JSBZ-' + esc(stem) + '</small></div>';
    let body;
    if (ON_PLATFORM && m.video) {
      body = '<video controls playsinline webkit-playsinline preload="metadata" poster="' + src(stem) + '" src="/media/' + esc(m.video) + '"></video>';
    } else {
      body = '<div class="vnote"><img src="' + src(stem) + '" alt=""><p>该视频收在稷山板枣融媒体资源库平台，在平台内打开本数字馆即可直接播放。</p></div>';
    }
    el.innerHTML = '<div class="top"><span>视频</span><button aria-label="关闭">' + I.x + '</button></div><div class="stage">' + body + '</div>' + cap;
    const v = $('video', el);
    $('.top button', el).onclick = () => { if (v) v.pause(); el.remove(); };
    document.body.appendChild(el);
    if (v) { stopAudio(); v.play().catch(() => {}); }
  }
  function openSheet(html) {
    const el = document.createElement('div'); el.className = 'sheet';
    el.innerHTML = '<div class="in" role="dialog" aria-modal="true"><div class="grab"></div><button class="x">关闭</button>' + html + '</div>';
    el.addEventListener('click', (e) => { if (e.target === el || e.target.classList.contains('x')) el.remove(); });
    document.body.appendChild(el); return el;
  }

  /* 全局点击：大图、视频、音频 */
  document.addEventListener('click', (e) => {
    const z = e.target.closest('[data-z]');
    if (z) {
      const g = z.dataset.g; const root = z.closest('.sheet') || document;
      const all = $$('[data-z][data-g="' + g + '"]', root);
      const list = all.map((n) => ({ stem: n.dataset.z, cap: n.dataset.cap || capOf(n.dataset.z) }));
      openLightbox(list, Math.max(0, all.indexOf(z))); return;
    }
    const v = e.target.closest('[data-v]'); if (v) { openVideo(v.dataset.v); return; }
    const a = e.target.closest('[data-a]'); if (a) { playKey(a.dataset.a); }
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
        '<button class="switch" role="switch" aria-checked="' + state.voice + '"><span class="tg"></span>语音导览</button></div></div></section>',
      mount(root) {
        $('.switch', root).onclick = () => setVoice(!state.voice);
        // iOS 和微信里，声音必须在点击时先放出来；这里点「进入展馆」时直接开始播放序厅讲解
        $('.btn-enter', root).addEventListener('click', () => { if (state.voice) autoPlay('prelude'); });
      }
    };
  }

  /* ================= 序厅 ================= */
  function pPrelude() {
    const P = D.prelude, sc = P.scope;
    const towns = sc.towns.map((t) => '<div class="sc-town' + (t.pending ? ' pending' : '') + '"><h3>' + esc(t.name) + '</h3><ul>' +
      t.villages.map((v) => '<li class="vill ' + v.state + '"><i></i><b>' + esc(v.name) + '</b>' + (v.note ? '<span>' + esc(v.note) + '</span>' : '') + '</li>').join('') + '</ul></div>').join('');
    const scope = '<div class="scope"><div class="sc-top"><b>' + esc(sc.county) + '</b><span>' + esc(sc.park) + '</span></div>' + towns +
      '<div class="legend"><span class="done"><i></i>影像已采集</span><span class="todo"><i></i>待采集</span><span class="pending"><i></i>待确认</span></div></div>' +
      '<p class="src">' + esc(sc.foot) + '</p>';
    const T = S.types || {};
    const flow = '<ol class="flow">' + P.govern.map((g, i) => '<li><span class="n">' + (i + 1) + '</span><b>' + esc(g.t) + '</b><p>' + esc(g.d) + '</p></li>').join('') + '</ol>' +
      '<div class="totals">' + [[S.records, '条著录'], [S.unique, '件去重后素材'], [T['照片'], '张照片'], [T['视频'], '段视频'], [T['航拍'], '段航拍'], [T['全景'], '张全景']]
        .map((x) => '<span><b>' + (x[0] || 0) + '</b>' + x[1] + '</span>').join('') + '</div>';
    const rows = HALLS.map((h, i) => {
      const st = S.halls ? S.halls[i + 1] : null;
      const by = st && st.total ? Object.keys(st.by).map((k) => k + ' ' + st.by[k]).join(' · ') : '家训原文、手抄本、碑刻资料征集中';
      return '<button class="lrow' + (st && st.total ? '' : ' empty') + '" data-go="' + h.id + '"><span class="no">' + h.no + '</span><span class="nm"><b>' + esc(h.name) + '</b><small>' + esc(by) + '</small></span>' +
        '<span class="n">' + (st && st.total ? st.total + '<small>件</small>' : '<small>征集中</small>') + '</span></button>';
    }).join('');
    const vals = P.values.map((v) => '<button class="val" data-go="' + v.to + '"><span class="big">' + esc(v.big) + '<small>' + esc(v.unit) + '</small></span><p>' + esc(v.d) + '</p></button>').join('');
    return {
      html: bar('序厅', ['cover', '封面']) + '<div class="page">' +
        '<div class="hero short"><img src="' + src('CD01-SP-20261016-0001') + '" alt="板枣博物馆展厅中的稷山县地图"></div>' +
        '<header class="hall-head wrap"><div class="no">序厅</div><h1>项目概况</h1><p class="pc">板枣博物馆展厅中的稷山县地图 · 2026-10-16</p></header>' +
        '<div class="wrap"><p class="hall-intro">' + esc(D.lead) + '</p><div class="narr">' + audioBtn('prelude', '收听序厅讲解', '暂停讲解') + '</div></div>' +
        sec('调查范围', '以国家板枣公园千年古树核心区为中心，覆盖 2 个核心乡镇、6 个行政村。', scope) +
        sec('调查与数据治理', '分散的生态、文化、产业数据经标准化汇聚、融合治理，形成支撑各类数字化应用的数据底座。', flow) +
        sec('资源总览', '按八大类保护要素统计，不含全景原片和重复副本。点击一行进入对应展厅。', '<div class="ledger">' + rows + '</div>' +
          '<p class="src">另有历史渊源、博物馆展陈、文献档案和产业融合类素材 ' + (S.others || 0) + ' 件，收在资源库平台。</p>') +
        sec('遗产价值', '', '<div class="vals">' + vals + '</div>') +
        '<div class="wrap endcta"><a class="btn-main" href="#map">进入展厅导览' + I.arrow + '</a></div>' +
        '</div>',
      mount(root) { $$('[data-go]', root).forEach((b) => { b.onclick = () => { b.classList.add('hl'); setTimeout(() => { location.hash = b.dataset.go; }, 160); }; }); }
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
        '<div class="map-head wrap"><h1>展厅导览</h1><p>八大类保护要素，一类一个展厅。看完一个展厅，在厅尾盖一枚章。</p></div>' +
        '<div class="links wrap"><a href="#prelude"><b>序厅</b><span>调查范围 · 资源总览</span></a><a href="#passport"><b>观展护照</b><span>已集章 ' + n + ' / 8</span></a></div>' +
        '<div class="tiles wrap">' + tiles + '</div>' +
        '<div class="foot">' + esc(D.org) + '编制<br>资料来源：《稷山国家板枣公园简介》《稷山板枣基本情况》、稷山板枣博物馆展陈资料及 2026 年 10 月项目采集素材<br>讲解音频为语音合成</div>' +
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

  /* ---------- 第一展厅 ---------- */
  function seasonSVG() {
    // 一根「之」字形的枣枝：主枝 + 三条枣吊，叶互生
    const twigs = [
      [[150, 196], [168, 160], [156, 128], [176, 96], [166, 66]],
      [[236, 140], [262, 118], [256, 88], [282, 70], [278, 44]],
      [[96, 228], [80, 196], [100, 170], [86, 140]],
      [[318, 92], [346, 96], [360, 72]]
    ];
    let lv = '', bd = '', fl = '', fg = '', fr = '', tw = '';
    twigs.forEach((t, ti) => {
      tw += '<polyline points="' + t.map((p) => p.join(',')).join(' ') + '" fill="none" stroke="#6E4A2E" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"/>';
      for (let s = 1; s < t.length; s++) {
        const a = t[s - 1], b = t[s], ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
        const side = (s + ti) % 2 ? 1 : -1;
        // 每段三片互生叶：外层 g 负责位置和朝向，内层 path 负责季节变化
        [[1, side, 30], [0.5, -side, 26], [0.2, side, 20]].forEach((q) => {
          const x = a[0] + (b[0] - a[0]) * q[0], y = a[1] + (b[1] - a[1]) * q[0], rot = ang + q[1] * 58;
          lv += '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + rot.toFixed(1) + ')"><path class="lf" d="M0 0 q ' + (q[2] * .45) + ' -' + (q[2] * .32) + ' ' + q[2] + ' 0 q -' + (q[2] * .55) + ' ' + (q[2] * .32) + ' -' + q[2] + ' 0z"/></g>';
        });
        const x = b[0], y = b[1];
        bd += '<circle class="bd" cx="' + x + '" cy="' + y + '" r="3.6" fill="#8DB85A"/><circle class="bd" cx="' + ((a[0] + b[0]) / 2) + '" cy="' + ((a[1] + b[1]) / 2) + '" r="2.8" fill="#9CC468"/>';
        [[-5, 7], [3, 9], [-1, 14]].forEach((o, k) => {
          fl += '<g transform="translate(' + (x + side * o[0]) + ' ' + (y + o[1]) + ') scale(' + (1.25 - k * .15) + ')"><g class="fl"><path d="M0-5L1.5-1.6 5-1.5 2.3 1 3.1 4.6 0 2.6-3.1 4.6-2.3 1-5-1.5-1.5-1.6Z" fill="#DCDA6A" stroke="#ABA53C" stroke-width=".6"/><circle r="1.5" fill="#97892A"/></g></g>';
        });
        if (s % 2 === 0 || s === t.length - 1) {
          const fx = x + side * 6, fy = y + 6;
          fg += '<g transform="translate(' + fx + ' ' + fy + ')"><g class="fg"><path d="M0 0v5" stroke="#6E4A2E" stroke-width="1.3"/><ellipse cx="0" cy="12" rx="6.5" ry="8" fill="#A7C56B" stroke="#7F9C47" stroke-width=".8"/></g></g>';
          fr += '<g transform="translate(' + fx + ' ' + fy + ')"><g class="fr"><path d="M0 0v5" stroke="#6E4A2E" stroke-width="1.4"/><path d="M-9 10c0-4 4.2-5.2 9-5.2s9 1.2 9 5.2c0 9.5-4.2 15.8-9 15.8s-9-6.3-9-15.8z" fill="url(#zr)"/><ellipse cx="-4" cy="12" rx="2.1" ry="3.6" fill="#fff" opacity=".35"/></g></g>';
        }
      }
    });
    const fall = '<g class="fall"><path d="M120 278 q8-6 18 0 q-10 6-18 0z" fill="#B59A55"/><path d="M200 284 q8-5 17 1 q-9 5-17-1z" fill="#A88A44" /><path d="M262 276 q8-6 18 0 q-10 6-18 0z" fill="#BCA45E"/><path d="M58 286 q7-5 15 0 q-8 5-15 0z" fill="#A88A44"/></g>';
    return '<svg class="sv" data-st="0" viewBox="0 0 400 300" aria-label="枣枝物候示意图"><defs><linearGradient id="zr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C2413A"/><stop offset=".6" stop-color="#8E1F25"/><stop offset="1" stop-color="#5E1217"/></linearGradient></defs>' +
      '<path d="M0 288 Q 200 276 400 290" stroke="var(--line)" stroke-width="1.5" fill="none"/>' + fall +
      '<path d="M18 292 C 70 262, 120 222, 150 196 S 214 152, 236 140 S 300 100, 318 92 S 360 70, 392 52" fill="none" stroke="#5B3A22" stroke-width="9" stroke-linecap="round"/>' +
      '<path d="M18 292 C 70 262, 120 222, 150 196" fill="none" stroke="#7B5536" stroke-width="3" stroke-linecap="round" opacity=".5" transform="translate(-2 -3)"/>' +
      tw + '<g>' + lv + '</g>' + bd + fl + fg + fr + '</svg>';
  }
  function pHall1(h) {
    const ss = D.seasons;
    const season = '<div class="season" data-st="0"><div class="stage">' + seasonSVG() + '<span class="tag">示意图</span><button class="auto" aria-pressed="false">播放四季</button></div>' +
      '<div class="tabs" role="tablist">' + ss.map((s, i) => '<button role="tab" aria-selected="' + (i === 0) + '" data-i="' + i + '">' + esc(s.k) + '</button>').join('') + '</div>' +
      '<div class="desc"><b></b><em></em><p></p></div></div><p class="src">四季实拍影像待补拍；现有古树影像摄于 2026 年 10 月中旬采收后。</p>';
    const fruit = recTable(D.fruit) + '<div class="grid2" style="margin-top:14px">' + fig('CJ07-TP-20261017-0007', { g: 'h1f' }) + fig('ZZ01-SP-20261018-0001', { video: 'ZZ01-SP-20261018-0001', cap: '古枣树树冠、树干与枝杈形态 · 视频' }) + '</div>' +
      '<p class="src">来源：《稷山板枣基本情况》；项目采集素材</p>';
    const spots = ['全部'].concat(Array.from(new Set(D.trees.map((t) => t.spot))));
    const treeCards = D.trees.map((t) => '<button class="tree" data-tree="' + t.id + '" data-spot="' + esc(t.spot) + '">' +
      (t.img ? '<span class="ph"><img loading="lazy" src="' + src(t.img) + '" alt=""></span>' : '<span class="ph noimg">' + I.tree + '<span>单株影像待补拍</span></span>') +
      '<b>' + esc(t.name) + (t.rows ? '<span class="badge">' + (t.id === 't301' ? '挂牌' : '文献') + '</span>' : '') + '</b><span>' + esc(t.spot) + (t.date ? ' · ' + t.date : '') + '</span></button>').join('');
    const trees = '<div class="chips" role="group" aria-label="按点位筛选">' + spots.map((s, i) => '<button class="chip" aria-pressed="' + (i === 0) + '" data-f="' + esc(s) + '">' + esc(s) + '</button>').join('') + '</div>' +
      '<div class="trees">' + treeCards + '</div><p class="src">按行政村归档：待古树挂牌编号与村界核对后开放筛选。</p>';
    const body = sec('古枣树四季', '一键切换发芽、开花、坐果、成熟、落叶休眠。', season) +
      sec('板枣种质特征', '稷山板枣以「皮薄、肉厚、核小」著称。', fruit) +
      sec('古枣树档案', '一树一档：编号、树龄、位置、所属村落、实拍、生长现状、种质特征、调查记录。', trees) +
      sec('枣林伴生动植物', '', gap('枣林伴生植物、鸟类和昆虫资源图集待调查补充。'));
    return {
      html: hallShell(h, body),
      mount(root) {
        const box = $('.season', root), sv = $('svg.sv', box), tabs = $$('.tabs button', box), auto = $('.auto', box);
        let timer = null;
        const set = (i) => {
          box.dataset.st = i; sv.dataset.st = i;
          tabs.forEach((t, j) => t.setAttribute('aria-selected', j === i));
          $('.desc b', box).textContent = ss[i].k; $('.desc em', box).textContent = ss[i].when; $('.desc p', box).textContent = ss[i].d;
        };
        tabs.forEach((t) => { t.onclick = () => { stopAuto(); set(+t.dataset.i); }; });
        const stopAuto = () => { clearInterval(timer); timer = null; auto.textContent = '播放四季'; auto.setAttribute('aria-pressed', 'false'); };
        auto.onclick = () => {
          if (timer) { stopAuto(); return; }
          auto.textContent = '停止'; auto.setAttribute('aria-pressed', 'true');
          let i = +box.dataset.st; timer = setInterval(() => { i = (i + 1) % ss.length; set(i); }, 2200);
        };
        set(0);
        $$('.chip', root).forEach((c) => {
          c.onclick = () => {
            $$('.chip', root).forEach((x) => x.setAttribute('aria-pressed', x === c));
            const f = c.dataset.f; $$('.tree', root).forEach((t) => { t.hidden = !(f === '全部' || t.dataset.spot === f); });
          };
        });
        $$('.tree', root).forEach((b) => {
          b.onclick = () => {
            const t = D.trees.find((x) => x.id === b.dataset.tree);
            const rows = t.rows || [['编号', '待核'], ['树龄', '待测定'], ['位置', '国家板枣公园·' + t.spot], ['所属村落', '待核'],
              ['生长现状', meta(t.img).cap || '待调查'], ['种质特征', '稷山板枣'], ['调查记录', t.date + ' 拍摄，素材编号 JSBZ-' + t.img]];
            openSheet('<h3>' + esc(t.name) + '</h3>' + (t.img ? ph(t.img, { r: 'r34', g: 'tree', cap: capOf(t.img) }) : stub('单株影像待补拍', 'r169')) + recTable(rows));
          };
        });
      }
    };
  }

  /* ---------- 第二展厅 ---------- */
  function pHall2(h) {
    const P = D.process;
    const stepper = '<div class="stepper"><div class="dots">' + P.map((p, i) => '<button data-i="' + i + '" class="' + (p.img ? '' : 'miss') + '"><i>' + (i + 1) + '</i>' + esc(p.name.replace('与病虫害防控', '').replace('与整地', '')) + '</button>').join('') + '</div><div class="stepcard"></div></div>' +
      '<p class="src">虚线圆点表示该环节影像待补采。</p>';
    const well = '<div class="wsteps">' + D.well.map((w, i) => '<div class="wstep">' + ph(w.img, { g: 'well', cap: w.t }) + '<div><b><i>' + (i + 1) + '</i>' + esc(w.t) + '</b><p>' + esc(w.d) + '</p></div></div>').join('') + '</div>' +
      '<div style="margin-top:12px">' + videoPill('ZZ03-SP-20261016-0001', '看演示视频') + '</div>';
    const tools = '<div class="hscroll">' + D.tools.map((t) => '<div class="tool">' + (t.img ? ph(t.img, { g: 'tools', cap: t.t, video: t.video }) : stub('实物影像待补采')) + '<b>' + esc(t.t) + '</b><p>' + esc(t.d) + '</p></div>').join('') + '</div>';
    const body = sec('农事一年', '点击步骤，依次查看一颗板枣从枣园到餐桌的流程。', stepper) +
      sec('古井灌溉技艺', '甘棠井旁整理演示的传统灌溉方式。', well) +
      sec('技艺口诀', '', '<button class="pill solid" data-say>查看枣乡口诀</button><div style="margin-top:12px">' + gap('传统物候口诀、土壤管护和古法植保经验，待老枣农口述采集后补入（可播放口述音频）。') + '</div>') +
      sec('核心技艺', '', gap('环剥、修剪手法、窖藏保鲜等核心技艺的分步演示，待传承人实拍和口述采集后补入。')) +
      sec('老农具档案', '左右滑动查看。', tools) +
      '<div class="wrap"><p class="src">来源：《稷山板枣基本情况》；《稷山国家板枣公园简介》；稷山板枣博物馆展陈资料；项目采集素材</p></div>';
    return {
      html: hallShell(h, body),
      mount(root) {
        const card = $('.stepcard', root), dots = $$('.dots button', root);
        const show = (i) => {
          const p = P[i];
          dots.forEach((d, j) => { d.classList.toggle('cur', j === i); d.classList.toggle('done', j < i); });
          const row = dots[i].parentNode; row.scrollTo({ left: dots[i].offsetLeft - row.clientWidth / 2 + dots[i].offsetWidth / 2, behavior: 'smooth' });
          card.innerHTML = (p.img ? ph(p.img, { r: 'r169', g: 'proc', cap: p.name, video: p.video }) : stub(p.gap, 'r169')) +
            '<div class="hd"><h3>' + esc(p.name) + '</h3><span class="when">' + esc(p.season) + '</span></div><div class="stage">' + esc(p.stage) + ' · 第 ' + (i + 1) + ' / ' + P.length + ' 步</div>' +
            '<p class="t">' + esc(p.text) + '</p>' + (p.img && p.gap ? gap(p.gap) : '') +
            '<div class="ctl"><button class="pill" data-prev ' + (i ? '' : 'disabled') + '>' + I.l + '上一步</button>' + audioBtn(p.voice, '听一句') +
            '<button class="pill solid" data-next>' + (i < P.length - 1 ? '下一步' + I.r : '从头看') + '</button></div>';
          $('[data-prev]', card).onclick = () => i && show(i - 1);
          $('[data-next]', card).onclick = () => show(i < P.length - 1 ? i + 1 : 0);
          syncAudio();
        };
        dots.forEach((d) => { d.onclick = () => show(+d.dataset.i); });
        show(0);
        $('[data-say]', root).onclick = () => openSheet('<h3>枣乡口诀</h3>' + D.sayings.map((s) => '<div class="motto" style="margin-top:12px"><div class="in"><div class="orig" style="margin-top:0">' + esc(s.t) + '</div><p class="small">' + esc(s.from) + '</p></div></div>').join(''));
      }
    };
  }

  /* ---------- 第三展厅 ---------- */
  function pHall3(h) {
    const SS = D.spotSeasons;
    const seas = '<div class="seas4"><div class="seg" role="tablist">' + SS.items.map((s, i) => '<button role="tab" data-i="' + i + '" class="' + (s.img ? '' : 'miss') + '" aria-selected="' + (s.k === '秋') + '">' + s.k + '</button>').join('') + '</div>' +
      '<div class="hscroll">' + SS.items.map((s) => '<div>' + (s.img ? ph(s.img, { r: '', g: 'seas', cap: s.cap }) : stub(SS.spot + ' · ' + s.k + '季影像待补拍', '')) + '<div class="lab"><b>' + s.k + '</b><span>' + (s.img ? esc(s.cap) : '同一点位按季节补拍') + '</span></div></div>').join('') + '</div></div>';
    const P = D.panos;
    const pano = '<div class="panotabs">' + P.map((p, i) => '<button class="chip" data-p="' + i + '" aria-pressed="' + (i === 0) + '">' + esc(p.name) + '</button>').join('') + '</div>' +
      '<div class="pano"><div class="strip"><img alt=""><span class="hint">' + '← 左右拖动 →</span></div><h3><b></b><span>360° 全景展开</span></h3><p></p></div>' +
      (ON_PLATFORM ? '<div style="margin-top:12px"><a class="pill" href="/tour/" target="_blank" rel="noopener">进入 VR 全景导览' + I.arrow + '</a></div>' : '');
    const scenes = '<div class="grid2">' + D.scenes.map((s) => '<figure>' + (s.img ? ph(s.img, { g: 'scn', cap: s.t, video: s.video }) : stub('影像待补采')) + '<figcaption><b style="font-family:var(--serif);font-size:15px;color:var(--ink)">' + esc(s.t) + '</b><br>' + esc(s.d) + '</figcaption></figure>').join('') + '</div>';
    const body = sec('同一点位 · 四季对比', '左右滑动，切换唐枣园的春、夏、秋、冬。', seas) +
      sec('全景长图', '27 个全景点位中选取 7 个，横向拖动浏览。', pano) +
      sec('景观档案', '连片古枣林、灌溉井渠、林间古道等景观要素。', scenes);
    return {
      html: hallShell(h, body),
      mount(root) {
        const sc = $('.seas4 .hscroll', root), segs = $$('.seg button', root);
        const panels = $$('.seas4 .hscroll > div', root);
        const padL = () => parseFloat(getComputedStyle(sc).paddingLeft) || 0;
        const goSeason = (i, smooth) => { sc.scrollTo({ left: panels[i].offsetLeft - padL(), behavior: smooth ? 'smooth' : 'auto' }); };
        segs.forEach((b) => { b.onclick = () => goSeason(+b.dataset.i, true); });
        let t = null;
        sc.addEventListener('scroll', () => {
          clearTimeout(t); t = setTimeout(() => {
            const x = sc.scrollLeft; let best = 0, bd = 1e9;
            panels.forEach((p, i) => { const d = Math.abs(p.offsetLeft - padL() - x); if (d < bd) { bd = d; best = i; } });
            segs.forEach((s, i) => s.setAttribute('aria-selected', i === best));
          }, 80);
        }, { passive: true });
        requestAnimationFrame(() => goSeason(2, false));
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
        // 鼠标拖动
        let dn = null;
        strip.addEventListener('mousedown', (e) => { dn = [e.clientX, strip.scrollLeft]; e.preventDefault(); });
        window.addEventListener('mousemove', (e) => { if (dn) strip.scrollLeft = dn[1] - (e.clientX - dn[0]); });
        window.addEventListener('mouseup', () => { dn = null; });
        showPano(0);
      }
    };
  }

  /* ---------- 第四展厅 ---------- */
  function cmpWidget(v) {
    return '<div class="cmp" style="--x:50%"><div class="now"><img src="' + src(v.now) + '" alt="' + esc(v.nowCap) + '"></div>' +
      '<div class="old"><div class="oldin"><span><b>老照片征集中</b>欢迎提供本村旧照，补入后可与现状对比</span></div></div>' +
      '<div class="bar2"></div><div class="knob">' + I.lr + '</div><span class="lbl l">旧照</span><span class="lbl r">现状</span>' +
      '<input type="range" min="0" max="100" value="50" aria-label="拖动对比旧照与现状"></div><p class="src">现状：' + esc(v.nowCap) + '</p>';
  }
  function villageCard(v) {
    if (v.state !== 'done') return '<div class="vcard"><h3>' + esc(v.name) + '</h3><div class="small">' + esc(v.town) + '</div><div style="margin-top:12px">' + gap(v.text, v.state === 'pending') + '</div></div>';
    return '<div class="vcard"><h3>' + esc(v.name) + '</h3><div class="small">' + esc(v.town) + ' · 一村一档</div>' +
      '<div style="margin-top:12px">' + cmpWidget(v) + '</div>' +
      '<p class="txt" style="margin-top:12px">' + esc(v.text) + '</p>' +
      '<div style="margin-top:14px">' + recTable(v.rows) + '</div>' +
      (v.gallery.length ? '<div class="' + (v.gallery.length > 1 ? 'grid2' : '') + '" style="margin-top:14px">' + v.gallery.map((g) => fig(g, { g: 'vil', r: v.gallery.length > 1 ? 'r43' : 'r169', video: M[g] && M[g].video && v.videos.indexOf(g) >= 0 ? g : null })).join('') + '</div>' : '') +
      (v.videos.length ? '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">' + v.videos.map((s) => videoPill(s, meta(s).cap)).join('') + '</div>' : '') +
      (v.pano ? '<div class="pano"><div class="strip"><img src="assets/pano/' + v.pano + '.jpg" alt="全景展开图"><span class="hint">← 左右拖动 →</span></div><p>' + esc(v.pano === 'p0014' ? '陶梁村广场 360° 全景展开（2026-10-17）' : '《枣林赞歌》浮雕 360° 全景展开（加庄村西）') + '</p></div>' : '') +
      '</div>';
  }
  function pHall4(h) {
    const V = D.villages;
    const tabs = '<div class="vtabs">' + V.map((v, i) => '<button data-i="' + i + '" aria-pressed="' + (i === 0) + '" class="' + (v.state === 'pending' ? 'pending' : '') + '">' + esc(v.name) + '<span>' + esc(v.state === 'done' ? '已建档' : v.state === 'todo' ? '待采集' : '待确认') + '</span></button>').join('') + '</div>';
    const body = sec('行政村档案', '按 6 个行政村分组：古窑洞、老院落、街巷、祠堂档案，实拍照片、建筑特征、历史沿革、现状记录。', tabs + '<div class="vhost"></div>') +
      '<div class="wrap"><p class="src">来源：《山西稷山国家板枣公园简介》；项目采集素材（2026-10-17、18）</p></div>';
    return {
      html: hallShell(h, body),
      mount(root) {
        const host = $('.vhost', root);
        const show = (i) => {
          $$('.vtabs button', root).forEach((b) => b.setAttribute('aria-pressed', +b.dataset.i === i));
          host.innerHTML = villageCard(V[i]);
          const c = $('.cmp', host);
          if (c) { const r = $('input', c); r.oninput = () => c.style.setProperty('--x', r.value + '%'); }
          const s = $('.strip', host); if (s) { const im = $('img', s); const hint = $('.hint', s); im.onload = () => { s.scrollLeft = (im.width - s.clientWidth) / 2; }; s.addEventListener('scroll', () => { hint.style.opacity = 0; }, { passive: true }); }
        };
        $$('.vtabs button', root).forEach((b) => { b.onclick = () => show(+b.dataset.i); });
        show(0);
      }
    };
  }

  /* ---------- 第五展厅 ---------- */
  function pHall5(h) {
    const T = D.timeline;
    const tl = '<div class="tl">' + T.map((e, i) => '<div class="ev" data-i="' + i + '"><div class="when">' + esc(e.when) + '</div><h3>' + esc(e.title) + '<span>' + esc(e.tag) + '</span></h3><p>' + esc(e.d) + '</p>' +
      (e.imgs && e.imgs.length ? '<div class="imgs">' + e.imgs.map((s) => ph(s, { g: 'tl' + i, r: '', cap: (e.capOverride && e.capOverride[s]) || capOf(s) })).join('') + '</div>' : '') +
      (e.video ? '<div style="margin-top:10px">' + videoPill(e.video, meta(e.video).cap) + '</div>' : '') +
      (e.gap ? gap(e.gap) : '') + '</div>').join('') + '</div>';
    const body = sec('节庆时间轴', '沿时间轴浏览枣乡一年里的祭祀、仪式和庆典。', tl) +
      '<div class="wrap"><p class="src">来源：《稷山国家板枣公园简介》；《稷山板枣基本情况》；项目采集素材</p></div>';
    return {
      html: hallShell(h, body),
      mount(root) {
        if (!('IntersectionObserver' in window)) return;
        const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) en.target.classList.add('on'); }), { rootMargin: '0px 0px -40% 0px' });
        $$('.ev', root).forEach((e) => io.observe(e));
      }
    };
  }

  /* ---------- 第六展厅 ---------- */
  function pHall6(h) {
    const st = '<div class="stories">' + D.stories.map((s) => '<div class="story" data-s="' + s.id + '"><button class="top">' + '<span class="ph">' + '<img loading="lazy" src="' + src(s.img) + '" alt=""></span><span class="tx2"><b>' + esc(s.t) + '</b><span class="lk">' + I.play + '点开听故事</span></span></button>' +
      '<div class="more" hidden><p>' + esc(s.d) + '</p><div style="margin-top:10px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">' + audioBtn(s.id, '听啾啾讲', '暂停') + '<button class="pill" data-z="' + s.img + '" data-g="st-' + s.id + '">看图</button></div><p class="src">' + esc(s.src) + '</p></div></div>').join('') + '</div>';
    const cus = '<div class="grid2">' + D.customs.map((c) => fig(c.img, { g: 'cus', cap: c.t, video: c.video })).join('') + '</div>';
    const body = sec('枣乡故事', '点击故事卡片，播放讲解音频。', st) +
      sec('民俗影像', '婚俗、剪纸、枣木器物等与枣乡生活相关的民俗实物。', cus + '<p class="src">各项民俗的来历与做法待访谈补充。</p>') +
      sec('口述音频', '', gap('老枣农讲述的民间故事和习俗口述音频，待受访者授权后上线。', true));
    return {
      html: hallShell(h, body),
      mount(root) {
        $$('.story', root).forEach((s) => {
          $('.top', s).onclick = () => {
            const open = !s.classList.contains('open');
            $$('.story', root).forEach((o) => { o.classList.remove('open'); $('.more', o).hidden = true; });
            if (open) { s.classList.add('open'); $('.more', s).hidden = false; if (curKey !== s.dataset.s || audio.paused) playKey(s.dataset.s); }
            else if (curKey === s.dataset.s) stopAudio();
          };
        });
      }
    };
  }

  /* ---------- 第七展厅 ---------- */
  function pHall7(h) {
    const mt = D.mottos.map((m) => '<div class="motto">' + ph(m.img, { r: '', g: 'mt', cap: m.imgCap }) + '<div class="in"><div class="k">' + esc(m.kind) + ' · ' + esc(m.who) + '</div><h3>' + esc(m.t) + '</h3>' +
      '<div class="orig">' + esc(m.orig) + '</div><p class="gl"><b>释义　</b>' + esc(m.gloss) + '</p><div style="margin-top:12px">' + audioBtn(m.voice, '听讲解', '暂停') + '</div><p class="src">' + esc(m.src) + '。图为园内刻红字的景石，是否即戒青石待考。</p></div></div>').join('');
    const slots = '<div class="slots">' + D.mottoSlots.map((s) => '<div class="slot"><b>' + esc(s) + '</b><span>家训征集中</span></div>').join('') + '</div>';
    const body = sec('碑刻乡规', '原文转录 + 释义。点击卡片按钮收听讲解。', mt) +
      sec('各村家训', '各村家训、手抄文本、碑文记载、口头传承家风。', slots + '<div style="margin-top:12px">' + gap('征集各村家训原文、手抄本、碑刻拓片和口头传承的家风故事；整理后按「原文转录 + 释义 + 诵读音频」入馆。', true) + '</div>');
    return { html: hallShell(h, body), mount() {} };
  }

  /* ---------- 第八展厅 ---------- */
  function pHall8(h) {
    const pc = '<div class="pcards">' + D.people.map((p, i) => '<div class="pcard"><button><span class="av">' + I.person + '</span><span><b>' + esc(p.t) + '</b><span>' + esc(p.role) + ' · 访谈 ' + esc(p.len) + '</span></span><span class="chev">' + I.r + '</span></button>' +
      '<div class="more" hidden>' + recTable([['身份', p.role], ['访谈场景', p.where], ['访谈时长', p.len], ['采集日期', p.date], ['姓名与照片', '待本人授权后公开'], ['擅长技艺', '待访谈转写后补充'], ['传承经历', '待访谈转写后补充'], ['访谈视频', '待授权后上线']]) + '</div></div>').join('') + '</div>';
    const gp = '<div class="pcards">' + D.groups.map((g, i) => '<div class="pcard"><button><span class="av"><img src="' + src(g.imgs[0]) + '" alt=""></span><span><b>' + esc(g.t) + '</b><span>' + esc(g.d.slice(0, 22)) + '…</span></span><span class="chev">' + I.r + '</span></button>' +
      '<div class="more" hidden><p class="txt">' + esc(g.d) + '</p><div class="grid2">' + g.imgs.map((s) => ph(s, { g: 'grp' + i })).join('') + '</div>' + (g.video ? '<div style="margin-top:10px">' + videoPill(g.video, '看座谈会视频') + '</div>' : '') + '</div></div>').join('') + '</div>';
    const body = sec('传承人', '传承人卡片：照片、简介、擅长技艺、传承经历、访谈视频。', gap('传承人认定名单待补；按「全覆盖、濒危优先」原则，优先采集高龄传承人和老枣农。') ) +
      sec('人物访谈', '2026 年 10 月 17 日完成第一批访谈：3 位受访者、6 段视频，约 45 分钟。', pc) +
      sec('枣乡人物与专家', '', gp) +
      '<div class="wrap"><p class="src">来源：项目采集素材（2026-10-16、17）</p></div>';
    return {
      html: hallShell(h, body),
      mount(root) {
        $$('.pcard > button', root).forEach((b) => {
          b.onclick = () => { const c = b.parentNode, open = !c.classList.contains('open'); c.classList.toggle('open', open); $('.more', c).hidden = !open; };
        });
      }
    };
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
    g.font = '700 36px ' + serif; g.fillStyle = '#5E6743'; g.fillText(D.titleLines[0] + ' · ' + D.titleLines[1], W / 2, 590); g.fillText(D.titleLines[2], W / 2, 640);
    g.fillStyle = '#A0855C'; g.fillRect(W / 2 - 40, 672, 80, 2);
    const cols = 4, cw = 200, top = 720;
    for (let i = 0; i < 8; i++) {
      const h = HALLS[i], got = hasStamp(h.id);
      const x = (W - cols * cw) / 2 + (i % cols) * cw + cw / 2, y = top + Math.floor(i / cols) * 250;
      const im = await svgImg(sealSVG(h.seal, got ? '#A8322A' : '#CFCCC1', 'c' + i).replace('font-family="JSSerif', 'font-family="JSSerif'));
      if (im) { g.save(); g.translate(x, y + 80); g.rotate(got ? (i % 2 ? .08 : -.1) : 0); g.globalAlpha = got ? .95 : .7; g.drawImage(im, -78, -78, 156, 156); g.restore(); }
      g.globalAlpha = 1; g.fillStyle = got ? '#2B251F' : '#8F877C'; g.font = '700 26px ' + serif; g.fillText(h.name.length > 7 ? h.name.slice(0, 6) + '…' : h.name, x, y + 196);
    }
    const n = state.stamps.length;
    g.fillStyle = '#2B251F'; g.font = '700 44px ' + serif; g.fillText(n === 8 ? '八厅印章已集齐' : '已集 ' + n + ' / 8 枚展厅印章', W / 2, 1290);
    const mz = await svgImg(mascotSVG('wave'));
    if (mz) g.drawImage(mz, 96, 1330, 180, 190);
    g.textAlign = 'left'; g.fillStyle = '#6C645B'; g.font = '30px ' + sans;
    g.fillText('板啾啾陪你逛完了稷山板枣数字馆', 300, 1400);
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
    document.title = (h ? '第' + h.no + '展厅 ' + h.name : id === 'prelude' ? '序厅' : id === 'map' ? '展厅导览' : id === 'passport' ? '观展护照' : '稷山板枣数字馆') + (id === 'cover' ? '' : ' · 稷山板枣数字馆');
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
