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