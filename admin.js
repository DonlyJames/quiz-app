function addQuestion() {
  const category = document.getElementById("category").value;
  const difficulty = document.getElementById("difficulty").value;

  const question = {
    question: document.getElementById("question").value,
    options: [
      document.getElementById("opt1").value,
      document.getElementById("opt2").value,
      document.getElementById("opt3").value,
      document.getElementById("opt4").value,
    ],
    answer: Number(document.getElementById("answer").value),
    explanation: document.getElementById("explanation").value,
  };

  const key = "customQuestions";
  const stored = JSON.parse(localStorage.getItem(key)) || {};

  if (!stored[category]) stored[category] = {};
  if (!stored[category][difficulty]) stored[category][difficulty] = [];

  stored[category][difficulty].push(question);
  localStorage.setItem(key, JSON.stringify(stored));

  document.getElementById("status").textContent =
    "✅ Question added successfully!";

  // Clear inputs for next question
  document.getElementById("question").value = "";
  document.getElementById("opt1").value = "";
  document.getElementById("opt2").value = "";
  document.getElementById("opt3").value = "";
  document.getElementById("opt4").value = "";
  document.getElementById("answer").value = "";
  document.getElementById("explanation").value = "";
}
