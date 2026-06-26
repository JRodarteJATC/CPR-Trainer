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
    order = shuffle(window.QUIZ_QUESTIONS.map((_, i) => i));
    idx = 0; score = 0; answered = false;
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const q = window.QUIZ_QUESTIONS[order[idx]];
    view.innerHTML = `
      <h2 class="module-title">Knowledge Quiz</h2>
      <p class="module-sub">Test your CPR knowledge. You'll get an explanation after each answer.</p>
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
    view.innerHTML = `
      <h2 class="module-title">Knowledge Quiz</h2>
      <div class="card" style="text-align:center;">
        <div class="score-big">${score} / ${order.length}</div>
        <div class="score-sub">${pct}% · ${msg}</div>
        <button class="btn" id="retry">Try again</button>
      </div>`;
    view.querySelector('#retry').addEventListener('click', start);
  }

  function render(v) {
    view = v;
    start();
  }

  return { render };
})();
