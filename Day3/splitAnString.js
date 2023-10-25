// Split an string into an array
// For example
// stringSplit(“numenticaui”, 2);
// Output [“nu”, “me”, “nt”, “ic”, “au”, “i];
//--------------------------------------------------------------------------------------------------------
function stringSplit(string,splitDigit){
    if(typeof splitDigit !== "number"){
        return "The splitdigit is not number type";
    }
    const splitIntoAnArray=[];
   
    for(let i=0; i<string.length; i+=splitDigit){
            splitIntoAnArray.push(string.substring(i,i+splitDigit)); 
    }
    return splitIntoAnArray;
}
const result = stringSplit("numenticaui678",-2);
console.log(result)