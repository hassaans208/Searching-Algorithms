const { array, swap } = require('./array')
// const array = [10,  6, 6, 6, 1, 1, 1, 2, 2 ]
console.log(array);


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let j = index - 1; j >= 0; j--) {
        if (element < array[j]) {
            swap(array, array.indexOf(element, j), j)
        }
    }
}

console.log(array);
