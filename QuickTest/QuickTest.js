// Binary

console.log("Add binary numbers ten and eleven together")
let binAdd = (BigInt("0b" + "1010") + BigInt("0b" + "1011")).toString(2);
console.log("21, " + binAdd)

// Count in Binary 0 to 20
console.log("")
console.log("Count in Binary 0 to 10:")
for (let i = 0; i <= 20; i++) {
    console.log(i.toString(2));
}


