// Find the sum of even numbers in an array. find all the even numbers in an array and add them
// For example
// findEvenSum([38, 3, 2, 8, 31])
// output -  48
//--------------------------------------------------------------------------------------------------------
function findEvenSum(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 === 0 && typeof array[i] === "number"){
            sum+=array[i];
        }
    }
    return sum;
}
console.log(findEvenSum([38, 3, 2, 8, 31,"hello", -8]));