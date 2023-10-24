//Create a function add the special character "@" at the end of each recurring character "c" in a string
//output: c@t in the bag


let inputString= "cat in the bag";

function addSpecialCharacter(inputString){
    let result="";
    for(i = 0; i<inputString.length; i++){
        const currentChar = inputString[i];
        if(currentChar==='c'||currentChar==='C'){
         result+=currentChar+'*';
         i++;
        }
        else{
            result+=currentChar;
        }  
    }
    return result;
}
console.log(addSpecialCharacter(inputString));