// Quiz question bank. Each question has 4 options.
// { q, options[4], answer (index 0-3), explain }
// Answers follow current standard first-aid / AHA guidance. Cross-check against
// your specific course's answer key where local protocols differ.
window.QUIZ_QUESTIONS = [
  // ---------- First Aid Written Evaluation ----------
  {
    q: "What is the first thing you should do upon arriving at the scene of an accident?",
    options: [
      "Conduct a Ten Second Survey of what has happened",
      "Rush in and grab the nearest victim",
      "Begin CPR on everyone present",
      "Wait for bystanders to act first"
    ],
    answer: 0,
    explain: "Start with a <strong>Ten Second Survey</strong> to size up the scene before acting."
  },
  {
    q: "As the first part of the Ten Second Survey, your priority should be:",
    options: [
      "Your own personal safety",
      "Comforting the victim",
      "Finding the cause of the accident",
      "Taking photos for documentation"
    ],
    answer: 0,
    explain: "<strong>Personal safety comes first</strong> — you can't help if you become a second victim."
  },
  {
    q: "Before providing first aid to a conscious injured adult, you must:",
    options: [
      "Request their permission (consent) first",
      "Begin treatment immediately without asking",
      "Wait for a family member to authorize it",
      "Only help if you know them personally"
    ],
    answer: 0,
    explain: "A conscious adult must give <strong>consent</strong> before you treat them."
  },
  {
    q: "When treating wounds, you should practice ______ to avoid direct contact with bodily fluids.",
    options: [
      "Universal precautions",
      "Deep breathing",
      "Rapid transport",
      "The recovery position"
    ],
    answer: 0,
    explain: "<strong>Universal precautions</strong> (gloves and barriers) protect you from bloodborne pathogens."
  },
  {
    q: "If you suspect head, neck, or back injuries, you should:",
    options: [
      "Not move the patient unless absolutely necessary",
      "Quickly sit them upright",
      "Move them to a more comfortable spot",
      "Have them walk it off"
    ],
    answer: 0,
    explain: "Avoid moving suspected spinal injuries <strong>unless there is an immediate life threat</strong>."
  },
  {
    q: "Which is a valid reason to move an injured person at the accident scene?",
    options: [
      "To provide lifesaving care",
      "To make them more comfortable",
      "To get a better look at the wound",
      "To clear the walkway"
    ],
    answer: 0,
    explain: "Only move an injured person when necessary to <strong>provide lifesaving care</strong> or escape danger."
  },
  {
    q: "Can you often check if a person is breathing without placing them on their back?",
    options: [
      "Yes, often you can",
      "No, they must always be flat on their back first",
      "Only if they are conscious",
      "Only with medical equipment"
    ],
    answer: 0,
    explain: "You can often observe breathing in the position you find them, avoiding unnecessary movement."
  },
  {
    q: "Immediately after determining unresponsiveness and calling 911, you should:",
    options: [
      "Assess for normal breathing without moving the patient",
      "Position the patient for CPR right away",
      "Give two rescue breaths",
      "Search for identification"
    ],
    answer: 0,
    explain: "Check for <strong>normal breathing</strong> first; only reposition if CPR is needed."
  },
  {
    q: "How many rescuers are best for performing the logroll maneuver?",
    options: ["Four", "Six", "Two", "One"],
    answer: 0,
    explain: "The logroll is best performed by about <strong>four</strong> rescuers working together — not six."
  },
  {
    q: "Who directs the logroll maneuver?",
    options: [
      "The person at the patient's head",
      "The strongest rescuer",
      "The person at the patient's feet",
      "Whoever called 911"
    ],
    answer: 0,
    explain: "The rescuer at the <strong>head</strong> directs the logroll to protect the spine."
  },
  {
    q: "Small cuts and abrasions should be:",
    options: [
      "Thoroughly washed with clean water before applying antibiotic ointment",
      "Covered immediately without cleaning",
      "Treated with ointment only, no water",
      "Left open with no treatment"
    ],
    answer: 0,
    explain: "Wash with clean water first, <strong>then</strong> apply triple antibiotic ointment."
  },
  {
    q: "When applying a bandage, you should:",
    options: [
      "Make sure it is not tied too tightly",
      "Tie it as tight as possible",
      "Not worry about tightness at all",
      "Only ever secure it with tape"
    ],
    answer: 0,
    explain: "A too-tight bandage can <strong>cut off circulation</strong> — check that it isn't too tight."
  },
  {
    q: "The best treatment for a nosebleed is to:",
    options: [
      "Lean the head slightly forward and pinch the nose",
      "Tilt the head back",
      "Lie down flat",
      "Blow the nose hard"
    ],
    answer: 0,
    explain: "<strong>Lean forward and pinch</strong> the soft part of the nose; tilting back sends blood down the throat."
  },
  {
    q: "The recommended technique to stop severe bleeding is:",
    options: [
      "Direct pressure on the wound",
      "Direct pressure on the supplying artery",
      "A tourniquet as the very first step",
      "Elevation alone"
    ],
    answer: 0,
    explain: "<strong>Direct pressure on the wound</strong> is the first-line method to control severe bleeding."
  },
  {
    q: "An unconscious person is bleeding from a leg wound. What do you do?",
    options: [
      "Check for normal breathing, then control the bleeding once breathing is confirmed",
      "Apply direct pressure and elevate the leg first",
      "Begin chest compressions immediately",
      "Give them water"
    ],
    answer: 0,
    explain: "Airway/breathing take priority — confirm <strong>normal breathing</strong>, then control the bleeding."
  },
  {
    q: "A bleach solution used to disinfect an accident area should be about:",
    options: [
      "One part bleach to ten parts water",
      "One part bleach to twelve parts water",
      "One part bleach to two parts water",
      "Pure undiluted bleach"
    ],
    answer: 0,
    explain: "A roughly <strong>1:10</strong> bleach-to-water solution is the common disinfecting dilution (ratios vary by course/agency)."
  },
  {
    q: "If you believe a person has internal bleeding, you should:",
    options: [
      "Never give anything by mouth",
      "Give them water to stay hydrated",
      "Give them sugar",
      "Have them eat something light"
    ],
    answer: 0,
    explain: "<strong>Nothing by mouth</strong> — they may need surgery, and fluids can worsen the situation."
  },
  {
    q: "If the object that caused a wound is still embedded in the chest, you should:",
    options: [
      "Leave it in place and cover the opening to prevent air entering the chest",
      "Carefully remove it at once",
      "Push it in further to stop bleeding",
      "Wiggle it to check the depth"
    ],
    answer: 0,
    explain: "<strong>Leave embedded objects in place</strong>; stabilize and cover to keep air out of the chest cavity."
  },
  {
    q: "Traumatic shock:",
    options: [
      "Can be life threatening and may be caused by any serious injury",
      "Is never serious",
      "Only happens with visible blood loss",
      "Only affects elderly patients"
    ],
    answer: 0,
    explain: "Shock can be <strong>life threatening</strong> and may follow any serious injury."
  },
  {
    q: "Regarding first aid and shock:",
    options: [
      "It won't reverse shock, but proper care can prevent symptoms from worsening",
      "It can completely reverse shock",
      "It has no effect on shock at all",
      "It only matters after EMS arrives"
    ],
    answer: 0,
    explain: "First aid can't reverse shock but can <strong>keep it from getting worse</strong>."
  },
  {
    q: "A basketball player was knocked unconscious but is conscious now. You should:",
    options: [
      "Advise them to get medical attention",
      "Assume they are fine now that they're awake",
      "Send them back into the game",
      "Give them pain medication and wait"
    ],
    answer: 0,
    explain: "Any <strong>loss of consciousness</strong> needs medical evaluation, even if they seem recovered."
  },
  {
    q: "All fractures and dislocations:",
    options: [
      "Require the attention of a physician",
      "Can be easily determined by the first aider",
      "Will heal on their own",
      "Should be reset by the first aider"
    ],
    answer: 0,
    explain: "Fractures and dislocations <strong>need a physician's care</strong>."
  },
  {
    q: "You can't tell if an injured arm is fractured or sprained. You should:",
    options: [
      "Treat it as though it is a fracture",
      "Treat it as a minor sprain",
      "Have the person move it to test it",
      "Do nothing until swelling appears"
    ],
    answer: 0,
    explain: "<strong>When in doubt, treat it as a fracture.</strong>"
  },
  {
    q: "One method of reducing swelling in a sprained wrist is:",
    options: [
      "Application of a cold compress",
      "Moderate exercise",
      "Applying heat",
      "Massaging the area firmly"
    ],
    answer: 0,
    explain: "<strong>Cold</strong> reduces swelling; heat and exercise can worsen it early on."
  },
  {
    q: "The first aider should apply a splint to a fracture:",
    options: [
      "As soon as possible",
      "Only after the swelling goes down",
      "Only at the hospital",
      "Never"
    ],
    answer: 0,
    explain: "Splint <strong>as soon as possible</strong> to prevent further injury and reduce pain."
  },
  {
    q: "The three factors that determine the severity of a burn are:",
    options: [
      "Depth, location, and size",
      "Source, contact, and origin",
      "Color, smell, and age",
      "Time, weather, and clothing"
    ],
    answer: 0,
    explain: "Burn severity depends on its <strong>depth, location, and size</strong>."
  },
  {
    q: "For a first degree burn on the hand, you should:",
    options: [
      "Immerse in cool water and/or apply a water-jel type burn dressing",
      "Apply burn ointments or ice",
      "Pop any blisters",
      "Wrap it tightly with tape"
    ],
    answer: 0,
    explain: "Cool the burn with <strong>cool water or a water-jel dressing</strong>; avoid ice and greasy ointments."
  },
  {
    q: "What are the four critical burn areas of the body?",
    options: [
      "Face and adjacent areas, feet, hands, and genital area",
      "Hands, feet, arms, and legs",
      "Chest, back, head, and neck",
      "Knees, elbows, shoulders, and hips"
    ],
    answer: 0,
    explain: "Critical burn areas are the <strong>face/adjacent areas, hands, feet, and genitals</strong>."
  },
  {
    q: "Second- and third-degree burns in critical areas or covering a large area require:",
    options: [
      "Immediate medical care at a burn center or hospital",
      "Merely first aid measures",
      "Only over-the-counter ointment",
      "No treatment if there's no pain"
    ],
    answer: 0,
    explain: "Serious or critical-area burns need <strong>immediate professional care</strong>."
  },
  {
    q: "For burns on the hands or arms, you should:",
    options: [
      "Remove rings, watches, and bracelets before swelling occurs",
      "Apply butter to soothe the area",
      "Leave all jewelry on",
      "Apply ice directly"
    ],
    answer: 0,
    explain: "<strong>Remove jewelry</strong> before swelling traps it; never use butter on burns."
  },
  {
    q: "If a chemical is splashed on a person, how long should the area be flushed?",
    options: [
      "At least 30 minutes or until all chemicals have been removed",
      "At least 10 minutes",
      "About 1 minute",
      "Only if it stings"
    ],
    answer: 0,
    explain: "Flush chemical exposures for <strong>at least 30 minutes</strong> or until all chemical is removed."
  },
  {
    q: "You should remove all clothing from a burn area when the burn was caused by:",
    options: ["Chemicals", "Fire", "Sunlight", "Hot water"],
    answer: 0,
    explain: "Remove clothing for <strong>chemical</strong> burns; don't peel away clothing stuck to fire burns."
  },
  {
    q: "The most common eye injuries result from:",
    options: [
      "Dust particles, eyelashes, and other foreign matter in the eye",
      "Blunt objects striking the eye",
      "Chemical splashes",
      "Bright light exposure"
    ],
    answer: 0,
    explain: "Most eye injuries are from small <strong>foreign matter</strong> getting into the eye."
  },
  {
    q: "If an object is sticking into the eye, you should:",
    options: [
      "Prevent movement of the object, bandage both eyes, and get immediate medical attention",
      "Gently remove it with a matchstick",
      "Rinse it out with water under pressure",
      "Rub the eye to dislodge it"
    ],
    answer: 0,
    explain: "<strong>Stabilize the object</strong> and cover both eyes to limit movement, then get immediate care."
  },
  {
    q: "A torn eyelid is:",
    options: [
      "A serious problem — get immediate medical help",
      "A minor problem that will heal itself",
      "Treated by taping the eye shut for a week",
      "Not a concern unless it bleeds"
    ],
    answer: 0,
    explain: "A torn eyelid is <strong>serious</strong>; seek immediate medical help."
  },
  {
    q: "An unconscious person who has been vomiting should be:",
    options: [
      "Placed in the recovery position",
      "Placed flat on their back",
      "Sat upright",
      "Given water"
    ],
    answer: 0,
    explain: "The <strong>recovery position</strong> keeps the airway clear and prevents choking on vomit."
  },
  {
    q: "To prevent fainting, a person who is dizzy and weak should:",
    options: [
      "Lie down flat with their legs elevated",
      "Sit down and take deep breaths",
      "Stand and walk around",
      "Drink coffee"
    ],
    answer: 0,
    explain: "Lying down with <strong>legs raised</strong> improves blood flow to the brain."
  },
  {
    q: "You can often identify an unconscious diabetic by:",
    options: [
      "A medical tag worn on a necklace or bracelet",
      "The way they are breathing",
      "Their skin color",
      "The clothes they wear"
    ],
    answer: 0,
    explain: "<strong>Medical ID tags</strong> often reveal diabetes and other conditions."
  },
  {
    q: "Sugar should be given at once to a known diabetic in distress because:",
    options: [
      "Insulin shock from lack of sugar can quickly lead to death",
      "All diabetics require sugar at all times",
      "Sugar cures diabetes",
      "It prevents fainting in everyone"
    ],
    answer: 0,
    explain: "If unsure, sugar treats <strong>insulin shock</strong> (low blood sugar), which can be rapidly fatal."
  },
  {
    q: "When a person has taken poison, you should:",
    options: [
      "Not administer Syrup of Ipecac",
      "Always give Syrup of Ipecac",
      "Give them milk to coat the stomach",
      "Make them exercise"
    ],
    answer: 0,
    explain: "Syrup of Ipecac is <strong>no longer recommended</strong>; call Poison Control or 911."
  },
  {
    q: "A conscious person has swallowed a poison. What do you do first?",
    options: [
      "Contact the Poison Control Center or call 911",
      "Give Syrup of Ipecac",
      "Make them vomit",
      "Give them lots of water"
    ],
    answer: 0,
    explain: "Call <strong>Poison Control or 911</strong> first for instructions."
  },
  {
    q: "An unconscious poisoned patient must be watched closely to be sure:",
    options: [
      "Breathing and circulation are maintained",
      "Body temperature is normal",
      "They stay warm",
      "They don't talk"
    ],
    answer: 0,
    explain: "Monitor <strong>airway, breathing, and circulation</strong> in an unconscious poisoned patient."
  },
  {
    q: "The best way to protect someone who is having a seizure is to:",
    options: [
      "Clear the area of things that might harm them",
      "Hold them still to stop the movement",
      "Put something in their mouth",
      "Splash water on their face"
    ],
    answer: 0,
    explain: "<strong>Clear hazards away</strong>; never restrain them or put anything in their mouth."
  },
  {
    q: "Heat stroke is considered life threatening because:",
    options: [
      "Body temperature rises rapidly to dangerous levels",
      "It always causes broken bones",
      "It lowers body temperature",
      "It only affects breathing"
    ],
    answer: 0,
    explain: "In heat stroke the body's temperature <strong>soars dangerously</strong> — a true emergency."
  },
  {
    q: "A person working in the sun feels faint, is sweating, and has a normal body temperature. The first aid is:",
    options: [
      "Rest in the shade and give non-alcoholic liquids",
      "Apply ice or ice water directly to the body",
      "Have them keep working slowly",
      "Give them an alcoholic drink"
    ],
    answer: 0,
    explain: "For heat exhaustion: move to <strong>shade, rest, and give cool non-alcoholic fluids</strong>."
  },
  {
    q: "When giving first aid for frostbitten fingers, you should:",
    options: [
      "Never rub snow on the frozen area",
      "Rub snow on the frozen area",
      "Rub the area briskly with your hands",
      "Break any blisters that form"
    ],
    answer: 0,
    explain: "<strong>Never rub</strong> frostbite or apply snow; rewarm gently instead."
  },
  {
    q: "When treating frostbite, you should NOT:",
    options: [
      "Apply a heat lamp to the affected area",
      "Wrap the affected area gently in warm material",
      "Move the person to a warm place",
      "Give warm, non-alcoholic drinks"
    ],
    answer: 0,
    explain: "Don't use direct/intense heat like a <strong>heat lamp</strong>; rewarm gradually and gently."
  },
  {
    q: "Most snake bites occur:",
    options: [
      "When people are close to their homes",
      "Deep in the wilderness",
      "Only at night",
      "Only in deserts"
    ],
    answer: 0,
    explain: "Most snake bites happen <strong>near home</strong>, not in remote wilderness."
  },
  {
    q: "First aid for a snake bite should include:",
    options: [
      "Keeping the bitten part lower than heart level",
      "Making two incisions through the bite area",
      "Applying a tight tourniquet above the bite",
      "Sucking out the venom"
    ],
    answer: 0,
    explain: "Keep the bite <strong>below heart level</strong>; don't cut, suck, or apply a tourniquet."
  },
  {
    q: "A person suspended 20 minutes in a harness after a fall is dizzy, pale, and sweating. You should:",
    options: [
      "Have them lie flat and relax until EMS arrive",
      "Place them sitting up with legs outstretched",
      "Have them stand and walk it off",
      "Keep them suspended a while longer"
    ],
    answer: 0,
    explain: "Lay them <strong>flat</strong> to let circulation return safely (suspension trauma); monitor until EMS arrive."
  }
];
