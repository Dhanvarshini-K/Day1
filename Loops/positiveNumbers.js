//Create a function that receives an array and push the positive numbers to a new array and
// return this new array
//Output: [4, 5, 76]

//ex1
var number=[-14,4,5,-2,76, true, -0.01,"dhan"];
//ex2
// var num=[3,4,5,66,7]
//ex3
// var num=[2.3,-5,6,7.2]


function positiveDigits(number){
    let positiveNumber=[];
    for(let i=0;i< number.length;i++){
        if(typeof num[i]=="number" && num[i]>=0){
            positiveNumber.push(num[i]);
        } 
    }
return positiveNumber;
}
console.log(positiveDigits(number));