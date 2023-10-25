// Check if the number is in range
// For example: checkInRange([1, 10], 4) // true since 4 is in between 1 and 10
// checkInRange([10, 100], 8) // true false 8 is not in between 10 and 100

function checkInRange(range, number) {
  if(Array.isArray(range) && range.length === 2 && number >= range[0] && number <= range[1]){
    return true;
  }
  else{
    return false;
  }
}

console.log(checkInRange([1, 10], 4));   
console.log(checkInRange([10, 100], 8));
console.log(checkInRange(["hello", "world"], 8));
console.log(checkInRange(true,false));
console.log(checkInRange({title:"hello",id:45},5));
console.log(checkInRange([1, 10], "hello"));   