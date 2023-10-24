//Find the missing numbers in an array
//Output: missing numbers in range [68-73] is 70, 72

var array=[68, 71, 69, 73,65,82,70];
function findMissingNumbers(array){
    array.sort((a,b)=>a-b);
    let missingNumber=[];
    for(i=array[0]; i<array[array.length-1]; i++){
        if(!array.includes(i)){
            missingNumber.push(i);
        }
    }
    return missingNumber;
}
console.log(findMissingNumbers(array));