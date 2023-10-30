// Find the missing number / numbers
// Example: Given an array of numbers in random order, find the missing numbers
// [7, 10, 12, 9] // output [8, 11] since these are the numbers missing in 7, 9, 10, 12
// Note: The numbers will be given as input in any order.





function findTheMissingNumber(array){

    array.sort((a,b)=>a-b);

    if(!Array.isArray(array)){
        return "Invalid";
      }

    const missingNumber = [];

    for(i=array[0]; i<array[array.length-1]; i++){

    if(!array.includes(i)){
        missingNumber.push(i);
    }
}
return missingNumber;
}
console.log(findTheMissingNumber([7,10,12,9]));
console.log(findTheMissingNumber([7,"hello",12,9]));
console.log(findTheMissingNumber([7,10,12,true,9]));