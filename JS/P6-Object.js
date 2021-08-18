console.log("It Works");

// OBJECTS

// EXAMPLES--------------------------------------------------------
let stdInfo = {
    name: "Om",
    greeting: "Good marning",
    hobby: "Cricket",
    favLang: "JavaScript",
    aim: "Web Dev"
}

let marks = {
    ram: 33,
    sham: 38,
    darshan: 40,
    om: 20,
    pratik: 25
}

// A REAL LIFE EXAMPLE ---------------------------------------------
let user = {
    firstName: "Darshan",
    lastName: "Kamble",
    loginCount: 32,
    faceBookSignIn: true,
    courseList: [],
    buyAnyCourse: (function(courseName) {
        this.courseList.push(courseName);
    }),
    courseCount: (() => {
        return `${user.firstName} is enrolled in total ${user.courseList.length} courses`
    })
}

user.buyAnyCourse("Python Course");
user.buyAnyCourse("JavaScript Course");
// console.log(user.courseCount())
// END-------------------------------------------------------------------

// ITERATING OBJECT 

let val1 = Object.keys(marks);
// console.log(val1) // only iterate key and convert them into an array

for (let i = 0; i < val1.length; i++) {
    const ele = marks[val1[i]];
    // console.log(ele);
    // console.log(i);
}

// adding another key : value pair into object
// marks.Yash = 01;
// marks.gavri = 30;
// console.log(marks);

// let blank = new Object()
// blank.A1 = "AABB"
// blank.B2 = "ccdd"
// console.log(blank)

// CONSTRUCTOR IN OBJ

// function car(name, speed) {
//     this.carName = name;
//     this.carSpeed = speed;
// }
// let car1 = new car("BMW", 180);
// console.log(car1);


console.log(Math.pow(3, 4))