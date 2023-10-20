//Find the largest number in an array according to input
//findLargest([3, 4, 5, 6, 88], 2) : output is 6
//findLargest([3, 4, 5, 6, 88], 4) : output is 4
var array = [3, 4, 5, 6, 88];


function findLargest(array,k){
    if(k<1||k>array.length){
        return "k is not a range";
    }
    array.sort((a,b)=>b-a);
    return array[k-1];
}
console.log(findLargest(array,4))