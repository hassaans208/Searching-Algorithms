const { array } = require('./array')
array.sort()

const linearSearch = (array, value) => {
    for (let index = 0; index < array.length; index++) {
        if(array[index]=== value) return index;
    }
    return -1;
}

console.log(linearSearch(array, 31));
