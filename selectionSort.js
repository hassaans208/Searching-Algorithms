const { array, swap } = require('./array')
// const array = [10,  6, 6, 6, 1, 1, 1, 2, 2 ]
console.log(array);

for (let index = 0; index < array.length; index++) {
    let get = null;
    let prev = null;
    let element = array[index];
    for (let j = index + 1; j < array.length; j++) {
        if (element > array[j]) {
            element = array[j];
            get = j
        }
    }
    if (get && prev != get) swap(array, index, get);
    prev = get

}

console.log(array);
// console.log(array);