(function () {
  'use strict';
  // Content stays visible without JavaScript or IntersectionObserver.
  if (!('IntersectionObserver' in window)) return;
  var preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  var observer;
  var selector = 'main .section-intro, main .section-heading-row, main .join-callout, main .facility-figure, main .facility-gallery figure';
  function stop() {
    if (observer) observer.disconnect();
    document.querySelectorAll('.motion-enter').forEach(function (element) {
      element.classList.remove('motion-enter');
      element.style.removeProperty('--motion-delay');
    });
  }
  function start() {
    stop();
    if (preference.matches) return;
    observer = new IntersectionObserver(function (entries) {
      var order = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var element = entry.target;
        observer.unobserve(element);
        element.dataset.motionSeen = 'true';
        if (element.contains(document.activeElement)) return;
        element.style.setProperty('--motion-delay', Math.min(order++, 2) * 60 + 'ms');
        element.classList.add('motion-enter');
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(selector).forEach(function (element) {
      if (!element.dataset.motionSeen) observer.observe(element);
    });
  }
  document.addEventListener('animationend', function (event) {
    if (event.animationName !== 'systron-reveal') return;
    event.target.classList.remove('motion-enter');
    event.target.style.removeProperty('--motion-delay');
  });
  // Keyboard focus should never wait for an entrance effect.
  document.addEventListener('focusin', function (event) {
    var element = event.target.closest('.motion-enter');
    if (element) {
      element.classList.remove('motion-enter');
      element.style.removeProperty('--motion-delay');
    }
  });
  if (preference.addEventListener) preference.addEventListener('change', start);
  start();
})();
