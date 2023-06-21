// const { array } = require('./array')let x = 32
const array = [
    66, 18, 59, 2, 92, 14, 20,
    84, 68, 35, 86, 35, 41, 17,
    45, 0, 67, 80, 31, 74
];
console.log(array, array.length);
const conquer = (arr, l, r, m) => {
    let n1 = m - l + 1;
    let n2 = r - m;
    // let l = left;
    let L = [];
    let R = [];

    for (let i = 0; i < n1; i++) {
        L[i] = arr[i + l];
    }
    for (let i = 0; i < n2; i++) {
        R[i] = arr[m + 1 + i];
    }

    let k = l;
    let i = 0, j = 0;
    while (i < n1 && j < n2) {
        if (L[i] < R[j]) {
            arr[k++] = L[i++];

        }
        else if (L[i] > R[j]) {
            arr[k++] = R[j++];
        }
        else {
            arr[k++] = L[i++];
        }
    }

    while (i < n1) {
        arr[k++] = L[i++];
    }
    while (j < n2) {
        arr[k++] = R[j++];
    }
    // console.log('conquer', array
    // );

}
const divide = (array, left, right) => {
    if (left >= right) {
        return
    }

    //1st l 0, r 2
    const mid = Math.floor((left + right) / 2)
    //1st l 0, m 1
    divide(array, left, mid)
    divide(array, mid + 1, right)
    conquer(array, left, right, mid)
}
// l 0, r 10
divide(array, 0, array.length - 1)

console.log(array);