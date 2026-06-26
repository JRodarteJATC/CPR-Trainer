// Timed branching scenario simulator.
window.ModuleScenarios = (function () {
  let view = null;
  let scenario = null;
  let stageIdx = 0;
  let correctCount = 0;
  let timerId = null;
  let stageAnswered = false;

  function clearTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function renderMenu() {
    clearTimer();
    view.innerHTML = `
      <h2 class="module-title">Scenario Simulator</h2>
      <p class="module-sub">Make decisions under time pressure. Pick a scenario to begin.</p>
      <div class="scn-list" id="scnList">
        ${window.SCENARIOS.map((s) => `
          <div class="card scn-card" data-id="${s.id}">
            <h3>${s.title}</h3>
            <p>${s.blurb}</p>
            <div class="scn-meta">${s.difficulty} · ${s.stages.length} decisions</div>
          </div>`).join('')}
      </div>`;
    view.querySelector('#scnList').addEventListener('click', (e) => {
      const card = e.target.closest('.scn-card');
      if (card) startScenario(card.dataset.id);
    });
  }

  function startScenario(id) {
    scenario = window.SCENARIOS.find((s) => s.id === id);
    stageIdx = 0;
    correctCount = 0;
    renderStage();
  }

  function renderStage() {
    clearTimer();
    stageAnswered = false;
    const stage = scenario.stages[stageIdx];
    const total = scenario.stages.length;
    view.innerHTML = `
      <h2 class="module-title">${scenario.title}</h2>
      <p class="module-sub">Decision ${stageIdx + 1} of ${total}</p>
      <div class="card scn-stage">
        ${stage.time ? `<div class="timer-bar"><div class="timer-fill" id="timerFill"></div></div>` : ''}
        <p class="narrative">${stage.narrative}</p>
        <div class="options" id="scnOpts">
          ${stage.options.map((o, i) => `<button class="opt" data-i="${i}">${o.text}</button>`).join('')}
        </div>
        <div id="scnFeedback"></div>
        <div class="quiz-footer">
          <button class="btn ghost" id="quitBtn">Quit</button>
          <button class="btn" id="scnNext" style="display:none;">Next</button>
        </div>
      </div>`;

    view.querySelector('#scnOpts').addEventListener('click', (e) => {
      const btn = e.target.closest('.opt');
      if (btn) choose(+btn.dataset.i);
    });
    view.querySelector('#quitBtn').addEventListener('click', renderMenu);
    view.querySelector('#scnNext').addEventListener('click', advance);

    if (stage.time) startTimer(stage.time);
  }

  function startTimer(seconds) {
    const fill = view.querySelector('#timerFill');
    const total = seconds * 1000;
    const startT = Date.now();
    timerId = setInterval(() => {
      const elapsed = Date.now() - startT;
      const remaining = Math.max(0, total - elapsed);
      fill.style.width = (remaining / total) * 100 + '%';
      if (remaining <= total * 0.25) fill.style.background = 'var(--warn)';
      if (remaining <= 0) {
        clearTimer();
        timeOut();
      }
    }, 100);
  }

  function lockOptions() {
    [...view.querySelectorAll('.opt')].forEach((b) => (b.disabled = true));
  }

  function choose(i) {
    if (stageAnswered) return;
    stageAnswered = true;
    clearTimer();
    const stage = scenario.stages[stageIdx];
    const opt = stage.options[i];
    const buttons = [...view.querySelectorAll('.opt')];
    lockOptions();
    const correctIdx = stage.options.findIndex((o) => o.correct);
    buttons[correctIdx].classList.add('correct');
    if (!opt.correct) buttons[i].classList.add('wrong');
    if (opt.correct) correctCount++;

    view.querySelector('#scnFeedback').innerHTML =
      `<div class="feedback ${opt.correct ? 'good' : 'bad'}">${opt.feedback}</div>`;
    const nextBtn = view.querySelector('#scnNext');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = stageIdx === scenario.stages.length - 1 ? 'See outcome' : 'Next';
  }

  function timeOut() {
    if (stageAnswered) return;
    stageAnswered = true;
    const stage = scenario.stages[stageIdx];
    const buttons = [...view.querySelectorAll('.opt')];
    lockOptions();
    const correctIdx = stage.options.findIndex((o) => o.correct);
    buttons[correctIdx].classList.add('correct');
    view.querySelector('#scnFeedback').innerHTML =
      `<div class="feedback bad"><strong>⏱ Time's up.</strong> In a real arrest, hesitation costs lives. The best action is highlighted above.</div>`;
    const nextBtn = view.querySelector('#scnNext');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = stageIdx === scenario.stages.length - 1 ? 'See outcome' : 'Next';
  }

  function advance() {
    if (stageIdx === scenario.stages.length - 1) return renderOutcome();
    stageIdx++;
    renderStage();
  }

  function renderOutcome() {
    clearTimer();
    const total = scenario.stages.length;
    const pct = Math.round((correctCount / total) * 100);
    const verdict = pct >= 90 ? "Outstanding response — you gave this person their best chance."
                  : pct >= 60 ? "Good effort. Tighten up the missed steps and run it again."
                  : "Review the Guide and try again — speed and the right sequence matter.";
    view.innerHTML = `
      <h2 class="module-title">${scenario.title} — Outcome</h2>
      <div class="card" style="text-align:center;">
        <div class="score-big">${correctCount} / ${total}</div>
        <div class="score-sub">${pct}% correct decisions · ${verdict}</div>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <button class="btn" id="again">Replay</button>
          <button class="btn secondary" id="menu">Other scenarios</button>
        </div>
      </div>`;
    view.querySelector('#again').addEventListener('click', () => startScenario(scenario.id));
    view.querySelector('#menu').addEventListener('click', renderMenu);
  }

  function render(v) {
    view = v;
    renderMenu();
  }

  function teardown() { clearTimer(); }

  return { render, teardown };
})();
