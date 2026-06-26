const pageTitle = "Programming Concepts";
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

`;

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

const leasonDiv = document.getElementById("leasonDiv")
const helloWorld_li = document.getElementById("helloWorld_li");
helloWorld_li.addEventListener("click", HelloWorldLesson);
function HelloWorldLesson(){
  console.log("Hello World!");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `The 'Hello World!' program is a programming Tradition.
The first program a programmer writes in a new programming language is 'Hello World!'.
The hello world program prints 'Hello World!' to the console/terminal.
Give it a shot in the js editor.
Click Run!`;

  editor.setValue(`// Hello World!

console.log("Hello world!");`);
}

const print_li = document.getElementById("print_li");
print_li.addEventListener("click", PrintLesson);
function PrintLesson(){
  console.log("Print");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Printing to the console/terminal is a coders best friend.
It can help with debugging, checking variable values, check if a line of code executed, give instruction, and much more.
printing sends a string of characters to the console/terminal.
Give it a shot in the js editor.
Feel free to change the text inside the double quotes.
Click Run!`;

  editor.setValue(`// Print

console.log("Print Something");

console.log("----------------");

console.log(2 + 3);

console.log("----------------");

console.log(Date());`);
}

const comments_li = document.getElementById("comments_li");
comments_li.addEventListener("click", CommentsLesson);
function CommentsLesson(){
  console.log("Comments");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Comments`;

  editor.setValue(`// Comments
`);
}

const dataTypes_li = document.getElementById("dataTypes_li");
dataTypes_li.addEventListener("click", DataTypesLesson);
function DataTypesLesson(){
  console.log("Data Types");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Data Types`;

  editor.setValue(`// Data Types
`);
}

const variables_li = document.getElementById("variables_li");
variables_li.addEventListener("click", VariablesLesson);
function VariablesLesson(){
  console.log("Variables");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Variables`;

  editor.setValue(`// Variables
`);
}

const conditional_li = document.getElementById("conditional_li");
conditional_li.addEventListener("click", ConditionalLesson);
function ConditionalLesson(){
  console.log("Conditional Statements");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Conditional Statements`;

  editor.setValue(`// Conditional Statements
`);
}

const functions_li = document.getElementById("functions_li");
functions_li.addEventListener("click", FunctionsLesson);
function FunctionsLesson(){
  console.log("Functions & Subroutines");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Functions & Subroutines`;

  editor.setValue(`// Functions & Subroutines
`);
}

const loops_li = document.getElementById("loops_li");
loops_li.addEventListener("click", LoopsLesson);
function LoopsLesson(){
  console.log("Loops");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Loops`;

  editor.setValue(`// Loops
`);
}

const binary_li = document.getElementById("binary_li");
binary_li.addEventListener("click", BinaryLesson);
function BinaryLesson(){
  console.log("Binary");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Binary`;

  editor.setValue(`// Binary
`);
}

const boolean_li = document.getElementById("boolean_li");
boolean_li.addEventListener("click", BooleanLesson);
function BooleanLesson(){
  console.log("Boolean Logic");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Boolean Logic`;

  editor.setValue(`// Boolean Logic
`);
}

const objects_li = document.getElementById("objects_li");
objects_li.addEventListener("click", ObjectsLesson);
function ObjectsLesson(){
  console.log("Objects & Classes");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Objects & Classes`;

  editor.setValue(`// Objects & Classes
`);
}

const progLanguages_li = document.getElementById("progLanguages_li");
progLanguages_li.addEventListener("click", ProgLanguagesLesson);
function ProgLanguagesLesson(){
  console.log("Programming Languages");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Programming Languages`;

  editor.setValue(`// Programming Languages
`);
}

const events_li = document.getElementById("events_li");
events_li.addEventListener("click", EventsLesson);
function EventsLesson(){
  console.log("Events");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Events`;

  editor.setValue(`// Events
`);
}

const errorHandling_li = document.getElementById("errorHandling_li");
errorHandling_li.addEventListener("click", ErrorHandlingLesson);
function ErrorHandlingLesson(){
  console.log("Error Handling");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Error Handling`;

  editor.setValue(`// Error Handling
`);
}