console.log("It is Working");
let myAge = 38;;

switch (myAge) {
    case 18:
        console.log("u r 18");
        break;
    case 28:
        console.log("u r 28");
        break;
    case 38:
        console.log("u r 38");
        break;
    default:
        console.log("tell me your age")
        break;
}

// Loops
// ITERATION OF STRING :-
let str = "This is a string 2";
let str2 = "don";
for (let i = 0; i < str2.length; i++) {
    // console.log(str2[i]);
};
for (let char in str) {
    // console.log(str[char]);
    // console.log(char);
}
for (let char2 of str) {
    // console.log(char2);
}

// ITERATION OF ARRAY :-
let personArr = ["Darshan", "Harry", "Yash", "Pratik"]
for (let i = 0; i < personArr.length; i++) {
    // console.log(personArr[i]);
}
personArr.forEach((e) => {
    // console.log(e);
})
for (let name in personArr) {
    // console.log(personArr[name]);
}
for (let name2 of personArr) {
    // console.log(name2);
}

// ITERATION OF OBJECT :-
let obj = {
    Name: "Darshan",
    language: "JS",
    profession: "web dev",
    favPlace: "Gova"
}

for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    // console.log(element);
    // console.log(index);
}
for (let val in obj) {
    // console.log(obj[val]);
}