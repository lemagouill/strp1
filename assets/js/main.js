/* =========================================================
   Handover — site scripts
   Vanilla JS, no dependencies.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector('.burger');
  var mobileNav = document.querySelector('.mobile-nav');

  function closeMenu() {
    if (!burger || !mobileNav) return;
    burger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    document.body.classList.remove('is-locked');
  }

  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      mobileNav.classList.toggle('is-open', !open);
      document.body.classList.toggle('is-locked', !open);
    });

    mobileNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 960) closeMenu();
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector('.header');
  var stickyCta = document.querySelector('.sticky-cta');

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (stickyCta) stickyCta.classList.toggle('is-visible', y > 520);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Active nav link ---------- */
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .mobile-nav__link').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0];
    if (href && href === path) a.setAttribute('aria-current', 'page');
  });

  /* ---------- Reveal on scroll ---------- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      revealables.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
        io.observe(el);
      });
    } else {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    }
  }

  /* ---------- Current year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Listing category & metric filter ---------- */
  var chips = document.querySelectorAll('.chip');
  if (chips.length) {
    var cards = document.querySelectorAll('.listing');

    function applyFilter(want) {
      want = (want || 'all').trim().toLowerCase();
      chips.forEach(function (c) {
        var f = (c.dataset.filter || c.textContent).trim().toLowerCase();
        c.classList.toggle('chip--on', f === want || (want === 'all' && (f === 'all' || f === 'tous')));
      });
      var shown = 0;
      cards.forEach(function (card) {
        var tags = (card.dataset.tags || '').toLowerCase();
        var cardText = card.textContent.toLowerCase();
        var hit = want === 'all' || want === 'tous' || tags.indexOf(want) !== -1 || cardText.indexOf(want) !== -1;

        // Smart category match aliases
        if (!hit && want === 'stripe') hit = tags.indexOf('stripe') !== -1 || cardText.indexOf('stripe') !== -1;
        if (!hit && want === 'shopify') hit = tags.indexOf('shopify') !== -1 || cardText.indexOf('shopify') !== -1;
        if (!hit && (want === 'instant' || want === 'instant payout')) hit = tags.indexOf('instant') !== -1 || cardText.indexOf('instant') !== -1;
        if (!hit && (want === 't+1' || want === 'payout t+1')) hit = tags.indexOf('t+1') !== -1 || cardText.indexOf('t+1') !== -1 || cardText.indexOf('t+2') !== -1 || cardText.indexOf('t+3') !== -1;
        if (!hit && (want === '3 ans+' || want === '3+ yrs' || want === '3+ yrs old')) hit = tags.indexOf('3 ans+') !== -1 || cardText.indexOf('3+ yrs') !== -1 || cardText.indexOf('4 yrs') !== -1;
        if (!hit && want === 'uk llc') hit = tags.indexOf('uk llc') !== -1 || cardText.indexOf('uk llc') !== -1;
        if (!hit && want === 'us llc') hit = tags.indexOf('us llc') !== -1 || cardText.indexOf('us llc') !== -1;
        if (!hit && want === 'france') hit = tags.indexOf('france') !== -1 || cardText.indexOf('france') !== -1 || cardText.indexOf('french') !== -1;
        if (!hit && want === 'sold') hit = tags.indexOf('sold') !== -1 || cardText.indexOf('sold out') !== -1;

        card.hidden = !hit;
        if (hit) {
          shown++;
          card.classList.add('is-in');
        }
      });
      var empty = document.querySelector('.listings-empty');
      if (empty) empty.hidden = shown > 0;
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var want = chip.dataset.filter || chip.textContent;
        applyFilter(want);
      });
    });

    // Check URL parameters for direct filtering (e.g. browse.html?filter=stripe)
    var params = new URLSearchParams(window.location.search);
    var urlFilter = params.get('filter');
    if (urlFilter) {
      applyFilter(urlFilter);
    }
  }

  /* ---------- Forms ---------- */
  var form = document.querySelector('#contact-form');
  if (form) {
    var status = form.querySelector('.form-status');

    var setError = function (field, msg) {
      var wrap = field.closest('.field') || field.closest('.consent');
      if (!wrap) return;
      wrap.classList.add('field--error');
      var box = wrap.querySelector('.field__error');
      if (box && msg) box.textContent = msg;
    };
    var clearError = function (field) {
      var wrap = field.closest('.field') || field.closest('.consent');
      if (wrap) wrap.classList.remove('field--error');
    };

    form.querySelectorAll('input, select, textarea').forEach(function (el) {
      el.addEventListener('input', function () { clearError(el); });
      el.addEventListener('change', function () { clearError(el); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!status) return;
      status.className = 'form-status';

      var ok = true;
      var firstBad = null;

      form.querySelectorAll('[required]').forEach(function (el) {
        var valid = el.type === 'checkbox' ? el.checked : el.value.trim() !== '';
        if (valid && el.type === 'email') {
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim());
        }
        if (!valid) {
          ok = false;
          setError(el, null);
          if (!firstBad) firstBad = el;
        }
      });

      // Honeypot filled in => silently drop it.
      var honeypot = form.querySelector('.hp input');
      if (honeypot && honeypot.value) return;

      if (!ok) {
        if (firstBad) firstBad.focus();
        status.textContent = 'Please fix the fields highlighted in red.';
        status.classList.add('is-err');
        return;
      }

      var endpoint = form.getAttribute('action') || '';
      var btn = form.querySelector('button[type="submit"]');

      // No endpoint configured yet: fall back to a pre-filled email.
      if (!endpoint || endpoint.indexOf('REPLACE') !== -1) {
        var to = form.dataset.fallbackEmail || 'deals@example.com';
        var d = new FormData(form);
        var body = [];
        d.forEach(function (v, k) {
          if (k !== 'website' && String(v).trim()) body.push(k + ': ' + v);
        });
        window.location.href = 'mailto:' + to +
          '?subject=' + encodeURIComponent((d.get('side') || 'Valuation request') + ' — ' + (d.get('name') || '')) +
          '&body=' + encodeURIComponent(body.join('\n'));
        status.textContent = 'Your email client is opening with the request pre-filled.';
        status.classList.add('is-ok');
        return;
      }

      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = 'Sending…'; }

      fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (r) {
          if (!r.ok) throw new Error('http ' + r.status);
          form.reset();
          status.textContent = 'Got it. We\'ll get back to you within one business day.';
          status.classList.add('is-ok');
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'generate_lead', { form: 'contact' });
          }
        })
        .catch(function () {
          status.textContent = 'Sending failed. Email us directly at ' +
            (form.dataset.fallbackEmail || 'deals@example.com') + '.';
          status.classList.add('is-err');
        })
        .finally(function () {
      if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || 'Send request'; }
        });
    });
  }

  /* ---------- Lightbox Modal for Account Proof Images & Videos ---------- */
  var lightbox = document.getElementById('lightbox-modal');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var lightboxClose = document.getElementById('lightbox-close');
  var lightboxBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Account Audit Proof';
    if (lightboxCaption) lightboxCaption.textContent = alt || 'Audit Screenshot Proof';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lightboxImg) lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  document.addEventListener('click', function (e) {
    var img = e.target.closest('.listing__proof-img');
    if (img) {
      e.preventDefault();
      openLightbox(img.getAttribute('src'), img.getAttribute('alt'));
    }
  });
})();
