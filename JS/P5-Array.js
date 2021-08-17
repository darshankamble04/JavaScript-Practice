console.log("Its Working");

// ARRAYS


let students = ["Drashan", "Pratik", "Om", "Ram", "Sham"];
let num = [12, 25, 33.33, 50, 258, 45, 13, 2, 9];
let groceries = ["Egg", "Potato", "Tomato", "Banana", "Apple"];

// Iterating an array-------------------------------
// for (let i = 0; i < students.length; i++) {
//     // console.log(students[i]);
// }
// for (let names in students) {
//     // console.log(students[names]);
// }
// for (let names of students) {
//     console.log(names);
// }
// students.forEach((e) => {
//     // console.log(e)
// })

// ARRAY METHODS------------------------------
let std = ["Drashan", "Pratik", 12, 0, "Om", "Ram", "Sham"];

// which change main array
// console.log(std.pop());
// console.log(std
// console.log(std.push("Yash"));
// console.log(std
// console.log(std.shift())
// console.log(std
// console.log(std.unshift("Jai"));
// console.log(std
// console.log(delete std[0]);
// console.log(std
// console.log(std.splice(6, 1));

// which dont change main array , it creats new arry
// console.log(std.concat(groceries));
// console.log(std
// console.log(std.slice(0, 2)) 
// console.log(std

// console.log(std.indexOf("Ram"));
// console.log(std.lastIndexOf("Sham"));
// console.log(std.includes("Yash"));

// Sort methods  ,  it creats new arry
console.log(std.sort());
console.log(std);
// console.log(std.reverse())

num = [12, 25, 33.33, 50, 258, 45, 13, 2, 9];

let obj = Object.assign({}, num) // it converts an array to Object
console.log(obj);

let mapj = num.map((e, i) => e * 2)
console.log(mapj) //[24, 50, 66.66, 100, 516, 90, 26, 4]

// let filterj = num.filter((e, i) => {
//     if (e % 2 != 0) {
//         return e;
//     }
// })
// console.log(filterj) // returns all even num in array

// let reducej = num.reduce((e, i) => {
//     console.log(e, i)
//     return (e + i)
// })
// console.log(reducej)

// let everyj = num.every((e) => e < 340); // it check the condition for every ele and return true or false 
// console.log(everyj);

// let findj = num.find((e) => e < 10);
// console.log(findj); // 2