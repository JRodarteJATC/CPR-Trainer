// Quiz question bank. Add objects to extend.
// { q, options[], answer (index), explain }
window.QUIZ_QUESTIONS = [
  {
    q: "What is the recommended compression rate for adult CPR?",
    options: ["60–80 per minute", "80–100 per minute", "100–120 per minute", "120–150 per minute"],
    answer: 2,
    explain: "Push at <strong>100–120 compressions per minute</strong> — roughly the beat of 'Stayin' Alive.' Too slow reduces blood flow; too fast reduces depth and recoil."
  },
  {
    q: "How deep should compressions be on an adult?",
    options: ["About 1 inch (2.5 cm)", "At least 2 inches (5 cm)", "At least 3 inches (7.5 cm)", "As deep as possible"],
    answer: 1,
    explain: "Compress <strong>at least 2 inches (5 cm)</strong> but no more than 2.4 inches (6 cm). Allow the chest to fully recoil between each compression."
  },
  {
    q: "What is the compression-to-breath ratio for one-rescuer adult CPR?",
    options: ["15:2", "30:2", "5:1", "10:2"],
    answer: 1,
    explain: "<strong>30 compressions to 2 breaths</strong> for standard adult CPR with one or two rescuers. If untrained or unwilling to give breaths, do hands-only (continuous) compressions."
  },
  {
    q: "Before starting compressions, what should you do first?",
    options: [
      "Give two rescue breaths",
      "Check a pulse for 60 seconds",
      "Ensure the scene is safe, then check responsiveness and call for help",
      "Begin chest compressions immediately"
    ],
    answer: 2,
    explain: "<strong>Scene safety first.</strong> Then check responsiveness (tap & shout), and if unresponsive with no normal breathing, call 911 (or send someone) and get an AED before starting compressions."
  },
  {
    q: "An adult collapses and isn't breathing normally (only gasping). What is gasping a sign of?",
    options: [
      "Normal breathing — no CPR needed",
      "Agonal breathing — a sign of cardiac arrest; start CPR",
      "Choking — do abdominal thrusts",
      "A seizure — protect their head"
    ],
    answer: 1,
    explain: "Occasional gasping is <strong>agonal breathing</strong> and is NOT effective breathing. Treat it as cardiac arrest and begin compressions."
  },
  {
    q: "Where do you place your hands for adult chest compressions?",
    options: [
      "Over the stomach",
      "On the left side of the chest, over the heart",
      "Center of the chest, lower half of the breastbone (sternum)",
      "On the upper chest near the collarbones"
    ],
    answer: 2,
    explain: "Heel of one hand on the <strong>center of the chest, lower half of the sternum</strong>, other hand on top, fingers interlaced, arms straight, shoulders over hands."
  },
  {
    q: "When an AED arrives, what should you do?",
    options: [
      "Finish 5 minutes of CPR first",
      "Turn it on and follow its voice prompts as soon as possible",
      "Only use it if you are certified",
      "Wait for paramedics to use it"
    ],
    answer: 1,
    explain: "Use the AED <strong>as soon as it's available</strong>. Turn it on, attach the pads, and follow the prompts. AEDs are designed for laypeople and won't shock unless a shock is needed."
  },
  {
    q: "While the AED analyzes the heart rhythm or delivers a shock, you should:",
    options: [
      "Keep doing compressions",
      "Make sure no one is touching the patient ('clear')",
      "Hold the patient's hand",
      "Give rescue breaths"
    ],
    answer: 1,
    explain: "<strong>Stand clear</strong> — no one should touch the patient while the AED analyzes or shocks. Resume compressions immediately after the shock (or if no shock is advised)."
  },
  {
    q: "How often should rescuers switch who is doing compressions, if possible?",
    options: ["Every 30 seconds", "About every 2 minutes", "Every 10 minutes", "Only when exhausted"],
    answer: 1,
    explain: "Switch compressors about <strong>every 2 minutes</strong> (or every 5 AED cycles) to prevent fatigue, which reduces compression quality. Aim to switch in under 5 seconds."
  },
  {
    q: "If you are untrained or unwilling to give rescue breaths, what should you do?",
    options: [
      "Do nothing and wait for help",
      "Hands-only CPR: continuous chest compressions",
      "Only check the pulse repeatedly",
      "Give breaths only"
    ],
    answer: 1,
    explain: "<strong>Hands-only CPR</strong> (continuous compressions, no breaths) is recommended for untrained bystanders and is far better than doing nothing."
  }
];
