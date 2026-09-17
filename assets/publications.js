(function () {
  'use strict';
  var form = document.querySelector('.publication-filters');
  if (!form) return;
  var search = document.getElementById('publicationsSearch');
  var year = document.getElementById('publicationsYear');
  var items = Array.prototype.slice.call(document.querySelectorAll('.publication-item'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('.publication-year'));
  var count = document.getElementById('publicationsCount');
  var empty = document.getElementById('publicationsEmpty');
  var indexed = items.map(function (item) {
    return { element: item, text: item.dataset.search.toLowerCase(), year: item.dataset.year };
  });
  function applyFilters() {
    var terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    indexed.forEach(function (item) {
      var matches = (!year.value || year.value === item.year) && terms.every(function (term) { return item.text.indexOf(term) !== -1; });
      item.element.hidden = !matches;
      if (matches) shown++;
    });
    groups.forEach(function (group) { group.hidden = !group.querySelector('.publication-item:not([hidden])'); });
    count.textContent = shown + ' of ' + items.length + ' publications';
    empty.hidden = shown !== 0;
  }
  function reset() {
    search.value = '';
    year.value = '';
    applyFilters();
  }
  search.addEventListener('input', applyFilters);
  year.addEventListener('change', applyFilters);
  form.addEventListener('reset', function (event) { event.preventDefault(); reset(); });
  document.getElementById('publicationsReset').addEventListener('click', function () { reset(); search.focus(); });
  form.hidden = false;
  applyFilters();
})();
