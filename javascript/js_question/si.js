// principal amount = 2000;
// rate of intrust = 10%
// time = 2 years

// simple intrust = ?
// total = ?
// emi = ?



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



