// Interchange an array to the next item in array
//Output: [10, 30, 20]

let array=[-3,6,7,5,-3,5,6,"hello",true];

function interchange(arr,value){
if(array.length===0){
  
    return "This array will a Empty Array";
}
    let newArr=array;
    let index=value-1;
    let nextIndex=index+1;

    if(index < 0 && index > array.length){
        console.log("Enter the existing values: ");
        return;
    }
    if(index===0||index===(newArr.length-1)){
     [newArr[0],newArr[newArr.length-1]]=[newArr[newArr.length-1],newArr[0]];
    }
    [newArr[index],newArr[nextIndex]]=[newArr[nextIndex],newArr[index]];
    return newArr;
    //  return newArr.slice(0,nextIndex+1);
}
console.log(interchange(array,3))