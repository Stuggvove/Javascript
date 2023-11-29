let a = 13.123456789;
let b = 2.123;
let n = 5;
let aDecimal = (a - Math.floor(a)) * Math.pow(10, n);
let bDecimal = (b - Math.floor(b)) * Math.pow(10, n);

aDecimal = Math.round(aDecimal);
bDecimal = Math.round(bDecimal);

console.log(aDecimal);
console.log(bDecimal);
console.log(aDecimal > bDecimal);
console.log(aDecimal < bDecimal);
console.log(aDecimal >= bDecimal);
console.log(aDecimal <= bDecimal);
console.log(aDecimal === bDecimal);
console.log(aDecimal !== bDecimal);
