//Calculate the sum of comma limited string
//Output: 215.5

let inputString = "1.5, 2, 44, 66, '', 12, 90";

function sumOfCommaLimitedString(inputString){
    const numbers = inputString.split(',').map(Number);
    const total = numbers.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)
    return total;
}
console.log(sumOfCommaLimitedString(inputString));