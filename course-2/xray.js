/* Training overlay: "Show how this page is built".
   Adds a toggle to <main>. When on, every content element gets a chip with its
   real tag and becomes focusable; hover or focus opens a bubble describing the
   tag, the type styling, what it contributes to the heading outline, and what a
   screen reader announces. Nothing here is part of the simulated city page. */
(function () {
  var CSS =
    '.xray-btn{font:700 16px/1.2 "Segoe UI",Roboto,Helvetica,Arial,sans-serif;padding:12px 18px;border:2px solid #0d3b4f;background:#fff;color:#0d3b4f;border-radius:6px;cursor:pointer;margin:0 0 6px}' +
    '.xray-btn[aria-pressed="true"]{background:#0d3b4f;color:#fff}' +
    '.xray-btn:focus-visible,.xray-on [data-xray]:focus-visible{outline:3px solid #b32020;outline-offset:3px}' +
    '.xray-hint{font-size:.95rem;color:#3e4d57;margin:0 0 22px;max-width:70ch}' +
    '.xray-on [data-xray]{outline:1.5px dashed #0d3b4f;outline-offset:3px;cursor:help}' +
    '.xray-on [data-xray]::before{content:attr(data-xray);content:attr(data-xray) / "";display:inline-block;vertical-align:middle;margin:0 8px 2px 0;padding:2px 7px;border-radius:3px;background:#0d3b4f;color:#fff;font:700 12px/1.3 "Courier New",Courier,monospace;letter-spacing:.06em;white-space:nowrap}' +
    '.xray-imgchip{display:inline-block;margin:0 0 4px;padding:2px 7px;border-radius:3px;background:#0d3b4f;color:#fff;font:700 12px/1.3 "Courier New",Courier,monospace;letter-spacing:.06em}' +
    '.xray-on ol[data-xray]::before,.xray-on ul[data-xray]::before,.xray-on table[data-xray]::before{display:block;width:max-content;margin:0 0 6px}' +
    '.xray-on [data-xray].xray-active{outline:3px solid #b32020;background:#fff2f0}' +
    '.xray-bubble{position:absolute;z-index:40;max-width:min(460px,calc(100vw - 32px));background:#17242e;color:#f2f6f8;border:2px solid #ffd166;border-radius:10px;padding:14px 16px;font:15px/1.5 "Segoe UI",Roboto,Helvetica,Arial,sans-serif;box-shadow:0 14px 40px rgba(0,0,0,.45)}' +
    '.xray-bubble[hidden]{display:none}' +
    '.xray-bubble div+div{margin-top:8px}' +
    '.xray-bubble b{display:block;font:700 12px/1.4 "Courier New",Courier,monospace;letter-spacing:.12em;text-transform:uppercase;color:#ffd166}' +
    '.xray-bubble code{background:#0c1a22;color:#a8e0d2;padding:1px 5px;border-radius:3px;font-size:.92em}' +
    '@media (max-width:700px){.xray-bubble{left:16px!important;right:16px;max-width:none}}';

  var NAMES = { p: 'an ordinary paragraph', h1: 'a level 1 heading', h2: 'a level 2 heading', h3: 'a level 3 heading',
    h4: 'a level 4 heading', h5: 'a level 5 heading', h6: 'a level 6 heading', strong: 'bold text', a: 'a link',
    li: 'a list item', ol: 'a numbered list', ul: 'a bulleted list', table: 'a data table', caption: 'the table caption',
    th: 'a header cell', td: 'a data cell', nav: 'a navigation landmark', img: 'an image', button: 'a button' };
  var SELECTOR = 'h1,h2,h3,h4,h5,h6,p,li,ol,ul,table,caption,th,td,a,strong,img,button';

  var main = document.querySelector('[data-xray-root]') || document.querySelector('main');
  if (!main) return;
  var style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'xray-btn'; btn.setAttribute('aria-pressed', 'false');
  btn.textContent = 'Show how this page is built';
  var hint = document.createElement('p');
  hint.className = 'xray-hint'; hint.hidden = true;
  hint.textContent = 'Every piece of the page now carries the tag it is really built with. Hover over any piece, or press Tab to reach it, to see its type styling, what it adds to the heading outline, and what a screen reader announces. Press Escape to close the bubble.';
  var host = main.querySelector('[data-xray-host]') || main.querySelector('.wrap') || main;
  host.insertBefore(hint, host.firstChild);
  host.insertBefore(btn, hint);

  var bubble = document.createElement('div');
  bubble.className = 'xray-bubble'; bubble.id = 'xray-bubble'; bubble.setAttribute('role', 'tooltip'); bubble.hidden = true;
  document.body.appendChild(bubble);

  var on = false, current = null, targets = [];

  function text(el) { return el.textContent.replace(/ /g, ' ').replace(/\s+/g, ' ').trim(); }
  function trunc(s, n) { return s.length > n ? s.slice(0, n).replace(/\s\S*$/, '') + '…' : s; }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function looksLikeHeading(el) {
    if (el.tagName !== 'P' || el.children.length !== 1) return false;
    var k = el.children[0];
    return /^(STRONG|B)$/.test(k.tagName) && text(k) === text(el) && text(el).length > 0 && text(el).length < 80;
  }

  function describe(el) {
    var t = el.tagName.toLowerCase(), cs = getComputedStyle(el), s = text(el);
    var size = Math.round(parseFloat(cs.fontSize)), weight = cs.fontWeight;
    var caps = cs.textTransform === 'uppercase' || (s.length > 3 && s === s.toUpperCase() && /[A-Z]/.test(s));
    var tag = '<' + t + (el.getAttribute('scope') ? ' scope="' + el.getAttribute('scope') + '"' : '') + '>';
    if (t === 'strong' && el.parentElement.tagName === 'P') tag += ' inside a <p>';
    var rows = [['Tag', '<code>' + esc(tag) + '</code> — ' + NAMES[t]]];
    if (t !== 'img') rows.push(['Type', size + 'px, weight ' + weight + (caps ? ', all caps' : '') + (cs.fontStyle === 'italic' ? ', italic' : '')]);

    var outline, announced;
    if (t === 'img') {
      var alt = el.getAttribute('alt'), file = (el.getAttribute('src') || '').split('/').pop();
      rows.push(['File', esc(file) + ', ' + (el.naturalWidth || el.width) + ' × ' + (el.naturalHeight || el.height) + ' pixels']);
      if (alt === null) { rows.push(['Alt', 'Absent. Not alt="", not a caption. Simply missing.']); announced = '“' + esc(file) + ', image” — the file name is read aloud.'; }
      else if (alt.trim() === '') { rows.push(['Alt', '<code>alt=""</code> — marked decorative.']); announced = 'Nothing. Screen readers skip it entirely. Whatever is in the picture is gone.'; }
      else { rows.push(['Alt', '<code>alt="' + esc(alt) + '"</code> (' + alt.trim().split(/\s+/).length + ' words)']); announced = '“image, ' + esc(alt) + '”'; }
      if (el.dataset.xrayText) {
        var pieces = el.dataset.xrayText.split('|'), body = text(main).toLowerCase(), found = pieces.filter(function (p) { return body.indexOf(p.trim().toLowerCase()) !== -1; }).length;
        rows.push(['Text in the image', esc(pieces.join(' · '))]);
        rows.push(['Same text elsewhere on the page', found === pieces.length ? 'Yes, all of it.' : found ? 'Only ' + found + ' of ' + pieces.length + ' pieces.' : 'No. Search finds none of it. The words are pixels: not searchable, not selectable, not translatable, blurry when enlarged.']);
      } else {
        rows.push(['Text in the image', 'None.']);
      }
      outline = 'Not a heading.';
    } else if (t === 'a' || t === 'button') {
      var href = el.getAttribute('href') || '';
      if (t === 'a') rows.push(['Href', '<code>' + esc(href.length > 64 ? href.slice(0, 61) + '…' : href) + '</code>' + (/\.pdf($|[?#])/i.test(href) ? ' — a PDF file' : '')]);
      var same = Array.prototype.filter.call(main.querySelectorAll(t), function (o) { return o !== el && text(o).toLowerCase() === s.toLowerCase(); }).length;
      rows.push(['In the ' + (t === 'a' ? 'links' : 'buttons') + ' list', '“' + esc(s) + '”' + (same ? ' — ' + (same + 1) + (t === 'a' ? ' links' : ' buttons') + ' on this page read exactly this, and go to different places.' : ' — unique on this page.')]);
      if (/^https?:\/\//.test(s)) rows.push(['Note', s.length + ' characters, no spaces. Some screen readers read a URL letter by letter. Nothing in it can wrap, so on a 320-pixel screen it pushes the page sideways.']);
      outline = 'Not a heading. Reachable by Tab and listed in the ' + (t === 'a' ? 'links' : 'buttons') + ' list, out of context.';
      announced = '“' + (t === 'a' ? 'link' : 'button') + ', ' + esc(s) + '”';
    } else if (/^h[1-6]$/.test(t)) {
      var lvl = +t[1], prev = null, hs = main.querySelectorAll('h1,h2,h3,h4,h5,h6');
      for (var i = 0; i < hs.length; i++) { if (hs[i] === el) break; prev = +hs[i].tagName[1]; }
      outline = 'Heading level ' + lvl + '. Appears in the heading list.';
      if (prev && lvl > prev + 1) outline += ' The heading before it is level ' + prev + ', so this skips ' + (lvl - prev - 1 === 1 ? 'level ' + (prev + 1) : 'levels ' + (prev + 1) + ' to ' + (lvl - 1)) + '.';
      announced = '“heading level ' + lvl + ', ' + esc(s) + '”';
    } else if (t === 'p' && s === '') {
      outline = 'Nothing. An empty paragraph used to make vertical space.';
      announced = '“blank” on some screen readers, silence on others. Either way, a stop with nothing in it.';
    } else if (looksLikeHeading(el)) {
      outline = 'Nothing. Looks like a heading; is not one. It is absent from the heading list.';
      announced = '“' + esc(s) + '” as plain body text. Bold and size are not announced.';
    } else if (t === 'p') {
      outline = 'Not a heading. Contributes nothing to the outline.';
      announced = '“' + esc(trunc(s, 80)) + '” as plain body text, ' + s.split(' ').length + ' words in one stop.';
    } else if (t === 'strong') {
      var fake = looksLikeHeading(el.parentElement);
      outline = fake ? 'Nothing. This bold line looks like a heading, but the page has no heading here. It is absent from the heading list.' : 'Not a heading, whatever the size. Contributes nothing.';
      announced = fake ? '“' + esc(s) + '” as plain body text. Bold and size are not announced.' : 'Read as plain text. Most screen readers do not announce bold by default.';
    } else if (t === 'ol' || t === 'ul') {
      var n = el.querySelectorAll(':scope > li').length;
      outline = 'Not a heading. A real list: users can skip it or jump through it item by item.';
      announced = '“list, ' + n + ' items”, then each item in turn.';
    } else if (t === 'li') {
      var list = el.parentElement, kids = list.querySelectorAll(':scope > li'), idx = Array.prototype.indexOf.call(kids, el) + 1;
      outline = 'Not a heading. Item ' + idx + ' of ' + kids.length + ' in ' + (list.tagName === 'OL' ? 'a numbered' : 'a bulleted') + ' list.';
      announced = '“' + (list.tagName === 'OL' ? idx + ', ' : '') + esc(trunc(s, 80)) + '”';
    } else if (t === 'table') {
      var rc = el.querySelectorAll('tr').length, cc = el.querySelector('tr') ? el.querySelector('tr').children.length : 0, cap = el.querySelector('caption');
      outline = 'Not a heading. A real table: users can move by row and column and hear the headers for any cell.';
      announced = '“table' + (cap ? ', ' + esc(text(cap)) : '') + ', ' + rc + ' rows, ' + cc + ' columns”';
    } else if (t === 'caption') {
      outline = 'Not a heading. Names the table for everyone.';
      announced = '“caption, ' + esc(s) + '”';
    } else if (t === 'th') {
      outline = 'Not a heading. A ' + (el.getAttribute('scope') === 'row' ? 'row' : 'column') + ' header for this table.';
      announced = '“' + (el.getAttribute('scope') === 'row' ? 'row' : 'column') + ' header, ' + esc(s) + '”';
    } else if (t === 'td') {
      outline = 'Not a heading. A data cell.';
      announced = '“' + esc(s) + '”, with its row and column headers on request.';
    } else {
      outline = 'Not a heading.'; announced = esc(trunc(s, 80));
    }
    rows.push(['Outline', outline]); rows.push(['Announced as', announced]);
    return rows.map(function (r) { return '<div><b>' + r[0] + '</b>' + r[1] + '</div>'; }).join('');
  }

  function show(el) {
    if (current === el) return;
    hide();
    current = el; el.classList.add('xray-active');
    bubble.innerHTML = describe(el); bubble.hidden = false;
    el.setAttribute('aria-describedby', 'xray-bubble');
    var r = el.getBoundingClientRect();
    var left = Math.max(16, Math.min(r.left + window.scrollX, window.scrollX + document.documentElement.clientWidth - bubble.offsetWidth - 16));
    bubble.style.top = (r.bottom + window.scrollY + 10) + 'px';
    bubble.style.left = left + 'px';
  }
  function hide() {
    if (!current) return;
    current.classList.remove('xray-active'); current.removeAttribute('aria-describedby');
    current = null; bubble.hidden = true;
  }

  function toggle() {
    on = !on;
    btn.setAttribute('aria-pressed', String(on));
    btn.textContent = on ? 'Hide how this page is built' : 'Show how this page is built';
    hint.hidden = !on;
    document.body.classList.toggle('xray-on', on);
    if (on) {
      targets = Array.prototype.slice.call(main.querySelectorAll(SELECTOR)).filter(function (el) { return !btn.contains(el) && el !== hint; });
      targets.forEach(function (el) {
        var t = el.tagName.toLowerCase();
        el.setAttribute('data-xray', t === 'p' && text(el) === '' ? 'p (empty)' : t);
        if (t !== 'a' && t !== 'button') el.setAttribute('tabindex', '0');
        if (t === 'img') { var c = document.createElement('span'); c.className = 'xray-imgchip'; c.textContent = 'img'; el.parentNode.insertBefore(c, el); }
      });
    } else {
      hide();
      targets.forEach(function (el) { el.removeAttribute('data-xray'); if (!/^(A|BUTTON)$/.test(el.tagName)) el.removeAttribute('tabindex'); });
      Array.prototype.forEach.call(document.querySelectorAll('.xray-imgchip'), function (c) { c.parentNode.removeChild(c); });
      targets = [];
    }
  }

  btn.addEventListener('click', toggle);
  main.addEventListener('mouseover', function (e) {
    if (!on) return;
    var el = e.target.closest('[data-xray]');
    if (el) show(el);
  });
  main.addEventListener('focusin', function (e) {
    if (!on) return;
    var el = e.target.closest('[data-xray]');
    if (el) show(el);
  });
  document.addEventListener('mouseover', function (e) {
    if (on && current && !current.contains(e.target) && !bubble.contains(e.target) && !e.target.closest('[data-xray]') && document.activeElement !== current) hide();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  window.addEventListener('resize', function () { if (current) { var el = current; current = null; show(el); } });
})();
