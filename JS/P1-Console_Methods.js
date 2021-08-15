console.log("it works");
console.assert(document.getElementById("name"), "Hii"); // if assumption will wrong then it is print as a worning
console.clear(); // console cleared
console.count("printed"); // printed: 1
console.error("it is an error");
console.group();
console.log("Hellow World");
console.groupCollapsed();
console.log("Hellow World");
console.groupEnd();
console.log("At the end of group");
console.table(["orange", "apple", "banana", "pineapple"]);
console.info("hello");
console.log("hellow World!");
console.time();
let fruitArr = ["orange", "apple", "banana", "pineapple"];
for (let i = 0; i < fruitArr.length; i++) {
    console.log(fruitArr[i])
}
console.timeEnd();