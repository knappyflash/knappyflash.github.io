// Boolean Operators:
//      not: !
//      or: ||
//      and: &&
//      xor: ^

let isWeekday = false;
let isHoliday = true;

// canGotToStore = is a weekday or not a weekday
let canGoToStore = isWeekday || !isWeekday;

// canGoToSchrool = is a weekday and not a holiday
let canGoToSchool = isWeekday && !isHoliday;

console.log("canGoToStore: " + canGoToStore)
console.log("canGoToSchool: " + canGoToSchool)