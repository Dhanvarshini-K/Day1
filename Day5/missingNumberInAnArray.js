// Find the missing number / numbers
// Example: Given an array of numbers in random order, find the missing numbers
// [7, 10, 12, 9] // output [8, 11] since these are the numbers missing in 7, 9, 10, 12
// Note: The numbers will be given as input in any order.


const array = [7,10,12,9];
array.sort((a,b)=>a-b);
function findTheMissingNumber(array){
const missingNumber = [];
for(i=array[0]; i<array[array.length-1]; i++){
    if(!array.includes(i)){
        missingNumber.push(i);
    }
}
return missingNumber;
}
console.log(findTheMissingNumber(array));