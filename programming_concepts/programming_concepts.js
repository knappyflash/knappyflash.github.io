const pageTitle = "programming_concepts";
window.addEventListener("load", function () {
  console.log(pageTitle + " Page is loaded");
  changeTitle();
});
function changeTitle() {
  try {
    const headerFrame = parent.frames["header"];
    const title = headerFrame?.document?.getElementById("topTitle");

    if (title) {
      title.textContent = pageTitle;
    }
  } catch (err) {
    /* Ignore if this page is not inside your frameset. */
  }
}



let editor;
let term;
const starterCode = `// Welcome to your JavaScript interpreter!

console.log("Hello world!");

let name = "Student";
console.log("Welcome,", name);

let answer = 2 + 2;
console.log("2 + 2 =", answer);

if (answer === 4) {
  console.log("Math still works!");
}

for (let i = 1; i <= 3; i++) {
  console.log("Loop number:", i);
}

answer;`;

window.addEventListener("load", function () {
  editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "javascript",
    lineNumbers: true,
    tabSize: 2,
    indentUnit: 2,
    cursorBlinkRate: 530,
    styleActiveLine: true,
    matchBrackets: true,
    lineWrapping: false,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  });

  editor.setValue(starterCode);

  term = new Terminal({
    cursorBlink: true,
    fontFamily: "Consolas, 'Courier New', monospace",
    fontSize: 15,
    theme: {
      background: "#000000",
      foreground: "#00ff66",
      cursor: "#00ff66",
      selectionBackground: "#335533",
    },
  });

  term.open(document.getElementById("terminal"));

  term.writeln("JavaScript Interpreter Ready");
  term.writeln("Click Run to execute your code.");
  term.writeln("");

  setTimeout(function () {
    editor.refresh();
    editor.focus();
  }, 50);

});

function formatValue(value) {
  if (typeof value === "object" && value !== null) {
    try {
      return JSON.stringify(value, null, 2);
    } catch (err) {
      return String(value);
    }
  }

  return String(value);
}


function runCode() {
  console.log("Hey You");
  if (!editor || !term) return;

  term.clear();
  term.writeln("> Running JavaScript...");
  term.writeln("");

  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  console.log = function (...args) {
    const message = args.map(formatValue).join(" ");
    term.writeln(message);
    originalLog.apply(console, args);
  };

  console.warn = function (...args) {
    const message = args.map(formatValue).join(" ");
    term.writeln("Warning: " + message);
    originalWarn.apply(console, args);
  };

  console.error = function (...args) {
    const message = args.map(formatValue).join(" ");
    term.writeln("Error: " + message);
    originalError.apply(console, args);
  };

  try {
    const code = editor.getValue();

    const result = (0, eval)(code);

    if (result !== undefined) {
      term.writeln("");
      term.writeln("Return value:");
      term.writeln(formatValue(result));
    }
  } catch (err) {
    term.writeln("");
    term.writeln("Error: " + err.message);
  } finally {
    console.log = originalLog;
    console.warn = originalWarn;
    console.error = originalError;
  }
}

function clearTerminal() {
  if (!term) return;
  term.clear();
  term.writeln("Terminal cleared.");
}

function resetCode() {
  if (!editor || !term) return;

  editor.setValue(starterCode);
  term.clear();
  term.writeln("Code reset.");
  editor.focus();
}

