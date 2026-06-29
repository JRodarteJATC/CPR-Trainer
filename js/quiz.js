// Knowledge quiz with scoring + explanations.
window.ModuleQuiz = (function () {
  let order = [];
  let idx = 0;
  let score = 0;
  let answered = false;
  let view = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function start() {
    const perRound = window.QUIZ_PER_ROUND || window.QUIZ_QUESTIONS.length;
    order = shuffle(window.QUIZ_QUESTIONS.map((_, i) => i)).slice(0, perRound);
    idx = 0; score = 0; answered = false;
    renderQuestion();
  }

  // Ask for the name first, then start.
  function startGate() {
    if (!window.CPRScores) return start();
    window.CPRScores.renderStartScreen(view, {
      title: 'Knowledge Quiz',
      subtitle: `${window.QUIZ_QUESTIONS.length} questions in random order — multiple choice, true/false, and "all of the above."`,
      button: 'Start Quiz'
    }, start);
  }

  function renderQuestion() {
    answered = false;
    const q = window.QUIZ_QUESTIONS[order[idx]];
    view.innerHTML = `
      <h2 class="module-title">Knowledge Quiz</h2>
      <p class="module-sub">All ${window.QUIZ_QUESTIONS.length} questions in random order. You'll get an explanation after each answer.</p>
      <div class="card">
        <div class="q-progress">Question ${idx + 1} of ${order.length} · Score: ${score}</div>
        <div class="q-text">${q.q}</div>
        <div class="options" id="opts">
          ${q.options.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join('')}
        </div>
        <div id="explainSlot"></div>
        <div class="quiz-footer">
          <span></span>
          <button class="btn" id="nextBtn" style="display:none;">Next</button>
        </div>
      </div>`;

    const optsEl = view.querySelector('#opts');
    optsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.opt');
      if (btn) choose(+btn.dataset.i);
    });
    view.querySelector('#nextBtn').addEventListener('click', next);
  }

  function choose(i) {
    if (answered) return;
    answered = true;
    const q = window.QUIZ_QUESTIONS[order[idx]];
    const buttons = [...view.querySelectorAll('.opt')];
    buttons.forEach((b) => (b.disabled = true));
    buttons[q.answer].classList.add('correct');
    if (i === q.answer) {
      score++;
    } else {
      buttons[i].classList.add('wrong');
    }
    view.querySelector('#explainSlot').innerHTML =
      `<div class="explain"><strong>${i === q.answer ? '✅ Correct.' : '❌ Not quite.'}</strong> ${q.explain}</div>`;
    const nextBtn = view.querySelector('#nextBtn');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = idx === order.length - 1 ? 'See results' : 'Next';
  }

  function next() {
    if (idx === order.length - 1) return renderResults();
    idx++;
    renderQuestion();
  }

  function renderResults() {
    const pct = Math.round((score / order.length) * 100);
    let msg = pct >= 90 ? "Excellent — you know this cold."
            : pct >= 70 ? "Solid. Review the misses and try again."
            : "Keep practicing — revisit the Guide tab.";

    // Log the attempt under the current student's name.
    if (window.CPRScores) {
      window.CPRScores.record({
        module: 'Knowledge Quiz',
        score: `${score} / ${order.length}`,
        percent: pct,
        detail: `${score} correct of ${order.length}`
      });
    }
    const saved = window.CPRScores
      ? `<div class="cue" style="margin-top:6px;">📋 Saved for <strong>${window.CPRScores.getName() || 'Anonymous'}</strong> — see the Scores tab.</div>`
      : '';

    view.innerHTML = `
      <h2 class="module-title">Knowledge Quiz</h2>
      <div class="card" style="text-align:center;">
        <div class="score-big">${score} / ${order.length}</div>
        <div class="score-sub">${pct}% · ${msg}</div>
        ${saved}
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:14px;">
          <button class="btn" id="retry">Same student — retry</button>
          <button class="btn secondary" id="newstudent">New student</button>
        </div>
      </div>`;
    view.querySelector('#retry').addEventListener('click', start);
    view.querySelector('#newstudent').addEventListener('click', startGate);
  }

  function render(v) {
    view = v;
    startGate();
  }

  return { render };
})();
