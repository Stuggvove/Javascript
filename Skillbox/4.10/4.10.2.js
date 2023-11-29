let count = 5;
let arr = [];
for (let i = 1; i <= count; i++) {
    arr.push(i);
}

for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr);
