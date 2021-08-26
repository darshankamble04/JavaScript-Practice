console.log("It Works");
let name = "Darshan";
let greeting = "Good Evening";
let html = `<h1>This is heading</h1>            
<p>This is paragraph</p>                `;
let html2 = `<h1>This is heading</h1>            
<p>This is paragraph</p>1`;


// STRING METHODS  --------------------------------

// --- Adding two string
console.log(name + " " + greeting);
console.log(html.concat(name));
console.log(html.concat(name, greeting));

// --- which returns an index or a number
console.log(html.length);
console.log(html.indexOf("heading"));
console.log(html.search("h1"));
console.log(html.lastIndexOf("heading"));

// --- which returns whole string by taking some changes
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html.replace("<h1>", "</h2>"));
console.log(html.trim()) // it remove all whitespaces
console.log(html.repeat(12)); // it repeats str 12 times

// --- Itrate string with the help of index
console.log(html[1]);
console.log(html.charAt(3));
console.log(html.charCodeAt(2)) //returns an unicode

// --- which return True / False 
console.log(html.includes("para"))
console.log(html.startsWith("<h1>"));
console.log(html.endsWith("</p>"))


// --- other Operations
console.log(html.slice(1, 5));
console.log(html.split(" ")); // it returns an array
console.log(html.substr(9, 1)) // o/t : h1>T     (n,n)
console.log(html.substring(1, 5)) // o/t : h1>     (n,n-1)
console.log(html.localeCompare(html2));
console.log(html.match())


let num = "0123456789";
console.log(num.slice(1, 5));
console.log(num.substr(1, 5));
console.log(num.substring(2, 1))