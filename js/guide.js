// Step-by-step adult CPR guide.
window.ModuleGuide = (function () {
  const STEPS = [
    {
      title: "Check the scene & the person",
      body: "Make sure the area is safe (traffic, fire, electricity, water). Tap the person's shoulders and shout, “Are you okay?”",
      tag: "Scene safety first"
    },
    {
      title: "Call for help",
      body: "If unresponsive and not breathing normally (or only gasping), call 911 — or tell a specific bystander to call and to bring an AED. Put your phone on speaker so the dispatcher can guide you.",
      tag: "Get an AED"
    },
    {
      title: "Open the airway & check breathing",
      body: "Take no more than 10 seconds. Look for chest rise. Occasional gasping is NOT normal breathing — treat it as cardiac arrest and move to compressions.",
    },
    {
      title: "Position your hands",
      body: "Place the heel of one hand on the center of the chest (lower half of the breastbone). Put your other hand on top and interlace your fingers. Keep arms straight, shoulders directly over your hands.",
    },
    {
      title: "Give 30 chest compressions",
      body: "Push hard and fast: at least 2 inches (5 cm) deep, 100–120 per minute. Let the chest fully recoil after each push. Count out loud.",
      tag: "100–120 / min"
    },
    {
      title: "Give 2 rescue breaths (if trained & willing)",
      body: "Tilt the head back, lift the chin, pinch the nose, and give two 1-second breaths that make the chest rise. If untrained or unwilling, skip breaths and do continuous hands-only compressions.",
    },
    {
      title: "Continue 30:2 cycles",
      body: "Keep repeating 30 compressions and 2 breaths. Switch compressors about every 2 minutes if someone else is available, to avoid fatigue.",
    },
    {
      title: "Use the AED as soon as it arrives",
      body: "Turn it on and follow the voice prompts. Attach pads to the bare chest. Make sure no one is touching the person during analysis or shock (“I'm clear, you're clear, everyone clear”). Resume compressions immediately after.",
      tag: "Don't delay defibrillation"
    },
    {
      title: "Keep going until help takes over",
      body: "Continue CPR until the person shows signs of life (moving, breathing normally), an AED/EMS takes over, or you are too exhausted to continue.",
    }
  ];

  function render(view) {
    view.innerHTML = `
      <h2 class="module-title">Step-by-Step Guide</h2>
      <p class="module-sub">The adult CPR sequence, from arrival to handoff. Read it through, then practice the rhythm in the Metronome tab.</p>
      <div class="card" id="guideCard"></div>`;

    const card = view.querySelector('#guideCard');
    card.innerHTML = STEPS.map((s, i) => `
      <div class="step">
        <div class="step-num">${i + 1}</div>
        <div class="step-body">
          <h3>${s.title}</h3>
          <p>${s.body}</p>
          ${s.tag ? `<span class="tag">${s.tag}</span>` : ''}
        </div>
      </div>`).join('');
  }

  return { render };
})();
