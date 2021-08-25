console.log("Its working");

// WINDOWS OBJECT
console.log(window)
console.log(window.prompt());
console.log(window.confirm());
console.log(window.close())
console.log(window.find("Darshan"));
console.log(window.focus())
console.log(window.localStorage);
console.log(window.location);
console.log(window.history.go(-1));


// DOM 

let containerj = document.getElementsByClassName("container");
console.log(containerj);
console.log(containerj[0].innerHTML = "This is container");
let boxj = document.getElementById("box")
boxj.innerHTML = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"

Array.from(containerj).forEach((e) => {
    e.style.background = "red";
});

let cond = document.querySelectorAll("#box")
console.log(cond.length)
Array.from(cond).forEach((e) => {
    e.style.background = "red"
})


console.log(document, )