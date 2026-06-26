// Simple hash-free router. Each module exposes window.Module<Name>.render(viewEl).
(function () {
  const view = document.getElementById('view');
  const tabs = document.getElementById('tabs');

  const routes = {
    metronome: () => window.ModuleMetronome,
    guide: () => window.ModuleGuide,
    quiz: () => window.ModuleQuiz,
    scenarios: () => window.ModuleScenarios,
  };

  let current = null;

  function go(route) {
    if (!routes[route]) route = 'metronome';
    // Let the outgoing module clean up (e.g. stop the metronome audio/timers).
    if (current && current.teardown) current.teardown();
    view.innerHTML = '';
    const mod = routes[route]();
    current = mod;
    mod.render(view);
    [...tabs.children].forEach((b) =>
      b.classList.toggle('active', b.dataset.route === route)
    );
  }

  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab');
    if (btn) go(btn.dataset.route);
  });

  go('metronome');
})();
