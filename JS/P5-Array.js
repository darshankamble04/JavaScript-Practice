console.log("Its Working");

// ARRAYS


let students = ["Drashan", "Pratik", "Om", "Ram", "Sham"];

let groceries = ["Egg", "Potato", "Tomato", "Banana", "Apple"];


// ARRAY METHODS

// Iterating an array
for (let i = 0; i < students.length; i++) {
    // console.log(students[i]);
}
for (let names in students) {
    // console.log(students[names]);
}
for (let names of students) {
    console.log(names);
}
students.forEach((e) => {
    // console.log(e)
})