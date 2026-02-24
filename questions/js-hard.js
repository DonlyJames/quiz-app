const QUESTIONS = [
  {
    question: "Which method is used to deep copy an object?",
    options: [
      "Object.assign()",
      "JSON.parse(JSON.stringify(obj))",
      "Spread operator",
      "Object.create()",
    ],
    answer: 1,
    explanation: "JSON.parse(JSON.stringify(obj)) makes deep copy.",
  },
  {
    question: "What is event bubbling?",
    options: [
      "Event triggers parent first",
      "Event triggers child first",
      "Event stops propagation",
      "JS error",
    ],
    answer: 0,
    explanation: "Bubbling makes event trigger parent after child.",
  },
  {
    question: "Which keyword prevents variable hoisting?",
    options: ["var", "let", "const", "None"],
    answer: 2,
    explanation: "const prevents hoisting for assignment.",
  },
  {
    question: "What is IIFE?",
    options: [
      "Immediately Invoked Function Expression",
      "Internal JS Function Element",
      "Input Function Interface",
      "Init Function Event",
    ],
    answer: 0,
    explanation: "IIFE runs immediately after declaration.",
  },
  {
    question: "What is 'use strict' for?",
    options: [
      "Enable strict mode",
      "Disable errors",
      "Enable lazy evaluation",
      "For CSS",
    ],
    answer: 0,
    explanation: "'use strict' enforces stricter JS rules.",
  },
];
