// Find sum of multiples
// For example
// findSum(5, 5) should return 5+10+15+20+25=75
// findSum(8, 3) should return 8+16+24=48
//--------------------------------------------------------------------------------------------------------
function findSumOfMultiples(number, limit) {
  if(typeof (number,limit) !== "number"){
    return "There is an error in your given values.The value will be only numbers."
  }
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
            sum += number * i;
      }
    return sum;
  }
   
 
    console.log(findSumOfMultiples("5","5")); 
    console.log(findSumOfMultiples(8,"hello"));