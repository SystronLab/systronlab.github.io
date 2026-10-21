(function () {
  'use strict';
  document.querySelectorAll('[data-youtube-id] .video-play').forEach(function (link) {
    link.addEventListener('click', function (event) {
      // Keep opening in a new tab available through modified clicks.
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      var container = link.parentElement;
      var iframe = document.createElement('iframe');
      iframe.title = link.dataset.videoTitle;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.src = 'https://www.youtube.com/embed/' + encodeURIComponent(container.dataset.youtubeId) + '?autoplay=1';
      container.replaceChildren(iframe);
      iframe.focus();
    });
  });
})();
