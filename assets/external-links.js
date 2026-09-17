(function () {
  'use strict';
  document.querySelectorAll('a[href]').forEach(function (link) {
    var url;
    try {
      url = new URL(link.getAttribute('href'), document.baseURI);
    } catch (error) {
      return;
    }
    if ((url.protocol === 'http:' || url.protocol === 'https:') && url.origin !== window.location.origin) {
      link.target = '_blank';
      link.relList.add('noopener', 'noreferrer');
    }
  });
})();
