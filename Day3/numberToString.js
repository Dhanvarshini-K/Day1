// Convert number to strings
// for example: convertNumberToString(1)
// output “one”
// convertNumberToString(98)
// output “nineeight”
//-------------------------------------------------------------------------------------------------------
function convertNumberToString(number) {
    const digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numberString = number.toString();
    if(typeof number !== "number"){
      return "invalid value";
    }
    let result = "";
  
    for (let i = 0; i < numberString.length; i++) {
        const digit = numberString[i] - '0';
        console.log('num sttr', numberString[i], digit);
      result += digitNames[digit];
    }
    return result;
  }
  
  console.log(convertNumberToString(1));  
  console.log(convertNumberToString(98));
  console.log(convertNumberToString("hello"));
  console.log(convertNumberToString(true));