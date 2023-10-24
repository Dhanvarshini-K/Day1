// Split an string into an array
// For example
// stringSplit(“numenticaui”, 2);
// Output [“nu”, “me”, “nt”, “ic”, “au”, “i];

function stringSplit(string,splitDigit){
    const splitIntoAnArray=[];
   
    for(let i=0; i<string.length; i+=splitDigit){
        if(typeof splitDigit === "number"){
            splitIntoAnArray.push(string.substring(i,i+splitDigit));
        }
        else{
            return "The splitdigit is not number type"
        }
     
    }
    return splitIntoAnArray;
}
const result = stringSplit("numenticaui",2);
console.log(result)