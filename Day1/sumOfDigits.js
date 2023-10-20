//Create a function to find the sum of digits in a number
//Output: 28 (9+6+4+7+2)


var number = 9647092;
// var num=98.459;

function getSumofDigits(number){
    let initialNumber = number;
    let sum = 0;
    while(initialNumber){
        sum += initialNumber % 10;
        initialNumber = Math.floor(initialNumber/10);
    }
    return sum;
}
console.log(getSumofDigits(number));