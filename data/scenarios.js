// Scenario definitions, based on the BLS 2022 course.
// Each scenario: { id, title, blurb, difficulty, stages: [...] }
// stage: { narrative, time (seconds, optional), options: [{ text, correct, feedback }] }
window.SCENARIOS = [
  // ============== BEGINNER ==============
  {
    id: "gym-collapse",
    title: "Collapse at the Gym",
    blurb: "A man on a treadmill suddenly collapses and lies motionless. You're the closest person.",
    difficulty: "Beginner",
    stages: [
      {
        narrative: "He's on the floor and not moving. What is your FIRST action?",
        time: 12,
        options: [
          { text: "Make sure the area is safe, then tap and shout to check for a response", correct: true,
            feedback: "Correct — scene safety, then check responsiveness. He's unresponsive." },
          { text: "Start chest compressions immediately", correct: false,
            feedback: "Too soon — confirm the scene is safe and that he's unresponsive first." },
          { text: "Pour water on his face to wake him", correct: false,
            feedback: "This wastes time. Check responsiveness by tapping and shouting." }
        ]
      },
      {
        narrative: "He's unresponsive and only gasping occasionally. What now?",
        time: 12,
        options: [
          { text: "Call 911 (or send someone), ask for an AED, and begin CPR", correct: true,
            feedback: "Correct — gasping is agonal breathing. Activate EMS and start CPR." },
          { text: "Assume he's breathing normally and wait", correct: false,
            feedback: "Agonal gasping is NOT normal breathing — this is cardiac arrest." },
          { text: "Give him a drink and sit him up", correct: false,
            feedback: "He needs CPR now, not fluids." }
        ]
      },
      {
        narrative: "You start compressions. What rate and depth do you aim for?",
        time: 12,
        options: [
          { text: "100–120 per minute, at least 2 inches deep, full recoil", correct: true,
            feedback: "Perfect — press hard, press fast, and let the chest fully recoil." },
          { text: "60 per minute, about 1 inch deep", correct: false,
            feedback: "Too slow and too shallow — aim for 100–120/min and at least 2 inches." },
          { text: "As fast as you can, shallow pushes", correct: false,
            feedback: "Depth matters — at least 2 inches at 100–120/min." }
        ]
      },
      {
        narrative: "How many compressions then breaths per cycle?",
        time: 12,
        options: [
          { text: "30 compressions, then 2 breaths", correct: true,
            feedback: "Correct — 30:2. Keep cycles going until an AED or help arrives." },
          { text: "15 compressions, then 2 breaths", correct: false,
            feedback: "The BLS ratio is 30:2 for adults." },
          { text: "5 compressions, then 1 breath", correct: false,
            feedback: "The BLS ratio is 30:2." }
        ]
      }
    ]
  },
  {
    id: "office-chest-pain",
    title: "Chest Pain at the Office",
    blurb: "A coworker grips her chest, looks pale, and says it feels like crushing pressure spreading to her arm.",
    difficulty: "Beginner",
    stages: [
      {
        narrative: "She's conscious but in obvious distress. What do you do first?",
        time: 12,
        options: [
          { text: "Call EMS (911) immediately", correct: true,
            feedback: "Correct — these are heart attack signs. Call EMS right away." },
          { text: "Tell her to walk it off", correct: false,
            feedback: "Never — activity increases the heart's workload. Call EMS and rest her." },
          { text: "Drive her to the hospital yourself", correct: false,
            feedback: "Call EMS — they can begin care en route and she could deteriorate." }
        ]
      },
      {
        narrative: "While waiting for EMS, what's appropriate care?",
        time: 12,
        options: [
          { text: "Place her at rest and give aspirin", correct: true,
            feedback: "Correct — rest reduces heart workload; aspirin can help. Monitor closely." },
          { text: "Have her lie down and do light stretches", correct: false,
            feedback: "Keep her at rest, not active." },
          { text: "Give her a large meal", correct: false,
            feedback: "No food — keep her at rest and monitor." }
        ]
      },
      {
        narrative: "What else should you prepare for?",
        time: 12,
        options: [
          { text: "Send for an AED and be ready to perform CPR if she becomes unresponsive", correct: true,
            feedback: "Correct — stage an AED and watch closely in case of cardiac arrest." },
          { text: "Put everything away since EMS is coming", correct: false,
            feedback: "Stay ready — get an AED and monitor her closely." },
          { text: "Leave her alone to rest", correct: false,
            feedback: "Stay with her and monitor; be ready for CPR." }
        ]
      }
    ]
  },

  // ============== INTERMEDIATE ==============
  {
    id: "stroke-screen",
    title: "Sudden Slurred Speech",
    blurb: "At lunch, a colleague's words suddenly slur and the right side of her face droops.",
    difficulty: "Intermediate",
    stages: [
      {
        narrative: "You suspect a stroke. What quick check helps confirm it?",
        time: 12,
        options: [
          { text: "The 60-second screen: smile/show teeth, hold arms out 10 sec, repeat a phrase", correct: true,
            feedback: "Correct — any abnormal result means a possible stroke." },
          { text: "Ask her to run in place", correct: false,
            feedback: "Use the stroke screen: face, arms, speech." },
          { text: "Check her temperature only", correct: false,
            feedback: "Use the face/arms/speech screen instead." }
        ]
      },
      {
        narrative: "Her smile is uneven and one arm drifts down. What now?",
        time: 12,
        options: [
          { text: "Call 911 and note the time symptoms started", correct: true,
            feedback: "Correct — care must occur within ~3 hours of onset, so the time matters." },
          { text: "Wait an hour to see if it passes", correct: false,
            feedback: "Don't wait — call 911 now; the treatment window is short." },
          { text: "Give her aspirin and food", correct: false,
            feedback: "Nothing by mouth for a stroke patient — call 911." }
        ]
      },
      {
        narrative: "She becomes semiconscious while you wait for EMS. How do you position her?",
        time: 12,
        options: [
          { text: "On her side with the paralyzed side down, airway open, nothing by mouth", correct: true,
            feedback: "Correct — paralyzed side down helps keep the airway clear." },
          { text: "Flat on her back and give her water", correct: false,
            feedback: "Never give food/drink; position with the paralyzed side down." },
          { text: "Sitting fully upright in a chair", correct: false,
            feedback: "If semiconscious, place her on her side, paralyzed side down." }
        ]
      },
      {
        narrative: "EMS asks where to take her. What's best?",
        time: 12,
        options: [
          { text: "The nearest Primary Stroke Center, even if it means bypassing a closer hospital", correct: true,
            feedback: "Correct — stroke centers provide the specialized, time-critical care needed." },
          { text: "The closest urgent care clinic", correct: false,
            feedback: "A Primary Stroke Center is preferred, even if farther." },
          { text: "Home, since she's stable", correct: false,
            feedback: "She needs a Primary Stroke Center immediately." }
        ]
      }
    ]
  },
  {
    id: "choking-breakroom",
    title: "Choking in the Break Room",
    blurb: "A man eating lunch suddenly stands, clutches his throat, and can't make a sound.",
    difficulty: "Intermediate",
    stages: [
      {
        narrative: "He's clutching his neck and cannot speak or cough. What does this tell you?",
        time: 12,
        options: [
          { text: "Severe obstruction — he needs immediate help", correct: true,
            feedback: "Correct — inability to speak/cough plus the neck clutch is a true emergency." },
          { text: "He's fine — just let him cough it out", correct: false,
            feedback: "He CAN'T cough or speak — that's severe; act now." },
          { text: "He's having a heart attack", correct: false,
            feedback: "The neck-clutch distress signal points to choking." }
        ]
      },
      {
        narrative: "He's conscious and standing. What do you do?",
        time: 12,
        options: [
          { text: "Give abdominal thrusts until the object clears or he goes unconscious", correct: true,
            feedback: "Correct — abdominal thrusts for a conscious adult with severe obstruction." },
          { text: "Give him water to wash it down", correct: false,
            feedback: "Don't give water — perform abdominal thrusts." },
          { text: "Have him lie down immediately", correct: false,
            feedback: "While conscious and standing, give abdominal thrusts." }
        ]
      },
      {
        narrative: "He suddenly goes limp and unresponsive. What now?",
        time: 12,
        options: [
          { text: "Lower him safely, call 911 if not done, and begin CPR", correct: true,
            feedback: "Correct — an unconscious choking victim gets CPR; check the mouth before breaths." },
          { text: "Keep doing standing abdominal thrusts", correct: false,
            feedback: "He's unconscious now — move to CPR on the ground." },
          { text: "Wait to see if he wakes up", correct: false,
            feedback: "Begin CPR immediately and call 911." }
        ]
      }
    ]
  },

  // ============== ADVANCED ==============
  {
    id: "two-rescuer-aed",
    title: "Two-Rescuer Arrest with AED",
    blurb: "A worker collapses in cardiac arrest. A coworker arrives to help and someone brings an AED.",
    difficulty: "Advanced",
    stages: [
      {
        narrative: "You're doing compressions when a second rescuer arrives with an AED. What's the priority?",
        time: 12,
        options: [
          { text: "Keep compressions going while the AED is turned on and pads are applied", correct: true,
            feedback: "Correct — minimize interruptions; keep compressing until the AED is ready to analyze." },
          { text: "Stop CPR and wait for the AED to fully set up", correct: false,
            feedback: "Don't stop — keep compressing until the AED needs to analyze." },
          { text: "Send the second rescuer away", correct: false,
            feedback: "Use the help — keep CPR going while pads go on." }
        ]
      },
      {
        narrative: "Where do the AED pads go?",
        time: 12,
        options: [
          { text: "Right pad upper-right chest below the collarbone; left pad below the left breast in line with the armpit", correct: true,
            feedback: "Correct pad placement — and keep pads ~1 inch from any implanted device." },
          { text: "Both pads on the stomach", correct: false,
            feedback: "Upper-right chest and lower-left side, not the stomach." },
          { text: "One pad on each shoulder", correct: false,
            feedback: "Upper-right chest and lower-left side in line with the armpit." }
        ]
      },
      {
        narrative: "The AED says it's analyzing the rhythm. What do you do?",
        time: 10,
        options: [
          { text: "Make sure everyone is clear of the patient by at least 3 feet", correct: true,
            feedback: "Correct — 'clear' during analysis and shock; don't reach over the patient." },
          { text: "Keep compressing during analysis", correct: false,
            feedback: "Stand clear during analysis so the AED reads the rhythm accurately." },
          { text: "Touch the patient to hold them still", correct: false,
            feedback: "No one touches the patient during analysis or shock." }
        ]
      },
      {
        narrative: "After the shock, you've been compressing about 2 minutes and you're tiring. What's the plan?",
        time: 12,
        options: [
          { text: "Switch compressors: finish the cycle with 2 breaths, then the partner starts compressions", correct: true,
            feedback: "Correct — change over every ~5 cycles (2 min) to keep compressions strong." },
          { text: "Push through alone for 10 more minutes", correct: false,
            feedback: "Fatigue lowers quality — switch about every 2 minutes." },
          { text: "Stop CPR entirely to rest", correct: false,
            feedback: "Never stop — hand off to your partner with minimal interruption." }
        ]
      }
    ]
  },
  {
    id: "pregnant-choking-arrest",
    title: "Pregnant Coworker Choking",
    blurb: "An advanced-pregnancy coworker is choking at a celebration. She can't speak and is turning blue.",
    difficulty: "Advanced",
    stages: [
      {
        narrative: "She's conscious but cannot breathe, cough, or speak, and her lips are bluish. Standard abdominal thrusts aren't appropriate here. What do you do?",
        time: 12,
        options: [
          { text: "Give chest thrusts — fist on the sternum, as in CPR hand placement", correct: true,
            feedback: "Correct — for advanced pregnancy (or too large for abdominal thrusts), use chest thrusts." },
          { text: "Give forceful abdominal thrusts anyway", correct: false,
            feedback: "Avoid abdominal thrusts in advanced pregnancy — use chest thrusts." },
          { text: "Wait for the obstruction to clear on its own", correct: false,
            feedback: "She's in severe distress — act now with chest thrusts." }
        ]
      },
      {
        narrative: "How do you deliver the chest thrusts?",
        time: 12,
        options: [
          { text: "From behind, reach under the armpits, fist thumb-side on the sternum, pull straight back in separate thrusts", correct: true,
            feedback: "Correct — each thrust is separate, aimed at expelling the obstruction." },
          { text: "One single squeeze and then stop", correct: false,
            feedback: "Give repeated, separate thrusts until it clears or she goes unconscious." },
          { text: "Thrusts low on the belly", correct: false,
            feedback: "Place the fist on the sternum (CPR compression spot), not the belly." }
        ]
      },
      {
        narrative: "She becomes unresponsive. What now?",
        time: 12,
        options: [
          { text: "Lower her safely, call 911 if not already done, and begin CPR", correct: true,
            feedback: "Correct — move to CPR; check the mouth for the object before breaths." },
          { text: "Continue standing chest thrusts", correct: false,
            feedback: "Once unconscious, begin CPR on the ground." },
          { text: "Place her in the recovery position and wait", correct: false,
            feedback: "She's unresponsive and not breathing normally — start CPR now." }
        ]
      },
      {
        narrative: "An AED arrives. Is it safe to use?",
        time: 12,
        options: [
          { text: "Yes — apply it and follow the prompts; clear everyone during analysis and shock", correct: true,
            feedback: "Correct — an AED is used as in any arrest; stand clear and don't reach over the patient." },
          { text: "No — AEDs can't be used in this situation", correct: false,
            feedback: "Apply the AED and follow its prompts; early defibrillation drives survival." },
          { text: "Only after 10 minutes of CPR", correct: false,
            feedback: "Use the AED as soon as it's available." }
        ]
      }
    ]
  }
];
