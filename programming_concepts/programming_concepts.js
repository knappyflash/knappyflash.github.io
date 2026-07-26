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
  leasonDiv.textContent = `Comments
  
  Comments are ignored and will not be executed by the compiler/interpreter. In JavaScript comments are indicated by two slashes // at the beginning of the line. Comments can explain what a section of code is doing, can be a title, note, or date when a line of code is changed. Comments are also good for debugging. If you want to see if a line of code is the cause for a bug, just comment out the line instead of deleting it.
  `;

  editor.setValue(`// Comments

// #!#!# Comments Title #!#!#

// This is a note about notes about comments.

// This line of code was changed on 06/28/2026.

// console.log("This line will NOT execute!");
console.log("This line will execute!");


//This line is being tested to see if it is the bug.
// consol.log(1 / 0);

`);
}

const debugging_li = document.getElementById("debugging_li");
debugging_li.addEventListener("click", DebuggingLesson);
function DebuggingLesson(){
  console.log("Debugging");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Debugging
  
The term “debugging” means finding and fixing problems in code.
A bug is a flaw in the code that causes software to behave incorrectly or not as intended.

Example: An app crashes every time you tap “Submit.”

Fun fact: The term bug in computing started when a real moth was found inside a Harvard computer in 1947, causing trouble. So “debugging” means finding and fixing those problems.

  `;



  editor.setValue(`// Debugging

// Missing closing quote → "Alex should be "Alex".
let name = "Alex;

//Undefined variable → age was never created.
console.log(age);

//String + number bug → gives "105" instead of 15.
let total = 10 + "5";

//Reassigning a const → const values can’t be changed.
const score = 100; score = 200;


`);
}

const dataTypes_li = document.getElementById("dataTypes_li");
dataTypes_li.addEventListener("click", DataTypesLesson);
function DataTypesLesson(){
  console.log("Data Types");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Data Types

Data types are categories that tell a programming language what kind of value something is. For example, a value might be text, a number, a true/false value, or a more complex group of information. Programming languages use data types so they know what operations make sense — like adding numbers, joining text, or checking whether something is true. Different languages may have different built-in data types, but the idea is similar across programming languages.
  
  
  `;

  editor.setValue(`// Data Types

  // 1. String: text inside quotes
let username = "Alex";
console.log("Hello, " + username); // Uses the string in a message

// 2. Number: regular numbers, including decimals
let price = 19.99;
console.log(price * 2); // Uses the number in math

// 3. Boolean: true or false
let isLoggedIn = true;
console.log(isLoggedIn); // Used for yes/no logic

// 4. Undefined: declared but not given a value yet
let favoriteColor;
console.log(favoriteColor); // undefined

// 5. Null: intentionally empty or “nothing”
let selectedItem = null;
console.log(selectedItem); // null means no item selected

// 6. BigInt: very large whole numbers
let hugeNumber = 9007199254740993n;
console.log(hugeNumber + 2n); // BigInt math uses n

// 7. Symbol: a unique value, often used as a special object key
let id = Symbol("id");
console.log(id); // Creates a unique identifier

// 8. Objects: store related data in key-value pairs
let person1 = { name: "Steve", age: 28 };
let person2 = { name: "Alex", age: 23 };
console.log(person1.name + " is " + person1.age + " years old."); // Prints Steve's name and age
console.log(person2.name + " is " + person2.age + " years old."); // Prints Alex's name and age

    
`);
}

const variables_li = document.getElementById("variables_li");
variables_li.addEventListener("click", VariablesLesson);
function VariablesLesson(){
  console.log("Variables");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Variables
  
A variable is a named place to store information in a program. You can think of it like a labeled container: the label is the variable name, and the value inside is the data. Programs use variables to remember information, update it, and use it later. For example, a variable might store a person’s name, a player’s score, whether something is true or false, a list of items, or a group of related information. Different programming languages create variables in different ways, but the main idea is the same: variables let you save values and reuse them in your code.
  `;

  editor.setValue(`// Variables

// 1. String: stores text inside quotes
let username = "Alex";
console.log("Hello, " + username); // Uses the string variable in a message

// 2. Number: stores regular numbers, including decimals
let price = 19.99;
let quantity = 2;
console.log(price * quantity); // Uses number variables in math

// 3. Boolean: stores true or false
let isLoggedIn = true;
console.log("Logged in:", isLoggedIn); // Uses a boolean variable

// 4. Undefined: a variable declared but not given a value yet
let favoriteColor;
console.log(favoriteColor); // Prints undefined

// 5. Null: intentionally stores “nothing”
let selectedItem = null;
console.log(selectedItem); // Means no item is selected

// 6. BigInt: stores very large whole numbers
let hugeNumber = 9007199254740993n;
console.log(hugeNumber + 2n); // BigInt math uses n

// 7. Symbol: creates a unique value
let id = Symbol("id");
console.log(id); // Uses a unique identifier

// 8. Object: stores related data in key-value pairs
let person1 = { name: "Steve", age: 25 };
let person2 = { name: "Alex", age: 23 };

console.log(person1.name + " is " + person1.age + " years old."); // Uses object values together
console.log(person2.name + " is " + person2.age + " years old."); // Uses object values together
`);
}

const conditional_li = document.getElementById("conditional_li");
conditional_li.addEventListener("click", ConditionalLesson);
function ConditionalLesson(){
  console.log("Conditional Statements");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Conditional Statements
  
  Conditional statements help with branching logic. IF THIS THEN THAT. You use conditional statements when you want the program to do different things based on a condition. This can be thought of as the very basics of AI. People do this all the time naturally without thinking about it. If it rains, I will bring an umbrella. If it is dark, I will turn on the light. If it is late, I will go to bed. If it is cold, I will turn on the heater.
  `;

  editor.setValue(`// Conditional Statements

const WEATHER = {
  RAINING: "RAINING",
  SUNNY: "SUNNY"
};

const VISIBILITY = {
  BRIGHT: "BRIGHT",
  DARK: "DARK"
};

const TIME  = {
  LATE : "LATE ",
  EARLY: "EARLY"
};

const TEMPERATURE  = {
  HOT : "HOT ",
  COLD: "COLD"
};

let current_wather = WEATHER.RAINING;
let current_visibility = VISIBILITY.DARK
let current_time = TIME.LATE
let current_temperature = TEMPERATURE.COLD

if (current_wather == WEATHER.RAINING) {
  console.log("Bring an umbrella.");
} else {
  console.log("You do not need an umbrella.");
}

if (current_visibility == VISIBILITY.DARK) {
  console.log("Turn on the light.");
} else {
  console.log("Turn off the light.");
}

if (current_time == TIME.LATE) {
  console.log("Go to bed.");
} else {
  console.log("Stay awake.");
}

if (current_temperature == TEMPERATURE.COLD) {
  console.log("Turn on the heater.");
} else {
  console.log("Turn off the heater.");
}


`);
}

const functions_li = document.getElementById("functions_li");
functions_li.addEventListener("click", FunctionsLesson);
function FunctionsLesson(){
  console.log("Functions & Subroutines");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Functions & Subroutines
  
  Functions & Subroutines are named sections in a module that can run a code. 
  Functions can return a value and subroutines cannot. Besides that, 
  functions and subroutines are essentially the same thing,
  so I will just call them functions.  
  Functions can be called from other parts of the code. You can pass variables called arguments into a function. 
  These functions inputs are called parameters.`;

  editor.setValue(`// Functions & Subroutines

let person1 = { name: "Steve", age: 28 };
let person2 = { name: "Alex", age: 23 };

//The PrintPerson subroutine has a parameter “person”, 
// which accepts a person object as an argument. 
// The PrintPerson subroutine prints the persons name 
// and age to the console.
function PrintPerson(person) {
  console.log("Name: " + person.name);
  console.log("Age: " + person.age);
}

//The GetAge function has a parameter “person”, which 
// accepts a person object as an argument.
//The GetAge function returns the persons age.
function GetAge(person) {
  console.log("Getting " + person.name + "'s age.");
  return person.age
}

//The AgeDifference function has two parameters “age1” & “age2”,
// which accepts two age arguments as integers. 
//The function returns the difference in age.
function AgeDifference(age1, age2) {
  return age1 - age2;
}


PrintPerson(person1); //Prints Steve's info
PrintPerson(person2); //Prints Alex's info
let age_diff = AgeDifference(GetAge(person1), GetAge(person2)); //Assigns the age difference to the age_diff integer variable.
console.log("Steve & Alex are " + age_diff + " years apart from each other.");
`);
}

const loops_li = document.getElementById("loops_li");
loops_li.addEventListener("click", LoopsLesson);
function LoopsLesson(){
  console.log("Loops");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Loops
  
  Loops are awesome! Loops let you do the same thing many times. Like if you needed to print 2 persons names to the console, you could just write two lines to print those names. Not a big deal. But what if you wanted to print 1,000 names? Or a million names? You would not want to have to write a million lines of code just to print those names! This is where the loop becomes the hero of the day. Each loop is called an iteration. Three common loops are “While Loops”, “For Loops”, and “For Each Loops”. “While loops” will keep executing while a condition is true. “For Loops” will execute for a specific number of iterations. A “For Each Loop” will iterate through a list.
  `;

  editor.setValue(`// Loops

let my_counter = 0;
let names = ["Steve", "Alex", "Creeper", "Cow", "Chicken"];

// (While loop) While my_counter integer is less than 5 print;
while (my_counter < 5) {
  console.log("While Loop Iteration: " + my_counter);
  my_counter++;
}

// (For loop) While i is less than 5 print;
for (let i = 0; i < 5; i++) {
  console.log("For Loop Iteration: " + i);
}

// (For Each Loop) For each name in names print the name;
names.forEach((name, index) => {
  console.log("For Each Iteration: " + index, name)
})


// (2nd While Loop) While temp_name does not equal "Creeper", iterate through the names.
let temp_name;
my_counter = 0;
while (temp_name != "Creeper"){
  temp_name = names[my_counter];
  console.log("2nd While Loop Iteration: " + my_counter + " " + temp_name);
  my_counter++;
}
`);
}

const binary_li = document.getElementById("binary_li");
binary_li.addEventListener("click", BinaryLesson);
function BinaryLesson(){
  console.log("Binary");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Binary
  
  Computers hardware runs on binary. Binary is a counting system from 0 to 1. Instead of 0 to 9 like our normal decimal system. One of the main reasons binary was chosen as the counting system for computers is electricity has two states (on / off). CPUs (central processing unit) are the brain of the computer. CPUs can do math on binary numbers and execute binary commands. The CPU’s design architecture tells the CPU what sequence or code of binary numbers mean what command. In CPU x86 00000000 11011000 tells the CPU to add two binary numbers together.`;

  editor.setValue(`// Binary

console.log("Add binary numbers ten (1010) and eleven (1011) together")
let binAdd = (BigInt("0b" + "1010") + BigInt("0b" + "1011")).toString(2);
console.log("21, " + binAdd)

// Count in Binary 0 to 8
console.log("")
console.log("Count in Binary 0 to 8:")
for (let i = 0; i <= 8; i++) {
    console.log(i.toString(2));
}
`);
}

const boolean_li = document.getElementById("boolean_li");
boolean_li.addEventListener("click", BooleanLesson);
function BooleanLesson(){
  console.log("Boolean Logic");
  leasonDiv.style.whiteSpace = "pre-line";
  leasonDiv.textContent = `Boolean Logic
  
  Boolean Logic was introduced by George Boole in his first book The Mathematical Analysis of Logic in 1847. Then in the 1930s Claude Shannon discovered Boole’s math can be applied to electrical circuits. Boolean algebra is about mathematically demonstrating what is true or false, 1 or 0, on or off, binary. For instance, if it is Saturday or Monday, I can go to the store (True or False = True) (False or True = True). If it is Monday and not a holiday I can go to school (True and not(False) = True), but if it is Monday and a holiday I cannot go to school (True and False = False).
  `;

  editor.setValue(`// Boolean Logic

// Boolean Operators:
//      not: !
//      or: ||
//      and: &&
//      xor: ^

let isWeekday = false;
let isHoliday = true;

let canGoToStore = isWeekday || !isWeekday;
let canGoToSchool = isWeekday && !isHoliday;

console.log("canGoToStore: " + canGoToStore)
console.log("canGoToSchool: " + canGoToSchool)

    
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