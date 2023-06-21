// 1 way of doing this
function bubbleSort(array) {
    const length = array.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          // Swap the elements
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    
    return array;
  }

// 2nd way of doing this
  function bubbleSortWhile(array) {
    const length = array.length;
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < length - 1; i++) {
        if (array[i] > array[i + 1]) {
          // Swap the elements
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          sorted = false;
        }
      }
    }
  
    return array;
  }
  // 3rd way of doing this
  function bubbleSortDoWhile(array) {
    const length = array.length;
    let sorted;
  
    do {
      sorted = true;
      for (let i = 0; i < length - 1; i++) {
        if (array[i] > array[i + 1]) {
          // Swap the elements
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          sorted = false;
        }
      }
    } while (!sorted);
  
    return array;
  }

  // Generate a random array of length 20
  const { array } = require('./array')
  
  console.log('Original array:');
  console.log(array);
  
  console.log('Sorted array:');
//   console.log(bubbleSort(array));
//   console.log(bubbleSortDoWhile(array));
  console.log(bubbleSortWhile(array));
  