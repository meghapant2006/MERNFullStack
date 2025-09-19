// principal amount = 2000;
// rate of intrust = 10%
// time = 2 years

// simple intrust = ?
// total = ?
// emi = ?


// var p=2000;
// var r=10;
// var t=2;
// var si=(p*r*t)/100;
// var total= p+si;
// var emi= total/(t*12);
// console.log("simple intrust is "+si);
// console.log("total intrust is "+total);
// console.log("emi intrust is "+emi);


let principal = 20000;
let rate = 10;
let time = 2;

let si = (principal * rate * time) / 100;
console.log("Simple Interest:", si);

let total = principal + si;
console.log("Total Amount to be Paid:", total);

let months = time * 12;
let emi = total / months;
console.log("EMI per month:", emi);


// WAP to find the area of circle, rectangle, cuboid, square?

var PI = 3.14;
let r = parseFloat(prompt("Enter radius of circle:"));
let circleArea = PI * r * r;
console.log("Area of Circle:", circleArea);

let length = parseFloat(prompt("Enter length of rectangle:"));
let breadth = parseFloat(prompt("Enter breadth of rectangle:"));
let rectangleArea = length * breadth;
console.log("Area of Rectangle:", rectangleArea);

let l = parseFloat(prompt("Enter length of cuboid:"));
let b = parseFloat(prompt("Enter breadth of cuboid:"));
let h = parseFloat(prompt("Enter height of cuboid:"));
let cuboidArea = 2 * (l * b + l * h + b * h);
console.log("Surface Area of Cuboid:", cuboidArea);

let side = parseFloat(prompt("Enter side of square:"));
let squareArea = side * side;
console.log("Area of Square:", squareArea);
