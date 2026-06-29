// Compression metronome + Tap Practice drill.
// One combined Start: click it, a name popup appears, then the pacer beat plays
// and the tap drill is armed. Complete two 30:2 sets and a results popup shows
// the score and breakdown.
window.ModuleMetronome = (function () {
  let audioCtx = null;
  let timer = null;
  let running = false;     // pacer audio running
  let bpm = 110;
  let beatCount = 0;
  let els = {};

  // ---- Drill state ----
  let tapTimes = [];
  let practiceComps = 0;
  let practiceBreaths = 0;
  let totalComps = 0;
  let totalBreaths = 0;
  let scoredComps = 0;
  let inZoneComps = 0;
  let totalSets = 0;
  let drillStart = 0;
  let lastCompTime = 0;
  let drillComplete = false;
  let armed = false;       // taps only count after Start
  let recordScore = true;  // whether this drill is saved to the Scores log
  const DRILL_SETS = 2;
  const PACE_WINDOW = 60000;
  let keyHandler = null;

  function ensureAudio() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
  }

  function click(accent) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.value = accent ? 1500 : 1000;
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(accent ? 0.5 : 0.32, audioCtx.currentTime + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.06);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.07);
  }

  // Pacer beat (audio + visual guide).
  function tick() {
    beatCount++;
    click(beatCount % 30 === 0);
    els.circle.classList.add('beat');
    setTimeout(() => els.circle.classList.remove('beat'), 90);
    els.count.textContent = '♪ tap to the beat';
    if (beatCount >= 32) beatCount = 0;
  }

  function startPacer() {
    if (running) return;
    ensureAudio();
    running = true;
    beatCount = 0;
    timer = setInterval(tick, 60000 / bpm);
  }
  function stopPacer() {
    running = false;
    clearInterval(timer);
    timer = null;
    beatCount = 0;
    if (els.count) els.count.textContent = 'Ready';
  }

  function setBpm(v) {
    bpm = v;
    els.rateVal.textContent = `${v} BPM`;
    if (running) { clearInterval(timer); timer = setInterval(tick, 60000 / bpm); }
  }

  function render(view) {
    view.innerHTML = `
      <h2 class="module-title">Compression Metronome &amp; Drill</h2>
      <p class="module-sub">Press <strong>Start</strong>, enter your name, then tap along to the beat.</p>
      <div class="card metro-wrap">
        <div class="metro-circle" id="metroCircle">
          <div class="big" id="metroBpm">110</div>
          <div class="small">push to the beat</div>
        </div>
        <div class="count-pill" id="metroCount">Ready</div>
        <div class="rate-row" style="margin-top:22px;">
          <span class="rate-val" id="rateVal">110 BPM</span>
          <input type="range" id="rateRange" min="100" max="120" step="1" value="110" />
        </div>
        <div class="controls">
          <button class="btn ghost" id="metroReset">Reset to 110</button>
        </div>
        <p class="cue">
          Target: <strong>100–120/min</strong> · depth <strong>≥ 2 in (5 cm)</strong> · allow <strong>full recoil</strong>.
          A beat prompts <strong>2 breaths</strong> after every 30 compressions.
        </p>
      </div>

      <div class="card metro-wrap" id="practiceCard">
        <h3 class="practice-head">🎯 Tap Practice Drill</h3>
        <p class="cue" style="margin:0 0 18px;">
          Tap the <strong>Compression</strong> and <strong>Breath</strong> buttons below
          (or press <strong>Spacebar</strong> / <strong>B</strong> on a keyboard).
          Do 30 compressions, then 2 breaths. Complete <strong>2 full sets within one minute</strong>,
          then your score &amp; breakdown pop up.
        </p>
        <div class="controls" style="margin-bottom:20px;">
          <button class="btn start-btn" id="drillToggle" style="max-width:320px;">▶ Start</button>
        </div>
        <div class="kbd-row" id="kbdRow" style="display:none;">
          <button class="key-btn" id="compKey"><span class="key-cap">Space</span><span class="key-lab">Compression</span></button>
          <button class="key-btn" id="breathKey"><span class="key-cap">B</span><span class="key-lab">Breath</span></button>
        </div>
        <div class="practice-stats">
          <div class="pstat"><div class="pstat-num" id="liveRate">—</div><div class="pstat-lab">measured BPM</div></div>
          <div class="pstat"><div class="pstat-num" id="compNum">0<span class="pstat-of">/30</span></div><div class="pstat-lab">compressions</div></div>
          <div class="pstat"><div class="pstat-num" id="breathNum">0<span class="pstat-of">/2</span></div><div class="pstat-lab">breaths</div></div>
          <div class="pstat"><div class="pstat-num" id="accuracyNum">—<span class="pstat-of">%</span></div><div class="pstat-lab">in-zone score</div></div>
          <div class="pstat"><div class="pstat-num" id="setsNum">0<span class="pstat-of">/2</span></div><div class="pstat-lab">sets done</div></div>
        </div>
        <div class="rate-feedback" id="rateFeedback">Click <strong>Start</strong> to begin.</div>
        <p class="cue" id="practiceTotals">Drill: 0 compressions · 0 breaths · 0 / 2 sets</p>
      </div>`;

    els = {
      circle: view.querySelector('#metroCircle'),
      bpmLabel: view.querySelector('#metroBpm'),
      count: view.querySelector('#metroCount'),
      rateVal: view.querySelector('#rateVal'),
      range: view.querySelector('#rateRange'),
      resetBtn: view.querySelector('#metroReset'),
      drillToggle: view.querySelector('#drillToggle'),
      kbdRow: view.querySelector('#kbdRow'),
      compKey: view.querySelector('#compKey'),
      breathKey: view.querySelector('#breathKey'),
      liveRate: view.querySelector('#liveRate'),
      compNum: view.querySelector('#compNum'),
      breathNum: view.querySelector('#breathNum'),
      accuracyNum: view.querySelector('#accuracyNum'),
      setsNum: view.querySelector('#setsNum'),
      rateFeedback: view.querySelector('#rateFeedback'),
      practiceTotals: view.querySelector('#practiceTotals'),
    };

    els.range.addEventListener('input', (e) => {
      const v = +e.target.value;
      els.bpmLabel.textContent = v;
      setBpm(v);
    });
    els.resetBtn.addEventListener('click', () => {
      els.range.value = 110;
      els.bpmLabel.textContent = 110;
      setBpm(110);
    });

    els.drillToggle.addEventListener('click', onToggle);
    els.compKey.addEventListener('click', registerCompression);
    els.breathKey.addEventListener('click', registerBreath);

    keyHandler = (e) => {
      if (e.repeat) return;
      // Don't hijack keys while typing in a text field or while a popup is open.
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if (document.querySelector('.modal-overlay')) return;
      if (e.code === 'Space') { e.preventDefault(); registerCompression(); }
      else if (e.key === 'b' || e.key === 'B') { registerBreath(); }
    };
    document.addEventListener('keydown', keyHandler);
  }

  // ---- Single Start button: name popup, then begin ----
  function onToggle() {
    if (armed) { endDrill(); return; }
    showNamePopup((name, doRecord) => beginDrill(name, doRecord));
  }

  function showNamePopup(onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-card name-popup">
        <div class="modal-logo"></div>
        <button class="modal-close" aria-label="Close">✕</button>
        <div class="modal-emoji">👤</div>
        <h2 class="modal-title">Start drill</h2>
        <p class="modal-grade">Enter your name to save your score, or just practice.</p>
        <input class="start-input" id="popName" type="text" placeholder="Full name" autocomplete="off" />
        <p class="cue" id="popHint" style="margin:-6px 0 14px;">Name must be at least 5 characters (including spaces) to save your score.</p>
        <button class="btn modal-again" id="popBegin" disabled>Begin Drill (saves score)</button>
        <button class="btn ghost" id="popPractice" style="width:100%;margin-top:10px;">Practice (no save)</button>
      </div>`;
    document.body.appendChild(overlay);
    const input = overlay.querySelector('#popName');
    const begin = overlay.querySelector('#popBegin');
    const practice = overlay.querySelector('#popPractice');
    const hint = overlay.querySelector('#popHint');
    const close = () => overlay.remove();
    const validName = () =>
      window.CPRScores ? window.CPRScores.isValidName(input.value) : input.value.trim().length >= 5;
    const sync = () => {
      begin.disabled = !validName();
      hint.textContent = validName()
        ? 'Your score will be saved under this name.'
        : 'Name must be at least 5 characters (including spaces) to save your score.';
    };
    input.addEventListener('input', sync);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && validName()) begin.click(); });
    sync();
    begin.addEventListener('click', () => {
      if (!validName()) return;
      close();
      onConfirm(input.value.trim(), true); // save score
    });
    practice.addEventListener('click', () => {
      close();
      onConfirm(input.value.trim() || 'Anonymous', false); // no save
    });
    overlay.querySelector('.modal-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    setTimeout(() => input.focus(), 50);
  }

  function beginDrill(name, doRecord) {
    recordScore = doRecord !== false;
    if (window.CPRScores) window.CPRScores.setName(name);
    resetCounters();
    armed = true;
    drillComplete = false;
    // Pacer does NOT start yet — it begins on the first Spacebar tap.
    els.kbdRow.style.display = '';
    els.drillToggle.textContent = '■ Stop';
    els.drillToggle.classList.add('secondary');
    els.rateFeedback.className = 'rate-feedback';
    els.rateFeedback.innerHTML = recordScore
      ? `Go, <strong>${name}</strong>! Tap <strong>Compression</strong> (or Spacebar) to start the beat.`
      : `Practice mode (not saved) — tap <strong>Compression</strong> (or Spacebar) to start.`;
  }

  function endDrill() {
    stopPacer();
    resetPractice();
  }

  // ---- Tap logic ----
  function flashKey(btn) {
    btn.classList.add('hit');
    setTimeout(() => btn.classList.remove('hit'), 110);
  }

  function registerCompression() {
    if (!armed || drillComplete) return;
    const now = performance.now();
    if (!drillStart) {
      drillStart = now;
      startPacer(); // first tap kicks off the guide beat
    }
    if (tapTimes.length >= 1) {
      const interval = now - tapTimes[tapTimes.length - 1];
      const instRate = 60000 / interval;
      scoredComps++;
      if (instRate >= 100 && instRate <= 120) inZoneComps++;
      updateAccuracy();
    }
    lastCompTime = now;
    tapTimes.push(now);
    if (tapTimes.length > 6) tapTimes.shift();
    practiceComps++;
    totalComps++;
    flashKey(els.compKey);
    els.circle.classList.add('beat');
    setTimeout(() => els.circle.classList.remove('beat'), 90);

    if (practiceComps >= 30) {
      els.compNum.innerHTML = `30<span class="pstat-of">/30</span>`;
      els.rateFeedback.className = 'rate-feedback';
      els.rateFeedback.innerHTML = '🫁 <strong>Now give 2 breaths</strong> — tap <strong>Breath</strong> twice (or B).';
    } else {
      els.compNum.innerHTML = `${practiceComps}<span class="pstat-of">/30</span>`;
    }
    updateRate();
    updateTotals();
  }

  function registerBreath() {
    if (!armed || drillComplete) return;
    flashKey(els.breathKey);
    if (practiceComps >= 30) {
      totalBreaths++;
      practiceBreaths++;
      els.breathNum.innerHTML = `${Math.min(practiceBreaths, 2)}<span class="pstat-of">/2</span>`;
      if (practiceBreaths >= 2) {
        totalSets++;
        els.setsNum.innerHTML = `${totalSets}<span class="pstat-of">/2</span>`;
        if (totalSets >= DRILL_SETS) { finishDrill(); return; }
        setTimeout(() => {
          practiceComps = 0;
          practiceBreaths = 0;
          tapTimes = [];
          els.compNum.innerHTML = `0<span class="pstat-of">/30</span>`;
          els.breathNum.innerHTML = `0<span class="pstat-of">/2</span>`;
          els.rateFeedback.className = 'rate-feedback good';
          els.rateFeedback.innerHTML = '✅ <strong>Set 1 complete!</strong> One more — resume compressions.';
        }, 200);
      }
      updateTotals();
    }
  }

  function updateRate() {
    if (tapTimes.length < 2) { els.liveRate.textContent = '—'; return; }
    const intervals = [];
    for (let i = 1; i < tapTimes.length; i++) intervals.push(tapTimes[i] - tapTimes[i - 1]);
    const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const rate = Math.round(60000 / avg);
    els.liveRate.textContent = rate;
    const fb = els.rateFeedback;
    if (practiceComps >= 30) return;
    if (rate < 100) { fb.className = 'rate-feedback warn'; fb.innerHTML = `⬆️ <strong>Push faster</strong> — ${rate}/min.`; }
    else if (rate > 120) { fb.className = 'rate-feedback warn'; fb.innerHTML = `⬇️ <strong>Ease off</strong> — ${rate}/min.`; }
    else { fb.className = 'rate-feedback good'; fb.innerHTML = `👍 <strong>Great pace</strong> — ${rate}/min.`; }
  }

  function updateAccuracy() {
    if (scoredComps === 0) { els.accuracyNum.innerHTML = `—<span class="pstat-of">%</span>`; return; }
    const pct = Math.round((inZoneComps / scoredComps) * 100);
    els.accuracyNum.innerHTML = `${pct}<span class="pstat-of">%</span>`;
    els.accuracyNum.style.color = pct >= 80 ? 'var(--good)' : pct >= 50 ? 'var(--warn)' : 'var(--accent-2)';
  }

  function scoreGrade(pct) {
    if (pct >= 90) return 'Excellent';
    if (pct >= 80) return 'Great';
    if (pct >= 60) return 'Good';
    if (pct >= 40) return 'Keep practicing';
    return 'Work on your pace';
  }

  function updateTotals() {
    els.practiceTotals.textContent =
      `Drill: ${totalComps} compressions · ${totalBreaths} breaths · ${totalSets} / ${DRILL_SETS} sets`;
  }

  // ---- Results ----
  function finishDrill() {
    drillComplete = true;
    armed = false;
    stopPacer();
    const elapsedMs = lastCompTime - drillStart;
    const pct = scoredComps ? Math.round((inZoneComps / scoredComps) * 100) : 0;
    const grade = scoreGrade(pct);
    const avgRate = Math.round((scoredComps) / (elapsedMs / 60000));
    const totalElapsed = (performance.now() - drillStart) / 1000;
    const onPace = (performance.now() - drillStart) <= PACE_WINDOW;

    if (recordScore && window.CPRScores) {
      window.CPRScores.record({
        module: 'Compression Drill',
        score: `${pct}% in-zone`,
        percent: pct,
        detail: `2 sets in ${totalElapsed.toFixed(1)}s · avg ${isFinite(avgRate) ? avgRate : '—'}/min · ` +
                `${inZoneComps}/${scoredComps} in zone · ${onPace ? 'on pace' : 'too slow'}`
      });
    }
    showResults({ pct, grade, avgRate, totalElapsed, onPace });
  }

  function showResults(r) {
    const scoreColor = r.pct >= 80 ? 'var(--good)' : r.pct >= 50 ? 'var(--warn)' : 'var(--accent-2)';
    const who = (window.CPRScores && window.CPRScores.getName()) || 'Anonymous';
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-card">
        <div class="modal-logo"></div>
        <button class="modal-close" aria-label="Close">✕</button>
        <div class="modal-emoji">${r.pct >= 80 ? '🏆' : r.pct >= 50 ? '💪' : '🚑'}</div>
        <h2 class="modal-title">Drill Complete!</h2>
        <div class="modal-grade">${who}</div>
        <div class="modal-score" style="color:${scoreColor}">${r.pct}<span>%</span></div>
        <div class="modal-grade">${r.grade} · in-zone accuracy</div>
        <div class="modal-breakdown">
          <div class="brk-row"><span>Sets completed</span><strong>${totalSets} / ${DRILL_SETS}</strong></div>
          <div class="brk-row"><span>Time for 2 sets</span><strong>${r.totalElapsed.toFixed(1)}s</strong></div>
          <div class="brk-row"><span>2 sets within 1 min?</span><strong style="color:${r.onPace ? 'var(--good)' : 'var(--accent-2)'}">${r.onPace ? '✅ Yes — on pace' : '❌ No — too slow'}</strong></div>
          <div class="brk-row"><span>Average rate</span><strong>${isFinite(r.avgRate) ? r.avgRate : '—'} / min</strong></div>
          <div class="brk-row"><span>Compressions in zone</span><strong>${inZoneComps} / ${scoredComps}</strong></div>
          <div class="brk-row"><span>Total compressions</span><strong>${totalComps}</strong></div>
          <div class="brk-row"><span>Total breaths</span><strong>${totalBreaths}</strong></div>
        </div>
        <p class="cue" style="margin:-6px 0 14px;">${recordScore ? '📋 Saved to Scores for <strong>' + who + '</strong>.' : '🔒 Practice only — not saved.'}</p>
        <button class="btn modal-again">Done</button>
      </div>`;
    document.body.appendChild(overlay);
    const close = () => { overlay.remove(); resetPractice(); };
    overlay.querySelector('.modal-close').addEventListener('click', close);
    overlay.querySelector('.modal-again').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  }

  function removeModal() {
    document.querySelectorAll('.modal-overlay').forEach((m) => m.remove());
  }

  function resetCounters() {
    tapTimes = [];
    practiceComps = 0; practiceBreaths = 0;
    totalComps = 0; totalBreaths = 0;
    scoredComps = 0; inZoneComps = 0; totalSets = 0;
    drillStart = 0; lastCompTime = 0;
  }

  function resetPractice() {
    resetCounters();
    drillComplete = false;
    armed = false;
    if (els.liveRate) {
      els.liveRate.textContent = '—';
      els.compNum.innerHTML = `0<span class="pstat-of">/30</span>`;
      els.breathNum.innerHTML = `0<span class="pstat-of">/2</span>`;
      els.accuracyNum.innerHTML = `—<span class="pstat-of">%</span>`;
      els.accuracyNum.style.color = '';
      els.setsNum.innerHTML = `0<span class="pstat-of">/2</span>`;
      els.rateFeedback.className = 'rate-feedback';
      els.rateFeedback.innerHTML = 'Click <strong>Start</strong> to begin.';
      els.kbdRow.style.display = 'none';
      els.drillToggle.textContent = '▶ Start';
      els.drillToggle.classList.remove('secondary');
      updateTotals();
    }
  }

  function teardown() {
    stopPacer();
    removeModal();
    if (keyHandler) { document.removeEventListener('keydown', keyHandler); keyHandler = null; }
  }

  return { render, teardown };
})();
