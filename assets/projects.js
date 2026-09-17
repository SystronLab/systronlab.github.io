(function () {
  'use strict';
  var form = document.getElementById('projectsFilters');
  if (!form) return;
  var search = document.getElementById('projectsSearch');
  var topic = document.getElementById('projectsTopic');
  var items = Array.prototype.map.call(document.querySelectorAll('.project-result'), function (el) {
    return { el: el, text: el.dataset.search.toLowerCase(), tags: JSON.parse(el.dataset.tags) || [] };
  });
  function filter() {
    var terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    items.forEach(function (item) {
      var match = (!topic.value || item.tags.indexOf(topic.value) !== -1) && terms.every(function (term) { return item.text.indexOf(term) !== -1; });
      item.el.hidden = !match;
      if (match) shown++;
    });
    document.getElementById('projectsCount').textContent = shown + ' of ' + items.length + ' projects';
    document.getElementById('projectsEmpty').hidden = shown !== 0;
  }
  function reset() { search.value = ''; topic.value = ''; filter(); }
  form.addEventListener('submit', function (event) { event.preventDefault(); });
  form.addEventListener('reset', function (event) { event.preventDefault(); reset(); });
  search.addEventListener('input', filter);
  topic.addEventListener('change', filter);
  document.getElementById('projectsReset').addEventListener('click', function () { reset(); search.focus(); });
  form.hidden = false;
  filter();
})();
