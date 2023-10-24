// Find sum of multiples
// For example
// findSum(5, 5) should return 5+10+15+20+25=75
// findSum(8, 3) should return 8+16+24=48

function findSumOfMultiples(number, limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if(typeof number === "number" && typeof limit === "number"){
            sum += number * i;
        }
        else{
            return "There is an error in your given values.The value will be only numbers."
        }
      }
    return sum;
  }
    const result1 = findSumOfMultiples(5,5);
    const result2 = findSumOfMultiples(8,"hello");
    console.log(result1); 
    console.log(result2);