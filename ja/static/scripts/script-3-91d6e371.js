document.addEventListener('click', function(e){
  var d = e.target && e.target.closest && e.target.closest('details.langswitch');
  document.querySelectorAll('details.langswitch[open]').forEach(function(x){ if (x !== d) x.removeAttribute('open'); });
  if (!d) return;
  var a = e.target.closest('.langswitch-link');
  if (a) { e.preventDefault(); e.stopImmediatePropagation(); window.location.href = a.href; }
}, true);