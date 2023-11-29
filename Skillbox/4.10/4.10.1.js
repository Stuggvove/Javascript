let count = 70;
let n = 0;
let m = 100;
let array = [];

for(let i = 0; i < count - 1; i++)
{
    array.push(Math.round(Math.random() * Math.max(n,m) + Math.min(n,m)));
}
console.log(array);