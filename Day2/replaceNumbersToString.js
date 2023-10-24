//Replace any numbers in a string to a character passed to the function
//Output: arun@ddd

let inputString = "arun@123";
let replacementChar = "d";
function replaceNumber(inputString,replacementChar){
    let result = "";
    for(i=0; i<inputString.length; i++){
        const currentChar = inputString[i];
        /*[/d is the shorthand in Regex that match any digit(0-9)
        .test() is the js method uesd with regex.
        It tests if the regular expression matches a given string.]*/
        if(/\d/.test(currentChar)){   
            result+=replacementChar;
        }
        else{
            result+=currentChar;
        }
    }
    return result;
}
console.log(replaceNumber(inputString,replacementChar))
