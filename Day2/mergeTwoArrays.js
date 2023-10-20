//Merge two arrays and then sort the numbers from lowest to highest
//Output: [1, 2, 3, 4, 5, 6];

const array1 = [1, 4, 6];
const array2 = [2, 5, 3];

const mergedArray = array1.concat(array2); 

function mergingAnArray(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

mergingAnArray(mergedArray);

console.log(mergedArray);