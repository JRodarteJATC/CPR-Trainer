// Compression metronome: Web Audio click + visual pulse + 30:2 cycle counter.
window.ModuleMetronome = (function () {
  let audioCtx = null;
  let timer = null;
  let running = false;
  let bpm = 110;
  let beatCount = 0;       // compressions in current cycle (for 30:2)
  let els = {};

  // ---- Tap-practice state ----
  let practiceOn = false;
  let tapTimes = [];       // timestamps of recent compression taps
  let practiceComps = 0;   // compressions in current 30:2 set
  let practiceBreaths = 0; // breaths given in current breath window
  let totalComps = 0;      // running total this session
  let totalBreaths = 0;
  let scoredComps = 0;     // compressions with a measurable rate (2nd tap onward)
  let inZoneComps = 0;     // those that landed in the 100–120 target zone
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

  function tick() {
    beatCount++;
    const inBreathWindow = beatCount > 30;
    // Accent every 30th compression (end of a set).
    click(beatCount % 30 === 0);
    els.circle.classList.add('beat');
    setTimeout(() => els.circle.classList.remove('beat'), 90);

    els.count.textContent = inBreathWindow
      ? '🫁 2 rescue breaths'
      : `Compression ${beatCount} / 30`;

    if (beatCount >= 32) beatCount = 0; // 30 compressions + 2 "breath" beats, then reset
  }

  function start() {
    if (running) return;
    ensureAudio();
    running = true;
    beatCount = 0;
    const interval = 60000 / bpm;
    tick();
    timer = setInterval(tick, interval);
    els.startBtn.textContent = 'Stop';
    els.startBtn.classList.remove('secondary');
  }

  function stop() {
    running = false;
    clearInterval(timer);
    timer = null;
    beatCount = 0;
    if (els.count) els.count.textContent = 'Ready';
    if (els.startBtn) {
      els.startBtn.textContent = 'Start';
      els.startBtn.classList.add('secondary');
    }
  }

  function toggle() { running ? stop() : start(); }

  function setBpm(v) {
    bpm = v;
    els.rateVal.textContent = `${v} BPM`;
    if (running) { // restart timer at new tempo without resetting the count display abruptly
      clearInterval(timer);
      timer = setInterval(tick, 60000 / bpm);
    }
  }

  function render(view) {
    view.innerHTML = `
      <h2 class="module-title">Compression Metronome</h2>
      <p class="module-sub">Practice the rhythm of high-quality chest compressions. Push hard and fast in time with the beat.</p>
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
          <button class="btn secondary" id="metroStart">Start</button>
          <button class="btn ghost" id="metroReset">Reset to 110</button>
        </div>
        <p class="cue">
          Target: <strong>100–120/min</strong> · depth <strong>≥ 2 in (5 cm)</strong> · allow <strong>full recoil</strong>.
          The beat accents and prompts <strong>2 breaths</strong> after every 30 compressions.
        </p>
      </div>

      <div class="card metro-wrap" id="practiceCard">
        <h3 style="margin:0 0 4px;">Tap Practice</h3>
        <p class="cue" style="margin:0 0 16px;">
          Tap <strong>Spacebar</strong> for each compression and <strong>B</strong> for each breath.
          Do 30 compressions, then 2 breaths. We'll measure your rate live.
        </p>
        <div class="kbd-row">
          <button class="key-btn" id="compKey"><span class="key-cap">Space</span><span class="key-lab">Compression</span></button>
          <button class="key-btn" id="breathKey"><span class="key-cap">B</span><span class="key-lab">Breath</span></button>
        </div>
        <div class="practice-stats">
          <div class="pstat"><div class="pstat-num" id="liveRate">—</div><div class="pstat-lab">measured BPM</div></div>
          <div class="pstat"><div class="pstat-num" id="compNum">0<span class="pstat-of">/30</span></div><div class="pstat-lab">compressions</div></div>
          <div class="pstat"><div class="pstat-num" id="breathNum">0<span class="pstat-of">/2</span></div><div class="pstat-lab">breaths</div></div>
          <div class="pstat"><div class="pstat-num" id="accuracyNum">—<span class="pstat-of">%</span></div><div class="pstat-lab">in-zone score</div></div>
        </div>
        <div class="rate-feedback" id="rateFeedback">Tap Spacebar to begin.</div>
        <div class="controls" style="margin-top:6px;">
          <button class="btn ghost" id="practiceReset">Reset practice</button>
        </div>
        <p class="cue" id="practiceTotals">Session: 0 compressions · 0 breaths</p>
      </div>`;

    els = {
      circle: view.querySelector('#metroCircle'),
      bpmLabel: view.querySelector('#metroBpm'),
      count: view.querySelector('#metroCount'),
      rateVal: view.querySelector('#rateVal'),
      range: view.querySelector('#rateRange'),
      startBtn: view.querySelector('#metroStart'),
      resetBtn: view.querySelector('#metroReset'),
      // practice refs
      compKey: view.querySelector('#compKey'),
      breathKey: view.querySelector('#breathKey'),
      liveRate: view.querySelector('#liveRate'),
      compNum: view.querySelector('#compNum'),
      breathNum: view.querySelector('#breathNum'),
      accuracyNum: view.querySelector('#accuracyNum'),
      rateFeedback: view.querySelector('#rateFeedback'),
      practiceReset: view.querySelector('#practiceReset'),
      practiceTotals: view.querySelector('#practiceTotals'),
    };

    els.startBtn.addEventListener('click', toggle);
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

    // The on-screen keys also work as click/tap targets (mobile-friendly).
    els.compKey.addEventListener('click', registerCompression);
    els.breathKey.addEventListener('click', registerBreath);
    els.practiceReset.addEventListener('click', resetPractice);

    // Global key handling for the practice trainer.
    keyHandler = (e) => {
      if (e.repeat) return; // ignore auto-repeat from a held key
      if (e.code === 'Space') {
        e.preventDefault(); // don't scroll the page
        registerCompression();
      } else if (e.key === 'b' || e.key === 'B') {
        registerBreath();
      }
    };
    document.addEventListener('keydown', keyHandler);
  }

  // ---- Tap-practice logic ----
  function flashKey(btn) {
    btn.classList.add('hit');
    setTimeout(() => btn.classList.remove('hit'), 110);
  }

  function registerCompression() {
    practiceOn = true;
    const now = performance.now();
    // Score this tap against the target zone using the interval since the last tap.
    if (tapTimes.length >= 1) {
      const interval = now - tapTimes[tapTimes.length - 1];
      const instRate = 60000 / interval;
      scoredComps++;
      if (instRate >= 100 && instRate <= 120) inZoneComps++;
      updateAccuracy();
    }
    tapTimes.push(now);
    if (tapTimes.length > 6) tapTimes.shift(); // keep recent taps only
    practiceComps++;
    totalComps++;
    flashKey(els.compKey);
    click(practiceComps % 30 === 0);
    els.circle.classList.add('beat');
    setTimeout(() => els.circle.classList.remove('beat'), 90);

    if (practiceComps >= 30) {
      els.compNum.innerHTML = `30<span class="pstat-of">/30</span>`;
      els.rateFeedback.className = 'rate-feedback';
      els.rateFeedback.innerHTML = '🫁 <strong>Now give 2 breaths</strong> — press <strong>B</strong> twice.';
    } else {
      els.compNum.innerHTML = `${practiceComps}<span class="pstat-of">/30</span>`;
    }
    updateRate();
    updateTotals();
  }

  function registerBreath() {
    practiceOn = true;
    totalBreaths++;
    flashKey(els.breathKey);
    // Breaths only "count" toward the cycle once 30 compressions are done.
    if (practiceComps >= 30) {
      practiceBreaths++;
      els.breathNum.innerHTML = `${Math.min(practiceBreaths, 2)}<span class="pstat-of">/2</span>`;
      if (practiceBreaths >= 2) {
        // Cycle complete — reset for the next round of 30:2.
        setTimeout(() => {
          practiceComps = 0;
          practiceBreaths = 0;
          tapTimes = [];
          els.compNum.innerHTML = `0<span class="pstat-of">/30</span>`;
          els.breathNum.innerHTML = `0<span class="pstat-of">/2</span>`;
          els.rateFeedback.className = 'rate-feedback good';
          els.rateFeedback.innerHTML = '✅ <strong>Cycle complete!</strong> Resume compressions.';
        }, 250);
      }
    }
    updateTotals();
  }

  function updateRate() {
    if (tapTimes.length < 2) {
      els.liveRate.textContent = '—';
      return;
    }
    // Average interval over the recent taps -> compressions per minute.
    const intervals = [];
    for (let i = 1; i < tapTimes.length; i++) intervals.push(tapTimes[i] - tapTimes[i - 1]);
    const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const rate = Math.round(60000 / avg);
    els.liveRate.textContent = rate;

    const fb = els.rateFeedback;
    if (practiceComps >= 30) return; // don't override the breath prompt
    if (rate < 100) {
      fb.className = 'rate-feedback warn';
      fb.innerHTML = `⬆️ <strong>Push faster</strong> — ${rate}/min is below the 100–120 target.`;
    } else if (rate > 120) {
      fb.className = 'rate-feedback warn';
      fb.innerHTML = `⬇️ <strong>Ease off</strong> — ${rate}/min is above the 100–120 target.`;
    } else {
      fb.className = 'rate-feedback good';
      fb.innerHTML = `👍 <strong>Great pace</strong> — ${rate}/min is right on target.`;
    }
  }

  function updateAccuracy() {
    if (scoredComps === 0) {
      els.accuracyNum.innerHTML = `—<span class="pstat-of">%</span>`;
      return;
    }
    const pct = Math.round((inZoneComps / scoredComps) * 100);
    els.accuracyNum.innerHTML = `${pct}<span class="pstat-of">%</span>`;
    // Colour the score: green ≥ 80%, amber ≥ 50%, otherwise red.
    const color = pct >= 80 ? 'var(--good)' : pct >= 50 ? 'var(--warn)' : 'var(--accent-2)';
    els.accuracyNum.style.color = color;
  }

  function scoreGrade(pct) {
    if (pct >= 90) return 'Excellent';
    if (pct >= 80) return 'Great';
    if (pct >= 60) return 'Good';
    if (pct >= 40) return 'Keep practicing';
    return 'Work on your pace';
  }

  function updateTotals() {
    let line = `Session: ${totalComps} compressions · ${totalBreaths} breaths`;
    if (scoredComps > 0) {
      const pct = Math.round((inZoneComps / scoredComps) * 100);
      line += ` · ${inZoneComps}/${scoredComps} in zone (${scoreGrade(pct)})`;
    }
    els.practiceTotals.textContent = line;
  }

  function resetPractice() {
    practiceOn = false;
    tapTimes = [];
    practiceComps = 0;
    practiceBreaths = 0;
    totalComps = 0;
    totalBreaths = 0;
    scoredComps = 0;
    inZoneComps = 0;
    if (els.liveRate) {
      els.liveRate.textContent = '—';
      els.compNum.innerHTML = `0<span class="pstat-of">/30</span>`;
      els.breathNum.innerHTML = `0<span class="pstat-of">/2</span>`;
      els.accuracyNum.innerHTML = `—<span class="pstat-of">%</span>`;
      els.accuracyNum.style.color = '';
      els.rateFeedback.className = 'rate-feedback';
      els.rateFeedback.textContent = 'Tap Spacebar to begin.';
      updateTotals();
    }
  }

  function teardown() {
    stop();
    if (keyHandler) {
      document.removeEventListener('keydown', keyHandler);
      keyHandler = null;
    }
  }

  return { render, teardown };
})();
