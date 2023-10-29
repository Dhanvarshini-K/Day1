// Return the sum of smallest and largest number in an array
// Example: [45, 2, 25, 11, 16]
// Here the output will be 2(smallest) + 45 (largest)
// Output will be 47


const array = [45, 2, 25, 11, 16];

const sortedArray = array.sort((a, b) => a - b);
const smallest = sortedArray[0];
const largest = sortedArray[sortedArray.length - 1];
function getTheSumOfSmallestAndLargestNumberInAnArray(array) {
    return smallest + largest;
}
console.log(getTheSumOfSmallestAndLargestNumberInAnArray(array)); 