// Find the characters that are repeating the most simaltaneously
// For example:
// charRepeating(“traaainngfornewbie”);
// Output: a
// // since a has more repeating simaltaneously
//--------------------------------------------------------------------------------------------------------
function charRepeating(inputString) {
  if( typeof inputString !== "string"){
    return "invalid";
  }
    let maxChar = '';
    let maxCount = 0;
    let currentChar = '';
    let currentCount = 0;
  
    for (const char of inputString) {
      if (char === currentChar) {
        currentCount++;
      } else {
        currentChar = char;
        currentCount = 1;
      }
      if (currentCount > maxCount) {
        maxChar = currentChar;
        maxCount = currentCount;
      }
    }
    return maxChar;
  }

 const result = charRepeating("traaainngfornewbie");
 const result1 = charRepeating(true);
 console.log(result);
 console.log(result1);