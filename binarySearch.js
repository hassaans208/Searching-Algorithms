// 1 way of doing this
const binarySearch = (arr, start, end, target) => {

    if (start > end) return false

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) return true
    if (arr[mid] < target) return binarySearch(arr, mid + 1, end, target)
    if (arr[mid] > target) return binarySearch(arr, start, mid - 1, target)
}
// 2nd way of doing this
const binarySearchTwo = (arr, value) => {

    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == value) return mid;
        if (arr[mid] > value) high = mid - 1;
        if (arr[mid] < value) low = mid + 1;
    }
    return -1;

}
// main ===================
const { array } = require('./array')
array.sort()

// 1.
let target = 10
let start = 0
let end = array?.length - 1

// const result = binarySearch(array, start, end, target)

// console.log(result);
// 2.
console.log(binarySearchTwo(array, target));