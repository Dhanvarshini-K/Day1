// Return the sum of two largest numbers
//Output: 200

let array = [32, 66, 80, 120, 45];
const sortedArray=array.sort((a,b)=>b-a);
function sumOfTwoLargestNumbers(array){
let largest1 = sortedArray[0];
let largest2 = sortedArray[1];
let result = largest1 + largest2;
return result;
}
console.log( sumOfTwoLargestNumbers(array));