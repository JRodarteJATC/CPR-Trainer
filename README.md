# CPR Trainer

A browser-based app to **train and practice hands-only and standard CPR**. No install, no build step — open `index.html` and go. Four modules:

1. **Compression Metronome** — a 100–120 BPM audio + visual pacer so you can practice compression rhythm and depth timing.
2. **Step-by-Step Guide** — the full adult CPR sequence: scene safety → check → call → compress → breaths → AED.
3. **Knowledge Quiz** — multiple-choice questions with instant explanations and scoring.
4. **Scenario Simulator** — timed emergency scenarios where your choices have consequences and you get feedback.

> ⚠️ **This is a practice and study aid, not a substitute for certified, hands-on CPR training.** Guidelines here follow the 2020 AHA adult Basic Life Support recommendations, but you should take an accredited course (AHA, Red Cross, or equivalent) to be qualified to respond to a real emergency. In a real emergency, call your local emergency number immediately.

## Run it

Just open the file:

```bash
# macOS
open index.html
# or serve it locally
python3 -m http.server 8000   # then visit http://localhost:8000
```

No dependencies. Works offline.

## Project structure

```
cpr-trainer/
├── index.html          # App shell + module navigation
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── app.js          # Routing between modules
│   ├── metronome.js    # Compression metronome
│   ├── guide.js        # Step-by-step guide
│   ├── quiz.js         # Knowledge quiz
│   └── scenarios.js    # Scenario simulator
├── data/
│   ├── quiz.js         # Quiz question bank
│   └── scenarios.js    # Scenario definitions
├── LICENSE
└── README.md
```

## Adding content

- **Quiz questions:** append objects to the array in `data/quiz.js`.
- **Scenarios:** add a scenario object to `data/scenarios.js`.

Both are plain JavaScript arrays with no tooling required.

## Key guideline reference (adult)

- Rate: **100–120 compressions/min**
- Depth: **at least 2 in (5 cm), no more than 2.4 in (6 cm)**
- Allow **full chest recoil** between compressions
- Ratio: **30 compressions : 2 breaths** (standard CPR)
- Minimize interruptions; switch compressors every ~2 min

## License

MIT — see [LICENSE](LICENSE).
