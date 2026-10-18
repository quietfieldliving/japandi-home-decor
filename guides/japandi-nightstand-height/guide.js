(function () {
  'use strict';
  var path = '/japandi-home-decor/guides/japandi-nightstand-height/';
  var live = location.hostname === 'quietfieldliving.github.io' &&
    (location.pathname === path || location.pathname === path + 'index.html');
  // QA can use ?qfl_preview=1 on this new page without sending production events.
  var analytics = live && new URLSearchParams(location.search).get('qfl_preview') !== '1';
  var pageId = 'japandi-nightstand-height';
  function track(name, params) {
    if (!analytics) return;
    window.gtag('event', name, Object.assign({ support_page_id: pageId }, params || {}));
  }
  if (analytics) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-JQ7SQ8TM4Z');
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JQ7SQ8TM4Z';
    document.head.appendChild(script);
  }
  var form = document.getElementById('fit-form');
  var result = document.getElementById('fit-result');
  function number(id) { return Number(document.getElementById(id).value); }
  function fmt(value) { return Number(value.toFixed(3)).toLocaleString('en-US', { maximumFractionDigits: 3 }); }
  function units(value) { return fmt(value) + (Math.abs(value) === 1 ? ' inch' : ' inches'); }
  function paragraph(text) {
    var p = document.createElement('p');
    p.textContent = text;
    result.appendChild(p);
  }
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var mattress = number('mattress');
    var height = number('table-height');
    var space = number('space');
    var gaps = number('gaps');
    var width = number('table-width');
    result.replaceChildren();
    result.hidden = false;
    if (![mattress, height, space, gaps, width].every(Number.isFinite) || gaps >= space) {
      paragraph('Reserved side gaps must total less than the available side space. Check your measurements.');
      return;
    }
    var delta = height - mattress;
    var allowance = space - gaps;
    var remaining = allowance - width;
    paragraph(delta === 0 ? 'The tabletop and mattress top are at the same stated height.' :
      'The tabletop is ' + units(Math.abs(delta)) + ' ' + (delta > 0 ? 'higher' : 'lower') + ' than the mattress top. Try that reach before choosing.');
    paragraph('Your body-width allowance is ' + units(allowance) + '.');
    if (remaining < 0) {
      paragraph('The table exceeds that allowance by ' + units(-remaining) + '. It does not meet your stated width limit.');
    } else if (remaining === 0) {
      paragraph('The table exactly fills that allowance, with no extra margin for measurement error or assembly variation. Confirm the full footprint before buying.');
    } else {
      paragraph('The table leaves ' + units(remaining) + ' inside that allowance. This is a width check, not a complete fit recommendation.');
    }
    paragraph('Depth, door swing or drawer extension, walking space, and comfortable reach still need checking.');
    track('nightstand_fit_check', { check_type: 'height_width' });
  });
  // Hide an old answer as soon as inputs change; it no longer describes the form.
  form.addEventListener('input', function () { result.hidden = true; });
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-money-link]');
    if (!link || event.button !== 0) return;
    track('support_to_money', {
      money_page_path: '/japandi-home-decor/japandi-nightstands/',
      link_placement: link.dataset.placement,
      link_url: link.href,
      transport_type: 'beacon'
    });
  });
  // A table view is exposure only. Source expansion and calculator use are separate.
  if (analytics && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) {
        track('nightstand_comparison_view');
        observer.disconnect();
      }
    }, { threshold: 0 });
    observer.observe(document.getElementById('comparison-table'));
  }
  document.addEventListener('click', function (event) {
    var source = event.target.closest('a[href^="#source-"]');
    if (source) track('nightstand_source_check', { source_id: source.getAttribute('href').slice(1) });
  });
}());
