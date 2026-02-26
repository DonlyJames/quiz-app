/* ============================================================
   QUIZ MASTER — script.js
   Structure:
   1. Settings Module
   2. Audio Module
   3. State
   4. DOM References
   5. Init
   6. Quiz Logic
   7. UI Rendering
   8. Feedback & Answer Handling
   9. Navigation (Auto / Manual / Swipe)
   10. End Screen
   11. Settings Modal
   12. Utilities
   ============================================================ */

/* ─────────────────────────────────────────────────────────────
   1. SETTINGS MODULE
   Single source of truth for all user preferences.
   Both index.html and quiz.html read from the same key.
   ───────────────────────────────────────────────────────────── */
const Settings = (() => {
  const KEY = "quizSettings";

  const DEFAULTS = {
    sound: true,
    vibration: true,
    theme: "auto",
    nextMode: "auto",
  };

  function load() {
    try {
      return Object.assign(
        {},
        DEFAULTS,
        JSON.parse(localStorage.getItem(KEY) || "{}"),
      );
    } catch {
      return { ...DEFAULTS };
    }
  }

  function save(settings) {
    localStorage.setItem(KEY, JSON.stringify(settings));
  }

  function get(key) {
    return load()[key];
  }

  function set(key, value) {
    const current = load();
    current[key] = value;
    save(current);
  }

  return { load, save, get, set, DEFAULTS };
})();

/* ─────────────────────────────────────────────────────────────
   2. AUDIO MODULE
   Lazy-loads sounds. Only creates Audio objects once.
   Silently fails if files are missing — never crashes quiz.
   ───────────────────────────────────────────────────────────── */
const Audio = (() => {
  const cache = {};

  const FILES = {
    correct: "sounds/correct.mp3",
    wrong: "sounds/wrong.mp3",
    highScore: "sounds/high-score.mp3",
  };

  // Preload all sounds upfront
  function preload() {
    Object.entries(FILES).forEach(([key, src]) => {
      const audio = new window.Audio(src);
      audio.preload = "auto";
      cache[key] = audio;
    });
  }

  function play(name) {
    if (!Settings.get("sound")) return;
    const audio = cache[name];
    if (!audio) return;
    // Rewind if already playing — allows rapid replays
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Autoplay blocked — silently ignore
    });
  }

  return { preload, play };
})();

/* ─────────────────────────────────────────────────────────────
   3. STATE
   All mutable quiz state lives here — never scattered as
   loose variables. Makes it easy to reset or inspect.
   ───────────────────────────────────────────────────────────── */
const State = {
  questions: [],
  index: 0,
  score: 0,
  lives: 3,
  answered: false, // true after user taps an option
  canAdvance: false, // true once answer is confirmed — gates swipe/auto
  swipeHintShown: false, // show swipe hint only once per session
};

/* ─────────────────────────────────────────────────────────────
   4. DOM REFERENCES
   Cached once at startup. Never call getElementById in logic.
   ───────────────────────────────────────────────────────────── */
const El = {
  question: document.getElementById("question"),
  feedback: document.getElementById("feedbackContainer"),
  progressText: document.getElementById("progressText"),
  progressBar: document.getElementById("progressBar"),
  livesDisplay: document.getElementById("livesDisplay"),
  highScore: document.getElementById("highScoreDisplay"),
  options: document.getElementById("optionsContainer"),
  endActions: document.getElementById("endActions"),
  swipeHint: document.getElementById("swipeHint"),
  quizContainer: document.getElementById("quizContainer"),
  questionCard: document.getElementById("questionCard"),
};

/* ─────────────────────────────────────────────────────────────
   5. INIT
   ───────────────────────────────────────────────────────────── */
const quizMode = localStorage.getItem("quizMode");
const quizFile = localStorage.getItem("questionFile");

// Guard: redirect home if no file selected
if (!quizFile) {
  location.href = "index.html";
}

// Preload audio on first user interaction (browser requirement)
document.addEventListener("touchstart", Audio.preload, { once: true });
document.addEventListener("mousedown", Audio.preload, { once: true });

// Boot
loadQuestions(quizFile);
initSettingsModal();
initSwipe();

/* ─────────────────────────────────────────────────────────────
   6. QUIZ LOGIC
   ───────────────────────────────────────────────────────────── */
function loadQuestions(file) {
  // ── API path: questions were fetched on index.html and stored ──
  if (file && file.startsWith("api:")) {
    const raw = localStorage.getItem("apiQuestions");

    if (!raw) {
      showError("No questions found. Please go back and try again.");
      return;
    }

    try {
      const questions = JSON.parse(raw);
      // Clear stored questions so stale data isn't reused on reload
      localStorage.removeItem("apiQuestions");
      bootQuiz(questions);
    } catch {
      showError("Failed to parse questions.");
    }
    return;
  }

  // ── Local file path ────────────────────────────────────────────
  const script = document.createElement("script");
  script.src = file;

  script.onload = () => {
    if (typeof QUESTIONS === "undefined" || !QUESTIONS.length) {
      showError("Failed to load questions.");
      return;
    }
    bootQuiz(QUESTIONS);
  };

  script.onerror = () => showError("Could not load question file.");
  document.body.appendChild(script);
}

// Shared boot logic — called by both local and API paths
function bootQuiz(source) {
  State.questions =
    quizMode === "endless"
      ? shuffle([...source])
      : shuffle([...source]).slice(0, 10);

  if (quizMode === "endless") {
    renderLives();
  }

  loadQuestion();
}

function loadQuestion() {
  const q = State.questions[State.index];

  // Reset per-question state
  State.answered = false;
  State.canAdvance = false;

  // Hide manual-mode next button
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.style.display = "none";

  // Progress
  const total = State.questions.length;
  const current = State.index + 1;
  El.progressText.textContent = `${current} / ${total}`;
  El.progressBar.style.width = `${(current / total) * 100}%`;

  // Question text — trigger entrance animation
  El.question.textContent = q.question;
  El.question.scrollTop = 0;
  El.questionCard.classList.remove("question-enter");
  // Force reflow to restart animation
  void El.questionCard.offsetWidth;
  El.questionCard.classList.add("question-enter");

  // Clear previous feedback
  El.feedback.innerHTML = "";

  // Render options
  renderOptions(q);
}

function checkAnswer(isCorrect, clickedBtn) {
  // Prevent double-tap
  if (State.answered) return;
  State.answered = true;

  const q = State.questions[State.index];

  // Remove focus ring (mobile cosmetic)
  document.activeElement?.blur();

  // Disable all buttons
  const buttons = El.options.querySelectorAll(".opt");
  buttons.forEach((b) => (b.disabled = true));

  if (isCorrect) {
    State.score++;
    Audio.play("correct");
    clickedBtn.classList.add("correct");
    showFeedback(true, q.explanation);
  } else {
    Audio.play("wrong");

    if (Settings.get("vibration") && navigator.vibrate) {
      navigator.vibrate([80, 40, 80]);
    }

    clickedBtn.classList.add("wrong");

    // Reveal the correct button using data attribute (works after shuffling)
    buttons.forEach((b) => {
      if (b.dataset.correct === "true") b.classList.add("correct");
    });

    if (quizMode === "endless") {
      State.lives = Math.max(0, State.lives - 1);
      renderLives();
    }

    showFeedback(false, q.explanation);
  }

  // Allow advancing after feedback is shown
  State.canAdvance = true;

  const nextMode = Settings.get("nextMode");

  if (quizMode === "endless" && State.lives <= 0) {
    // Game over — wait for user to see feedback then end
    setTimeout(endQuiz, 2200);
    return;
  }

  if (nextMode === "auto") {
    setTimeout(advance, 2200);
  } else {
    // Manual mode — show Next button (desktop) and swipe hint (mobile, once)
    const nextBtn = document.getElementById("nextBtn");
    const isTouchDevice = navigator.maxTouchPoints > 0;

    if (nextBtn) nextBtn.style.display = "block";

    if (!State.swipeHintShown && isTouchDevice) {
      State.swipeHintShown = true;
      El.swipeHint.style.display = "block";
      setTimeout(() => (El.swipeHint.style.display = "none"), 2600);
    }
  }
}

function advance() {
  if (!State.canAdvance) return;
  State.index++;
  State.index < State.questions.length ? loadQuestion() : endQuiz();
}

/* ─────────────────────────────────────────────────────────────
   7. UI RENDERING
   ───────────────────────────────────────────────────────────── */
function renderOptions(q) {
  El.options.innerHTML = "";

  // Build option objects preserving correct flag
  let options = q.options.map((text, i) => ({
    text,
    correct: i === q.answer,
  }));

  options = shuffle(options);

  options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.classList.add("opt");
    btn.textContent = option.text;
    btn.dataset.correct = option.correct; // used in checkAnswer to reveal correct
    btn.style.animationDelay = `${i * 60}ms`; // stagger entrance
    btn.addEventListener("click", () => checkAnswer(option.correct, btn));
    El.options.appendChild(btn);
  });
}

function renderLives() {
  const { lives } = State;
  El.livesDisplay.textContent = "❤️".repeat(lives) + "🖤".repeat(3 - lives);
}

function showFeedback(isCorrect, explanation) {
  const box = document.createElement("div");
  box.classList.add("feedback-box", isCorrect ? "correct" : "wrong");

  const icon = isCorrect ? "✅" : "❌";
  const label = isCorrect ? "Correct!" : "Wrong!";

  box.innerHTML = `
    <strong>${icon} ${label}</strong>
    ${explanation ? `<small>${explanation}</small>` : ""}
  `;

  El.feedback.innerHTML = "";
  El.feedback.appendChild(box);
}

function showError(msg) {
  El.question.textContent = msg;
  El.options.innerHTML = "";
}

/* ─────────────────────────────────────────────────────────────
   8. END SCREEN
   ───────────────────────────────────────────────────────────── */
function endQuiz() {
  El.progressBar.style.width = "100%";
  El.question.textContent = "Quiz Complete!";
  El.options.innerHTML = "";
  El.feedback.innerHTML = `
    <div class="feedback-box correct">
      <strong>🏁 Final Score: ${State.score} / ${State.questions.length}</strong>
    </div>
  `;

  if (quizMode === "endless") {
    const saveKey = `highScore_${quizFile}`;
    const lastHigh = parseInt(localStorage.getItem(saveKey) || "0", 10);

    if (State.score > lastHigh) {
      localStorage.setItem(saveKey, State.score);
      El.highScore.innerHTML = `⭐ New High Score: ${State.score}!`;
      Audio.play("highScore");
    } else {
      El.highScore.innerHTML = `🏆 Best: ${lastHigh}`;
    }

    El.highScore.style.display = "block";
  }

  El.endActions.style.display = "flex";
  El.swipeHint.style.display = "none";
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.style.display = "none";
}

/* ─────────────────────────────────────────────────────────────
   9. NAVIGATION — SWIPE / KEYBOARD / BUTTON
   All three input methods call the same advance() function.
   - Touch:    swipe left (mobile)
   - Keyboard: ArrowRight, Space, Enter (desktop)
   - Button:   #nextBtn appears after answering in manual mode
   Only active after canAdvance is true (answer confirmed).
   Ignores vertical scrolls and right/up/down swipes.
   ───────────────────────────────────────────────────────────── */
function initNavigation() {
  // ── Touch swipe ──────────────────────────────────────────
  let startX = 0;
  let startY = 0;

  El.quizContainer.addEventListener(
    "touchstart",
    (e) => {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    },
    { passive: true },
  );

  El.quizContainer.addEventListener(
    "touchend",
    (e) => {
      if (!State.canAdvance) return;
      if (Settings.get("nextMode") !== "manual") return;

      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      const isHorizontal = Math.abs(dx) > Math.abs(dy);
      const isLongEnough = Math.abs(dx) > 50;
      const isLeftSwipe = dx < 0;

      if (isHorizontal && isLongEnough && isLeftSwipe) {
        advance();
      }
    },
    { passive: true },
  );

  // ── Keyboard (desktop) ───────────────────────────────────
  // Works in both auto and manual mode — always a nice shortcut
  document.addEventListener("keydown", (e) => {
    if (!State.canAdvance) return;
    if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
      e.preventDefault(); // prevent Space from scrolling page
      advance();
    }
  });

  // ── Next button ───────────────────────────────────────────
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", advance);
  }
}

/* ─────────────────────────────────────────────────────────────
   10. SETTINGS MODAL
   Shared logic that works on both index.html and quiz.html.
   Reads/writes through Settings module — no direct localStorage.
   ───────────────────────────────────────────────────────────── */
function initSettingsModal() {
  const overlay = document.getElementById("modalOverlay");
  const openBtn = document.getElementById("settingsBtn");
  const closeBtn = document.getElementById("closeModal");

  // Elements might not exist on every page — guard each one
  if (!overlay || !openBtn) return;

  // Open / close
  openBtn.addEventListener("click", () => overlay.classList.add("active"));
  closeBtn?.addEventListener("click", () => overlay.classList.remove("active"));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("active");
  });

  // ── Populate controls from saved settings ──────────────────
  const s = Settings.load();

  const soundToggle = document.getElementById("soundToggle");
  const vibrationToggle = document.getElementById("vibrationToggle");

  if (soundToggle) {
    soundToggle.checked = s.sound;
    soundToggle.addEventListener("change", (e) => {
      Settings.set("sound", e.target.checked);
    });
  }

  if (vibrationToggle) {
    vibrationToggle.checked = s.vibration;
    vibrationToggle.addEventListener("change", (e) => {
      Settings.set("vibration", e.target.checked);
    });
  }

  initPillGroup("themeGroup", s.theme, (val) => {
    Settings.set("theme", val);
    applyTheme(val);
  });

  initPillGroup("nextModeGroup", s.nextMode, (val) => {
    Settings.set("nextMode", val);
  });
}

/* ─────────────────────────────────────────────────────────────
   11. UTILITIES
   ───────────────────────────────────────────────────────────── */

// Fisher-Yates shuffle — always returns a new array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Pill group selector — used by settings modal
function initPillGroup(groupId, currentValue, onChange) {
  const group = document.getElementById(groupId);
  if (!group) return;

  group.querySelectorAll(".pill").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.value === currentValue);

    pill.addEventListener("click", () => {
      group
        .querySelectorAll(".pill")
        .forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      onChange(pill.dataset.value);
    });
  });
}

// Apply theme — mirrors the inline <head> script logic
function applyTheme(theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "auto" && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
}
