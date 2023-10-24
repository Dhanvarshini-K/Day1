// Convert number to strings
// for example: convertNumberToString(1)
// output “one”
// convertNumberToString(98)
// output “nineeight”

function convertNumberToString(number) {
    const digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numberString = number.toString();
    let result = "";
  
    for (let i = 0; i < numberString.length; i++) {
        const digit = numberString[i] - '0';
      result += digitNames[digit];
    }
    return result;
  }
  
  console.log(convertNumberToString(1));  
  console.log(convertNumberToString(98));