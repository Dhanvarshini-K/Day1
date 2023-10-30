// Return the sum of smallest and largest number in an array
// Example: [45, 2, 25, 11, 16]
// Here the output will be 2(smallest) + 45 (largest)
// Output will be 47


function getTheSumOfSmallestAndLargestNumberInAnArray(array) {
    for (const item of array) {
        if (typeof item !== "number") {
          return "Invalid";
        }
      }
    
    const sortedArray = array.sort((a, b) => a - b);
    const smallest = sortedArray[0];
    const largest = sortedArray[sortedArray.length - 1];
    return smallest + largest;
}
console.log(getTheSumOfSmallestAndLargestNumberInAnArray([45, 2, 25, 11, 16])); 
console.log(getTheSumOfSmallestAndLargestNumberInAnArray([45, 2, "hello", 11, 16])); 