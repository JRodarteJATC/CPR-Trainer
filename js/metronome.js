// Compression metronome: Web Audio click + visual pulse + 30:2 cycle counter.
window.ModuleMetronome = (function () {
  let audioCtx = null;
  let timer = null;
  let running = false;
  let bpm = 110;
  let beatCount = 0;       // compressions in current cycle (for 30:2)
  let els = {};

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
      </div>`;

    els = {
      circle: view.querySelector('#metroCircle'),
      bpmLabel: view.querySelector('#metroBpm'),
      count: view.querySelector('#metroCount'),
      rateVal: view.querySelector('#rateVal'),
      range: view.querySelector('#rateRange'),
      startBtn: view.querySelector('#metroStart'),
      resetBtn: view.querySelector('#metroReset'),
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
  }

  function teardown() { stop(); }

  return { render, teardown };
})();
