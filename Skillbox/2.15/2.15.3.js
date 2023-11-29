let n = 0;
let m = 100;
let num1 = Math.floor(Math.random() * (Math.abs(m - n) + 1)) + Math.min(m, n);
let num2 = Math.floor(Math.random() * (Math.abs(m - n) + 1)) + Math.min(m, n);

console.log(num1);
console.log(num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 === num2);
