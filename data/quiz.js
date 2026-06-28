// Quiz question bank — based on the BLS 2022 course (slides 5–54).
// Mix of multiple-choice, true/false, and "all of the above" questions.
// { q, options[], answer (index), explain }
window.QUIZ_QUESTIONS = [
  // ---------- Heart Attack ----------
  {
    q: "Which of the following is a sign or symptom of a heart attack?",
    options: [
      "Mild chest pressure, aching, or burning that comes and goes",
      "Discomfort in the arm, jaw, teeth, back, or shoulder",
      "Shortness of breath and a cold sweat for no apparent reason",
      "All of the above"
    ],
    answer: 3,
    explain: "Heart attacks can present with chest pressure, upper-body discomfort, shortness of breath, and cold sweats — <strong>all of the above</strong>."
  },
  {
    q: "True or False: Heart attack chest discomfort may be mistaken for indigestion.",
    options: ["True", "False"],
    answer: 0,
    explain: "<strong>True.</strong> Chest discomfort that mimics indigestion can actually be a heart attack."
  },
  {
    q: "Emergency first aid for a suspected heart attack includes:",
    options: [
      "Call EMS immediately",
      "Place the patient at rest and give aspirin",
      "Send for an AED and monitor the patient closely",
      "All of the above"
    ],
    answer: 3,
    explain: "Call EMS, rest the patient, give aspirin, send for an AED, and perform CPR if needed — <strong>all of the above</strong>."
  },
  {
    q: "True or False: A suspected heart attack patient should keep moving to work through the pain.",
    options: ["True", "False"],
    answer: 1,
    explain: "<strong>False.</strong> Place the patient <strong>at rest</strong>; activity increases the heart's workload."
  },
  {
    q: "Heart attack chest pain that lasts longer than how many minutes is a warning sign?",
    options: ["10 minutes", "1 minute", "30 seconds", "60 minutes"],
    answer: 0,
    explain: "Chest discomfort lasting <strong>longer than 10 minutes</strong> is a warning sign of a heart attack."
  },

  // ---------- Angina ----------
  {
    q: "Angina is best described as:",
    options: [
      "Chest pain that often spreads to the neck, shoulders, arms, and fingers, usually lasting seconds to minutes",
      "A permanent blockage causing brain damage",
      "A broken bone in the chest wall",
      "An allergic reaction to medication"
    ],
    answer: 0,
    explain: "Angina is chest pain that may spread to the neck, shoulders, and arms, usually lasting only <strong>seconds to minutes</strong>."
  },

  // ---------- Stroke ----------
  {
    q: "A stroke occurs when:",
    options: [
      "Blood supply to an area of the brain is interrupted long enough to cause damage",
      "The heart stops beating entirely",
      "A bone in the skull is fractured",
      "The lungs fill with fluid"
    ],
    answer: 0,
    explain: "A stroke is an interruption of <strong>blood supply to the brain</strong> — from a blockage or a hemorrhage."
  },
  {
    q: "One of the major contributing causes of stroke is:",
    options: ["High blood pressure", "Low body temperature", "Mild dehydration", "Eating too little salt"],
    answer: 0,
    explain: "<strong>High blood pressure</strong> is a major contributing cause; early recognition and treatment reduce stroke risk."
  },
  {
    q: "A 'TIA' (Transient Ischemic Attack) is:",
    options: [
      "A warning sign where a vessel is briefly blocked but clears before damage occurs",
      "Always permanent brain damage",
      "A type of heart attack",
      "Something that can safely be ignored"
    ],
    answer: 0,
    explain: "A TIA is a temporary blockage that breaks apart before damage — an important <strong>warning sign</strong>; see a physician."
  },
  {
    q: "Which is a sign or symptom of a stroke?",
    options: [
      "Sudden difficulty speaking or understanding speech",
      "Weakness, numbness, or paralysis on one side of the body",
      "Facial drooping, blurred vision, or a sudden severe headache",
      "All of the above"
    ],
    answer: 3,
    explain: "Stroke signs include speech trouble, one-sided weakness, facial droop, vision changes, and severe headache — <strong>all of the above</strong>."
  },
  {
    q: "True or False: A stroke patient will always show every symptom of a stroke.",
    options: ["True", "False"],
    answer: 1,
    explain: "<strong>False.</strong> The patient may not exhibit all of the symptoms — even one sign is significant."
  },
  {
    q: "The 60-Second Stroke Screening asks the person to:",
    options: [
      "Smile and show their teeth",
      "Close their eyes and hold both arms out for 10 seconds",
      "Repeat a simple phrase",
      "All of the above"
    ],
    answer: 3,
    explain: "The screen checks the smile, arm hold, and speech — <strong>all of the above</strong>. Any abnormal result means call 911."
  },
  {
    q: "True or False: If any one of the three parts of the stroke screen is abnormal, you should call 911.",
    options: ["True", "False"],
    answer: 0,
    explain: "<strong>True.</strong> An abnormal result on any one part means the person could be having a stroke — call 911."
  },
  {
    q: "For most stroke patients, hospital-based care must occur within:",
    options: ["3 hours of symptom onset", "24 hours", "30 minutes", "12 hours"],
    answer: 0,
    explain: "Care should occur within <strong>3 hours of symptom onset</strong> for most stroke patients — note the time symptoms began."
  },
  {
    q: "A semiconscious or unconscious stroke patient should be positioned:",
    options: [
      "With the paralyzed side down",
      "Sitting fully upright",
      "Face down on their stomach",
      "With the paralyzed side up"
    ],
    answer: 0,
    explain: "Place them with the <strong>paralyzed side down</strong> to help keep the airway clear."
  },
  {
    q: "True or False: You should give a stroke patient food or drink to keep their strength up.",
    options: ["True", "False"],
    answer: 1,
    explain: "<strong>False.</strong> Do <strong>not</strong> give anything to eat or drink to a stroke patient."
  },
  {
    q: "When possible, stroke patients should be transported to:",
    options: [
      "The nearest Primary Stroke Center, even if it means bypassing a closer medical center",
      "The closest building of any kind",
      "Home to rest and recover",
      "The nearest pharmacy"
    ],
    answer: 0,
    explain: "Transport to the nearest <strong>Primary Stroke Center</strong>, even if it means bypassing a closer hospital."
  },

  // ---------- Universal Precautions ----------
  {
    q: "Universal precautions means:",
    options: [
      "Treating all human blood and body fluids as if they are infectious",
      "Only using gloves when you know the person is infected",
      "Ignoring exposure if the person appears healthy",
      "Washing your hands only after meals"
    ],
    answer: 0,
    explain: "Universal precautions treat <strong>all</strong> blood/body fluids as potentially infectious (HIV, HBV, HCV)."
  },
  {
    q: "True or False: At a minimum, a rescuer must use latex or nitrile gloves whenever there is potential exposure.",
    options: ["True", "False"],
    answer: 0,
    explain: "<strong>True.</strong> Gloves are the minimum barrier whenever exposure to blood or body fluids is possible."
  },
  {
    q: "True or False: After completing CPR, you can skip washing your hands if you wore gloves.",
    options: ["True", "False"],
    answer: 1,
    explain: "<strong>False.</strong> Remove all protective apparel and <strong>thoroughly wash</strong> your hands and exposed skin."
  },
  {
    q: "During CPR, to eliminate mouth-to-mouth contact you should use:",
    options: ["A protective barrier device", "Your bare hands", "Nothing at all", "A cloth blanket"],
    answer: 0,
    explain: "Whenever possible, use a <strong>protective barrier device</strong> to avoid direct mouth-to-mouth contact."
  },

  // ---------- 4 Steps / 911 / CPR concepts ----------
  {
    q: "The first step in a cardiac emergency is to:",
    options: [
      "Recognize the emergency and call 911 without delay",
      "Give the patient water",
      "Drive them to the hospital yourself",
      "Wait to see if they improve"
    ],
    answer: 0,
    explain: "Recognize the emergency and <strong>call 911 without delay</strong> — survival is a race against the clock."
  },
  {
    q: "True or False: If another person is present, you should direct them to call 911 and return with an AED.",
    options: ["True", "False"],
    answer: 0,
    explain: "<strong>True.</strong> Send a specific person to call 911 and bring back an AED, then report to you."
  },
  {
    q: "You should continue CPR until:",
    options: [
      "The patient moves",
      "An AED arrives",
      "Professional help arrives",
      "All of the above"
    ],
    answer: 3,
    explain: "Continue CPR until the patient moves, an AED arrives, or professional help takes over — <strong>all of the above</strong>."
  },
  {
    q: "True or False: The speed with which defibrillation is performed is the primary determinant of resuscitation success.",
    options: ["True", "False"],
    answer: 0,
    explain: "<strong>True.</strong> Early defibrillation is the <strong>primary determinant</strong> of successful resuscitation."
  },

  // ---------- CPR Technique ----------
  {
    q: "The compression-to-breath ratio for CPR is:",
    options: ["30 compressions to 2 breaths", "15 to 2", "5 to 1", "10 to 2"],
    answer: 0,
    explain: "Perform <strong>30 chest compressions to 2 breaths</strong>."
  },
  {
    q: "Correct hand position for chest compressions is:",
    options: [
      "Heel of one hand on the center of the chest (lower half of the breastbone), other hand on top",
      "Over the stomach",
      "On the upper chest near the collarbones",
      "On the left side over the heart"
    ],
    answer: 0,
    explain: "Place the heel of one hand on the <strong>lower half of the sternum</strong>, the other hand on top, fingers lifted or interlaced."
  },
  {
    q: "Compression depth for an adult should be:",
    options: [
      "At least 2 inches, allowing full chest recoil",
      "About 1 inch",
      "At least 4 inches",
      "Just enough to feel a pulse"
    ],
    answer: 0,
    explain: "Compress straight down <strong>at least 2 inches</strong> and allow <strong>full chest recoil</strong> after each push."
  },
  {
    q: "The correct compression rate is:",
    options: ["100 to 120 per minute", "60 to 80 per minute", "140 to 160 per minute", "As slow as is comfortable"],
    answer: 0,
    explain: "Compress at a rate of <strong>100 to 120 per minute</strong> — about 30 compressions in 15–18 seconds."
  },
  {
    q: "True or False: You should press hard, press fast, and minimize interruptions.",
    options: ["True", "False"],
    answer: 0,
    explain: "<strong>True.</strong> Press hard, press fast, and minimize interruptions to compressions."
  },
  {
    q: "True or False: You should keep pressure on the chest between compressions instead of letting it fully recoil.",
    options: ["True", "False"],
    answer: 1,
    explain: "<strong>False.</strong> Fully release after each compression to allow the chest to <strong>recoil</strong>."
  },
  {
    q: "Rescue breaths should:",
    options: [
      "Result in visible chest rise",
      "Be as forceful as possible",
      "Take at least 30 seconds each",
      "Be given before opening the airway"
    ],
    answer: 0,
    explain: "Each breath should produce <strong>visible chest rise</strong>; over-forceful breaths can cause harm."
  },
  {
    q: "Two breaths should take no longer than how long to administer?",
    options: ["5 seconds total", "30 seconds total", "1 minute total", "10 seconds total"],
    answer: 0,
    explain: "The two breaths together should take no more than <strong>5 seconds</strong>, minimizing the pause in compressions."
  },
  {
    q: "The airway is opened using:",
    options: [
      "The head-tilt chin-lift",
      "A finger pushed down the throat",
      "Pressing on the chest",
      "Tilting the head forward toward the chest"
    ],
    answer: 0,
    explain: "Open the airway with the <strong>head-tilt chin-lift</strong> before giving breaths."
  },

  // ---------- Breathing ----------
  {
    q: "True or False: Agonal (gasping) breathing in a cardiac arrest patient should be treated as normal breathing.",
    options: ["True", "False"],
    answer: 1,
    explain: "<strong>False.</strong> Agonal gasping is a reflex and is <strong>not</strong> normal breathing — begin CPR."
  },
  {
    q: "The average number of breaths per minute for an adult is:",
    options: ["12–20", "30", "40", "5–8"],
    answer: 0,
    explain: "Adults average <strong>12–20</strong> breaths/min (children ~30, babies ~40)."
  },
  {
    q: "For a choking person who is pregnant or too large for abdominal thrusts, you should give:",
    options: ["Chest thrusts", "Harder abdominal thrusts", "Back blows only", "Nothing — wait for EMS"],
    answer: 0,
    explain: "Use <strong>chest thrusts</strong> (fist on the sternum, as in CPR hand placement) for pregnant or larger patients."
  },

  // ---------- Second Rescuer ----------
  {
    q: "Changeovers between two rescuers should occur:",
    options: [
      "Every 5 cycles or about every 2 minutes",
      "Every 30 seconds",
      "Every 10 minutes",
      "Only when one rescuer collapses"
    ],
    answer: 0,
    explain: "Switch compressors <strong>every 5 cycles (~2 minutes)</strong> to keep compressions high-quality."
  },
  {
    q: "True or False: During a changeover, the first rescuer finishes the cycle with two breaths and the second immediately begins with chest compressions.",
    options: ["True", "False"],
    answer: 0,
    explain: "<strong>True.</strong> Finish with two breaths, then the second rescuer starts compressions immediately."
  },
  {
    q: "When a second rescuer arrives, they should first:",
    options: [
      "Call EMS and return with the AED",
      "Begin giving breaths only",
      "Wait for the first rescuer to tire out",
      "Leave to find their own help"
    ],
    answer: 0,
    explain: "The second rescuer should first <strong>call EMS and return with the AED</strong> to help."
  },

  // ---------- AED ----------
  {
    q: "During AED analysis and shocking, everyone must be clear of the patient by at least:",
    options: ["3 feet", "3 inches", "1 foot", "10 feet"],
    answer: 0,
    explain: "Ensure all are clear by at least <strong>3 feet</strong> during analysis and shock delivery."
  },
  {
    q: "True or False: Transdermal medication patches should be removed before using an AED.",
    options: ["True", "False"],
    answer: 0,
    explain: "<strong>True.</strong> Remove all transdermal medication patches before applying AED electrodes."
  },
  {
    q: "AED electrodes should be placed at least one inch away from:",
    options: ["Any implanted medical devices", "The patient's feet", "The rescuer's hands", "The patient's mouth"],
    answer: 0,
    explain: "Keep electrodes at least <strong>one inch from implanted devices</strong> (e.g., pacemakers)."
  },
  {
    q: "For children 1 to 8 years of age, you should:",
    options: [
      "Use pediatric electrodes if available",
      "Never use an AED",
      "Use two adult AEDs at once",
      "Double the shock strength"
    ],
    answer: 0,
    explain: "Use <strong>pediatric electrodes</strong> for children 1–8 years old when available."
  },
  {
    q: "Correct AED pad placement is:",
    options: [
      "Right pad on the upper-right of the sternum below the collarbone; left pad below the left breast in line with the armpit",
      "Both pads on the stomach",
      "Both pads on the back",
      "One pad on each hand"
    ],
    answer: 0,
    explain: "Right pad upper-right chest below the collarbone; left pad below the left breast, in line with the armpit."
  },
  {
    q: "True or False: You should reach over the patient to press the shock button.",
    options: ["True", "False"],
    answer: 1,
    explain: "<strong>False.</strong> Do <strong>not</strong> reach over the patient to initiate the shock."
  },

  // ---------- Recovery Position ----------
  {
    q: "The recovery position is used to:",
    options: [
      "Maintain a clear airway and prevent choking in a conscious or semiconscious person",
      "Perform chest compressions",
      "Deliver an AED shock",
      "Stop external bleeding"
    ],
    answer: 0,
    explain: "It keeps the airway clear and lets fluids drain — for a <strong>conscious/semiconscious</strong> person."
  },
  {
    q: "True or False: The recovery position should be used even when internal injuries are suspected.",
    options: ["True", "False"],
    answer: 1,
    explain: "<strong>False.</strong> Use it <strong>only</strong> if no internal injuries are suspected."
  },

  // ---------- Choking ----------
  {
    q: "A choking person who can still cough forcefully and speak should be:",
    options: [
      "Encouraged to keep coughing and watched closely",
      "Given abdominal thrusts immediately",
      "Laid flat on their back at once",
      "Given water to drink"
    ],
    answer: 0,
    explain: "If they can cough or speak, <strong>encourage coughing and watch closely</strong>; notify EMS if it continues."
  },
  {
    q: "Which is a sign that a choking person needs immediate help?",
    options: [
      "Wheezing and being unable to breathe, cough forcefully, or speak",
      "Blue skin color (cyanosis)",
      "Clutching the neck — the universal distress signal of choking",
      "All of the above"
    ],
    answer: 3,
    explain: "Inability to breathe/cough/speak, cyanosis, and clutching the neck all signal a serious obstruction — <strong>all of the above</strong>."
  }
];
