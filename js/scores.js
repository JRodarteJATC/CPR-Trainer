// Scores engine: per-attempt student name + a local attempt log that
// accumulates EVERY user on this (shared) computer. Exposed as window.CPRScores.
window.CPRScores = (function () {
  const LOG_KEY = 'cpr_scores';
  let currentName = ''; // held only for the attempt in progress — never sticky

  function getName() { return currentName; }
  function setName(v) { currentName = (v || '').trim(); }

  function getLog() {
    try { return JSON.parse(localStorage.getItem(LOG_KEY) || '[]'); } catch (e) { return []; }
  }
  function saveLog(arr) {
    try { localStorage.setItem(LOG_KEY, JSON.stringify(arr)); } catch (e) {}
  }
  function clearLog() { saveLog([]); }

  // A valid name is at least 5 characters (spaces count).
  function isValidName(n) { return (n || '').trim().length >= 5; }

  // Record one attempt. entry = { module, score, percent, detail }
  // Only logs when a valid name (>= 5 chars) is set.
  function record(entry) {
    if (!isValidName(currentName)) return null;
    const rec = {
      timestamp: new Date().toISOString(),
      name: currentName || 'Anonymous',
      module: entry.module || '',
      score: entry.score || '',
      percent: entry.percent != null ? entry.percent : '',
      detail: entry.detail || ''
    };
    const log = getLog();
    log.push(rec);
    saveLog(log);
    return rec;
  }

  // Build a Start screen that asks for the student's name, then runs onStart(name).
  // container: element to render into; opts: { title, subtitle, button }
  function renderStartScreen(container, opts, onStart) {
    container.innerHTML = `
      <h2 class="module-title">${opts.title}</h2>
      <p class="module-sub">${opts.subtitle || ''}</p>
      <div class="card start-card">
        <label class="start-label" for="startName">Enter your name to begin</label>
        <input class="start-input" id="startName" type="text" placeholder="Full name" autocomplete="off" />
        <button class="btn start-btn" id="startGo" disabled>${opts.button || 'Start'}</button>
        <p class="cue start-hint" id="startHint">Name must be at least 5 characters to save your score.</p>
      </div>`;
    const input = container.querySelector('#startName');
    const go = container.querySelector('#startGo');
    const hint = container.querySelector('#startHint');
    const sync = () => {
      const ok = isValidName(input.value);
      go.disabled = !ok;
      hint.textContent = ok
        ? 'Your score will be saved under this name.'
        : 'Name must be at least 5 characters to save your score.';
    };
    sync();
    input.addEventListener('input', sync);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && isValidName(input.value)) go.click(); });
    go.addEventListener('click', () => {
      const name = input.value.trim();
      if (!isValidName(name)) return;
      setName(name);
      onStart(name);
    });
    setTimeout(() => input.focus(), 50);
  }

  return { getName, setName, getLog, clearLog, record, renderStartScreen, isValidName };
})();
