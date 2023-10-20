//Create a function to find the number that are common in the arrays passed
//Output: [8]


var array1=[1,3,33,8,8];
var array2=[76,8,13,54];

function getCommonItems(array1,array2){
    let common=[];
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i]==array2[j] && !common.includes(array1[i])){
                common.push(array1[i]);
            }
        }
    }
    return common;
}
console.log(getCommonItems(arr1,arr2));