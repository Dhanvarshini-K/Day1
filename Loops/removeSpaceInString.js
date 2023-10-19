//Remove spaces in a string
// output:"foxinthebox"


let input = "    fox i  n the b ox      ";
function removeSpaces(input){
    let result = " ";
    for(let i=0;  i < input.length; i++){
        if(input[i]!==" "){
            result+=input[i];
        }
    }
    return result;
}
console.log(removeSpaces(input));