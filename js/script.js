let questions = [];
let index = 0;
let score = 0;
let lives = 3;
let soundEnabled = true;

const mode = localStorage.getItem("quizMode");
const file = localStorage.getItem("questionFile");

// UI Elements
const questionEl = document.getElementById("question");
const feedbackEl = document.getElementById("feedback");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const livesDisplay = document.getElementById("livesDisplay");
const highScoreEl = document.getElementById("highScoreDisplay");

// Audio
const sounds = {
  correct: new Audio("sounds/correct.mp3"),
  wrong: new Audio("sounds/wrong.mp3"),
  highScore: new Audio("sounds/high-score.mp3"), // Reusing your timeout as highscore or replace
};

if (!file) location.href = "index.html";

// 1. Initialize
loadQuestions(file);

function loadQuestions(file) {
  const script = document.createElement("script");
  script.src = file;
  script.onload = () => {
    // QUESTIONS comes from the loaded script file
    questions =
      mode === "endless" ? shuffle(QUESTIONS) : shuffle(QUESTIONS).slice(0, 10);
    if (mode === "endless") livesDisplay.textContent = "❤️❤️❤️";
    loadQuestion();
  };
  document.body.appendChild(script);
}

function loadQuestion() {
  const q = questions[index];
  progressText.textContent = `Question ${index + 1} of ${questions.length}`;
  questionEl.textContent = q.question;

  const progressPercent = (index / questions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  const buttons = document.querySelectorAll(".opt");
  buttons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.disabled = false;
    btn.style.display = "block";
    btn.classList.remove("correct", "wrong");
  });
  feedbackEl.innerHTML = "";
}

function checkAnswer(i) {
  const q = questions[index];
  const buttons = document.querySelectorAll(".opt");
  buttons.forEach((b) => (b.disabled = true));

  if (i === q.answer) {
    score++;
    if (soundEnabled) sounds.correct.play();

    // Highlight correct answer in green
    buttons[i].classList.add("correct");

    feedbackEl.innerHTML = `<span style="color: green">✅ Correct!</span><br><small>${q.explanation}</small>`;
  } else {
    if (soundEnabled) sounds.wrong.play();

    if (mode === "endless") {
      lives--;
      livesDisplay.textContent = "❤️".repeat(lives) + "🖤".repeat(3 - lives);
    }

    // Highlight selected wrong answer in red
    buttons[i].classList.add("wrong");

    // Highlight correct answer in green
    buttons[q.answer].classList.add("correct");

    feedbackEl.innerHTML = `<span style="color: red">❌ Wrong!</span><br><small>${q.explanation}</small>`;
  }

  if (mode === "endless" && lives <= 0) {
    setTimeout(() => {
      alert("Out of lives!");
      endQuiz();
    }, 2000);
  } else {
    setTimeout(next, 3500);
  }
}

function next() {
  index++;
  index < questions.length ? loadQuestion() : endQuiz();
}

function endQuiz() {
  progressBar.style.width = "100%";
  questionEl.textContent = "Quiz Finished!";

  if (mode === "endless") {
    const saveKey = `highScore_${file}`;
    const lastHigh = localStorage.getItem(saveKey) || 0;
    if (score > lastHigh) {
      localStorage.setItem(saveKey, score);
      highScoreEl.innerHTML = `⭐ NEW HIGH SCORE: ${score}!`;
      if (soundEnabled) sounds.highScore.play();
    } else {
      highScoreEl.innerHTML = `🏆 Current High Score: ${lastHigh}`;
    }
    highScoreEl.style.display = "block";
  }

  feedbackEl.innerHTML = `Final Score: ${score}/${questions.length}`;
  document.querySelectorAll(".opt").forEach((b) => (b.style.display = "none"));
  document.getElementById("restartBtn").style.display = "block";
  document.getElementById("homeBtn").style.display = "block";
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  document.getElementById("soundToggle").textContent = soundEnabled
    ? "🔊 Sound"
    : "🔈 Muted";
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
