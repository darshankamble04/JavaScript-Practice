console.log("Its Works");

// NUMBERS
let num1 = 4;
let num2 = 34.3456789;
let num3 = "11";
let num4 = "23.76543"
let num5 = "name";
let num6 = NaN;
let num7 = "     10"
let num8 = "11 10"
let num9 = "11,10"
let num10 = "10 Years"
let num11 = "Years 10"


// NUMBER METHODS -------------------------------------------------

//--- Number() 
console.log(Number(num1));
console.log(Number(num2));
console.log(Number(num3));
console.log(Number(num4));
console.log(Number(num5));
console.log(Number(num6));
console.log(Number(num7));
console.log(Number(num8));
console.log(Number(num9));
console.log(Number(num10));
console.log(Number(num11));

//--- parseInt()
console.log(parseInt(num1));
console.log(parseInt(num2));
console.log(parseInt(num3));
console.log(parseInt(num4));
console.log(parseInt(num5));
console.log(parseInt(num6));
console.log(parseInt(num7));
console.log(parseInt(num8));
console.log(parseInt(num9));
console.log(parseInt(num10));
console.log(parseInt(num11));

//--- parseFloat()
console.log(parseFloat(num1));
console.log(parseFloat(num2));
console.log(parseFloat(num3));
console.log(parseFloat(num4));
console.log(parseFloat(num5));
console.log(parseFloat(num6));
console.log(parseFloat(num7));
console.log(parseFloat(num8));
console.log(parseFloat(num9));
console.log(parseFloat(num10));
console.log(parseFloat(num11));

//--- isFinite()
console.log(isFinite(num1));
console.log(isFinite(num2));
console.log(isFinite(num3));
console.log(isFinite(num4));
console.log(isFinite(num5));
console.log(isFinite(num6));
console.log(isFinite(num7));
console.log(isFinite(num8));
console.log(isFinite(num9));
console.log(isFinite(num10));
console.log(isFinite(num11));

//--- toFixed()   // it fix the num after decimal
console.log(num1.toFixed(3));
console.log(num2.toFixed(5));
console.log(num6.toFixed(5));

//--- toPrecision()  //  it fix the whole num
console.log(num1.toPrecision(3));
console.log(num2.toPrecision(1));
console.log(num6.toPrecision(5));

//--- toString()
console.log(num1.toString());

//--- toExponential()
console.log(num1.toExponential(2));

//--- valueOf()
console.log((num1 * 20).valueOf());
console.log(eval(1 + 3 + 4 * 9));