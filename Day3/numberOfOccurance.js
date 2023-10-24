// Write a javascript function to return number of occurance of a particular word in a sentence
// For example:
// findNumberOfOccurance(“be kind whenever possible. kindness is what matters”, “kind”);
// Will return an output of 2 ( 2 occurance of kind in the string )

const sentence = "be kind whenever  possible. kindness is what matters ";
const word = "kind";
 
function findNumberOfOccurance(sentence,word){
    let words = sentence.split(' ');
    let count = 0;
for( const value of words){
    if(value.includes(word) ){
         count++;
    }
    else if(typeof word !== "string"){
        return "The word is not a String type"
    }
}
 return count;
}
const occuranceCount = findNumberOfOccurance(sentence, word);
console.log(`Number of occurrences of "${word}" in the sentence: ${occuranceCount}`);