// Scenario definitions. Each scenario is a list of stages.
// stage: { narrative, time (seconds, optional), options: [{ text, correct, feedback }] }
window.SCENARIOS = [
  {
    id: "collapse-office",
    title: "Collapse at the Office",
    blurb: "A coworker suddenly collapses in the break room. You're the first to reach them.",
    difficulty: "Beginner",
    stages: [
      {
        narrative: "Your coworker is on the floor and not moving. What's your FIRST action?",
        time: 12,
        options: [
          { text: "Make sure the area is safe, then tap their shoulders and shout to check for a response", correct: true,
            feedback: "Correct. Scene safety, then check responsiveness. You confirm they're unresponsive." },
          { text: "Start chest compressions immediately", correct: false,
            feedback: "Too soon — you must confirm the scene is safe and that they're unresponsive and not breathing normally first." },
          { text: "Splash water on their face", correct: false,
            feedback: "This wastes time. Check responsiveness by tapping and shouting." }
        ]
      },
      {
        narrative: "They don't respond and are only gasping occasionally. What now?",
        time: 12,
        options: [
          { text: "Yell for help, have someone call 911 and get the AED, then start CPR", correct: true,
            feedback: "Correct. Gasping is agonal breathing — treat as cardiac arrest. Activate help and begin." },
          { text: "Assume they're just sleeping and wait", correct: false,
            feedback: "Gasping is NOT normal breathing. This is cardiac arrest — act now." },
          { text: "Give two rescue breaths and reassess", correct: false,
            feedback: "Current guidance is compressions first for adults. Get help and start compressing." }
        ]
      },
      {
        narrative: "You begin compressions. What rate and depth are you aiming for?",
        time: 12,
        options: [
          { text: "100–120/min, at least 2 inches deep, full recoil", correct: true,
            feedback: "Perfect technique. Keep the beat steady and let the chest fully recoil." },
          { text: "60/min, as deep as possible", correct: false,
            feedback: "Too slow and risks excessive depth. Aim for 100–120/min and 2–2.4 inches." },
          { text: "150/min, shallow and fast", correct: false,
            feedback: "Too fast and too shallow — both reduce blood flow. Aim for 100–120/min, at least 2 inches." }
        ]
      },
      {
        narrative: "The AED arrives. What do you do?",
        time: 12,
        options: [
          { text: "Turn it on, attach pads, and follow the voice prompts; clear during analysis/shock", correct: true,
            feedback: "Correct. Use it immediately and resume compressions right after the shock. Help is on the way." },
          { text: "Wait for paramedics since you're not certified", correct: false,
            feedback: "AEDs are made for laypeople. Use it now — minutes matter." },
          { text: "Keep doing compressions and ignore the AED", correct: false,
            feedback: "Defibrillation is critical for a shockable rhythm. Apply the AED as soon as it's available." }
        ]
      }
    ]
  },
  {
    id: "park-jogger",
    title: "Jogger Down in the Park",
    blurb: "While walking in the park you see a jogger clutch their chest and fall. No one else is around.",
    difficulty: "Intermediate",
    stages: [
      {
        narrative: "You reach the jogger. Bystanders are far away. First step?",
        time: 12,
        options: [
          { text: "Check scene safety, then tap and shout to check responsiveness", correct: true,
            feedback: "Correct. They're unresponsive and not breathing normally." },
          { text: "Run to find someone before checking the patient", correct: false,
            feedback: "Check the patient first so you can give the dispatcher accurate information." }
        ]
      },
      {
        narrative: "You're alone with a phone. What's the best move?",
        time: 12,
        options: [
          { text: "Call 911 on speaker, then start hands-only CPR right away", correct: true,
            feedback: "Correct. Speakerphone lets the dispatcher coach you while you compress without delay." },
          { text: "Leave to find an AED before doing anything", correct: false,
            feedback: "Don't leave. Call on speaker and start compressions; send others for an AED if they appear." }
        ]
      },
      {
        narrative: "You're untrained in rescue breaths and have no mask. What CPR do you give?",
        time: 12,
        options: [
          { text: "Hands-only CPR: continuous compressions at 100–120/min", correct: true,
            feedback: "Correct. Hands-only CPR is recommended here and is highly effective in the first minutes." },
          { text: "Stop and wait because breaths are required", correct: false,
            feedback: "Breaths are not required for bystander CPR. Continuous compressions save lives." }
        ]
      }
    ]
  }
];
