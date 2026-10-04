/* Draft previews never send production analytics. No query strings or affiliate links are changed. */
(function () {
  'use strict';
  var live = location.hostname === 'quietfieldliving.github.io' && location.pathname.indexOf('/japandi-home-decor/guides/stool-height-36-inch-counter/') === 0;
  if (!live) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-JQ7SQ8TM4Z');
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JQ7SQ8TM4Z';
  document.head.appendChild(script);
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-money-link]');
    if (!link || event.button !== 0) return;
    window.gtag('event', 'support_to_money', {
      support_page_id: 'stool-height-36-inch-counter',
      money_page_path: '/japandi-home-decor/japandi-bar-stools/',
      link_placement: link.dataset.placement,
      link_url: link.href,
      transport_type: 'beacon'
    });
  });
}());
