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