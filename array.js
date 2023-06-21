const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));

const swappElement = (array, index, swappWith) => {
    const temp = array[index];
    array[index] = array[swappWith];
    array[swappWith] = temp;
}


module.exports.array = array
module.exports.swap = swappElement
