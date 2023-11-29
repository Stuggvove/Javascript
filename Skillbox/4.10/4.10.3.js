let array = [2,5,1,3,4];
let n = 7;
let index = -1;

for(let i = 0; i < array.length; i++) {
    if(array[i] === n) {
    index = i;
    break;
    }
}

if(index !== -1) {
    console.log(`Индекс элемента = ${index}`);
} else {
    console.log("Элемент не найден");
}
