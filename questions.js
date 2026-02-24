const quizData = {
  javascript: {
    easy: [
      {
        question: "Which keyword declares a variable?",
        options: ["var", "let", "const", "All of the above"],
        answer: 3,
        explanation: "JS supports var, let, and const.",
      },
      {
        question: "Which symbol is used for comments?",
        options: ["//", "#", "/* */", "<!-- -->"],
        answer: 0,
        explanation: "// is for single-line comments in JS.",
      },
      {
        question: "What is 2 + '2' in JavaScript?",
        options: ["4", "'22'", "NaN", "'4'"],
        answer: 1,
        explanation:
          "JS converts number to string when using + operator with a string.",
      },
      {
        question: "Which method prints to console?",
        options: ["print()", "console.log()", "echo()", "log()"],
        answer: 1,
        explanation: "console.log() prints output in JS.",
      },
      {
        question: "Which operator is for equality without type coercion?",
        options: ["==", "===", "!=", "!=="],
        answer: 1,
        explanation: "=== checks both value and type.",
      },
    ],
    medium: [
      {
        question: "What is closure in JS?",
        options: [
          "Function inside function",
          "Access outer scope after execution",
          "Block scope",
          "Hoisting",
        ],
        answer: 1,
        explanation: "Closure allows a function to remember outer variables.",
      },
      {
        question: "Which method converts object to JSON string?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "toJSON()",
          "parseJSON()",
        ],
        answer: 1,
        explanation: "JSON.stringify() converts object to string.",
      },
      {
        question: "Which event triggers when page fully loads?",
        options: ["onclick", "onload", "onhover", "onchange"],
        answer: 1,
        explanation: "onload triggers when page finishes loading.",
      },
      {
        question: "Which of these is NOT a JS data type?",
        options: ["String", "Number", "Boolean", "Character"],
        answer: 3,
        explanation: "Character is not a JS data type.",
      },
      {
        question: "What is NaN?",
        options: [
          "Not a Number",
          "Null and Nothing",
          "Number zero",
          "Syntax error",
        ],
        answer: 0,
        explanation: "NaN means Not a Number.",
      },
    ],
    hard: [
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
    ],
  },

  python: {
    easy: [
      {
        question: "Which symbol starts a comment?",
        options: ["//", "#", "/* */", "<!-- -->"],
        answer: 1,
        explanation: "Python uses # for comments.",
      },
      {
        question: "Which keyword prints output?",
        options: ["echo", "console.log", "print", "printf"],
        answer: 2,
        explanation: "Python uses print().",
      },
      {
        question: "Which data type stores True/False?",
        options: ["int", "str", "bool", "float"],
        answer: 2,
        explanation: "Boolean (bool) stores True/False.",
      },
      {
        question: "What is the extension for Python files?",
        options: [".py", ".java", ".js", ".txt"],
        answer: 0,
        explanation: ".py is the standard Python extension.",
      },
      {
        question: "Which keyword defines a function?",
        options: ["def", "func", "function", "lambda"],
        answer: 0,
        explanation: "Python uses def to define a function.",
      },
    ],
    medium: [
      {
        question: "What does len([1,2,3]) return?",
        options: ["3", "2", "1", "Error"],
        answer: 0,
        explanation: "len() returns number of items in a list.",
      },
      {
        question: "Which is correct to open a file for reading?",
        options: [
          "open('file.txt', 'r')",
          "open('file.txt', 'w')",
          "read('file.txt')",
          "file('file.txt')",
        ],
        answer: 0,
        explanation: "'r' opens file for reading.",
      },
      {
        question: "Which operator checks equality?",
        options: ["=", "==", "===", "!="],
        answer: 1,
        explanation: "== checks equality in Python.",
      },
      {
        question: "What is Python's indentation standard?",
        options: ["2 spaces", "4 spaces", "Tab only", "No indentation"],
        answer: 1,
        explanation: "PEP8 recommends 4 spaces.",
      },
      {
        question: "What does append() do?",
        options: [
          "Add element to list",
          "Remove element",
          "Sort list",
          "Print list",
        ],
        answer: 0,
        explanation: "append() adds element at end.",
      },
    ],
    hard: [
      {
        question: "What does PEP stand for?",
        options: [
          "Python Enhancement Proposal",
          "Program Execution Plan",
          "Python Easy Project",
          "Programming Entry Point",
        ],
        answer: 0,
        explanation: "PEP = Python Enhancement Proposal.",
      },
      {
        question: "Which method removes and returns last element?",
        options: ["remove()", "pop()", "del()", "cut()"],
        answer: 1,
        explanation: "pop() removes last item and returns it.",
      },
      {
        question: "Which keyword handles exceptions?",
        options: ["try", "catch", "throw", "error"],
        answer: 0,
        explanation: "try is used with except to handle exceptions.",
      },
      {
        question: "Which keyword creates anonymous function?",
        options: ["def", "lambda", "func", "anonymous"],
        answer: 1,
        explanation: "lambda creates anonymous functions.",
      },
      {
        question: "Which operator is for floor division?",
        options: ["/", "//", "%", "**"],
        answer: 1,
        explanation: "// returns quotient without remainder.",
      },
    ],
  },

  html: {
    easy: [
      {
        question: "Which tag is largest heading?",
        options: ["<h1>", "<h6>", "<head>", "<title>"],
        answer: 0,
        explanation: "<h1> is the largest heading.",
      },
      {
        question: "Which tag creates paragraph?",
        options: ["<p>", "<para>", "<div>", "<section>"],
        answer: 0,
        explanation: "<p> creates a paragraph.",
      },
      {
        question: "Which tag is for links?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: 0,
        explanation: "<a> defines hyperlinks.",
      },
      {
        question: "Which tag is for image?",
        options: ["<img>", "<image>", "<src>", "<picture>"],
        answer: 0,
        explanation: "<img> embeds images.",
      },
      {
        question: "HTML stands for?",
        options: [
          "HyperText Markup Language",
          "HighText Markup Language",
          "Hyperlink Text Markup",
          "Hyper Tool Markup Language",
        ],
        answer: 0,
        explanation: "HTML = HyperText Markup Language.",
      },
    ],
    medium: [
      {
        question: "Which attribute specifies alternate text for image?",
        options: ["alt", "title", "src", "href"],
        answer: 0,
        explanation: "alt provides alternate text.",
      },
      {
        question: "Which tag is self-closing?",
        options: ["<div>", "<img>", "<p>", "<section>"],
        answer: 1,
        explanation: "<img> is self-closing.",
      },
      {
        question: "Which tag is for table row?",
        options: ["<td>", "<tr>", "<th>", "<table>"],
        answer: 1,
        explanation: "<tr> defines table row.",
      },
      {
        question: "Which attribute opens link in new tab?",
        options: [
          "href='_blank'",
          "target='_blank'",
          "newtab='true'",
          "open='new'",
        ],
        answer: 1,
        explanation: "target='_blank' opens link in new tab.",
      },
      {
        question: "Which tag groups input elements?",
        options: ["<form>", "<fieldset>", "<inputgroup>", "<group>"],
        answer: 1,
        explanation: "<fieldset> groups input elements.",
      },
    ],
    hard: [
      {
        question: "Which HTML element stores metadata?",
        options: ["<meta>", "<head>", "<header>", "<section>"],
        answer: 0,
        explanation: "<meta> stores metadata.",
      },
      {
        question: "Which attribute is used for inline styles?",
        options: ["class", "id", "style", "css"],
        answer: 2,
        explanation: "style allows inline CSS.",
      },
      {
        question: "Which tag represents a section?",
        options: ["<section>", "<div>", "<article>", "<header>"],
        answer: 0,
        explanation: "<section> represents a section.",
      },
      {
        question: "Which tag is for embedding video?",
        options: ["<video>", "<media>", "<source>", "<iframe>"],
        answer: 0,
        explanation: "<video> embeds video content.",
      },
      {
        question: "Which tag specifies list item?",
        options: ["<li>", "<ul>", "<ol>", "<item>"],
        answer: 0,
        explanation: "<li> is for list item.",
      },
    ],
  },

  css: {
    easy: [
      {
        question: "Which property changes text color?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: 2,
        explanation: "color changes text color.",
      },
      {
        question: "Which property changes background color?",
        options: ["background-color", "bg-color", "color", "background"],
        answer: 0,
        explanation: "background-color sets background.",
      },
      {
        question: "Which unit is relative?",
        options: ["px", "em", "%", "pt"],
        answer: 1,
        explanation: "em is relative to parent font size.",
      },
      {
        question: "Which property aligns text?",
        options: ["text-align", "align", "font-align", "text-position"],
        answer: 0,
        explanation: "text-align aligns text.",
      },
      {
        question: "Which tag links CSS file?",
        options: ["<link>", "<css>", "<style>", "<script>"],
        answer: 0,
        explanation: "<link> connects external CSS.",
      },
    ],
    medium: [
      {
        question: "Which selector targets ID?",
        options: [".id", "#id", "*id", "id"],
        answer: 1,
        explanation: "#id targets element with ID.",
      },
      {
        question: "Which selector targets class?",
        options: [".class", "#class", "*class", "class"],
        answer: 0,
        explanation: ".class targets class.",
      },
      {
        question: "Which property sets font size?",
        options: ["font-style", "font-weight", "font-size", "text-size"],
        answer: 2,
        explanation: "font-size sets font size.",
      },
      {
        question: "Which property sets border radius?",
        options: ["border-radius", "round-border", "radius", "border-style"],
        answer: 0,
        explanation: "border-radius rounds corners.",
      },
      {
        question: "Which property hides element?",
        options: [
          "visible: false",
          "display: none",
          "hide: true",
          "visibility: off",
        ],
        answer: 1,
        explanation: "display:none hides element completely.",
      },
    ],
    hard: [
      {
        question: "Which property defines flex container?",
        options: ["flex", "display:flex", "align:flex", "flex-container"],
        answer: 1,
        explanation: "display:flex makes a flex container.",
      },
      {
        question: "Which property sets element opacity?",
        options: ["opacity", "alpha", "visibility", "transparency"],
        answer: 0,
        explanation: "opacity sets transparency level.",
      },
      {
        question: "Which pseudo-class styles hover?",
        options: [":hover", ":active", ":focus", ":checked"],
        answer: 0,
        explanation: ":hover applies styles on hover.",
      },
      {
        question: "Which property sets grid columns?",
        options: [
          "grid-template-columns",
          "grid-columns",
          "grid-col",
          "grid-template",
        ],
        answer: 0,
        explanation: "grid-template-columns defines columns.",
      },
      {
        question: "Which property sets z-order?",
        options: ["z-index", "z-order", "stack-order", "layer-index"],
        answer: 0,
        explanation: "z-index controls stacking order.",
      },
    ],
  },
};

/* Load custom questions from admin */
const custom = JSON.parse(localStorage.getItem("customQuestions"));
if (custom) {
  for (let cat in custom) {
    for (let diff in custom[cat]) {
      quizData[cat][diff].push(...custom[cat][diff]);
    }
  }
}
