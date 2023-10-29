// Encoder and Decoder
// Encode a string in such a way that the output will be the next characters given as input
// For example:
// encode(“arun”, 2)  -> ctwp
// encode(“arun”, 4) -> evyr
// And similarly decode will return the opposite
// decode(“ctwp”, 2) -> arun
// decode(“evyr”, 4) -> arun

function findTheEncoderAndDecoder(input, shift) {
    if(typeof input !== "string" || typeof shift !== "number"){
        return "Invalid type";
    }
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char >= 'a' && char <= 'z') {
        const shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        result += shiftedChar;
      } else if (char >= 'A' && char <= 'Z') {
        const shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        result += shiftedChar;
      } else {
        result += char; 
      }
    }
    return result;
  }
   
  console.log( findTheEncoderAndDecoder("arun", 2));
  console.log(findTheEncoderAndDecoder("ctwp", -2)); // Decoding is achieved by shifting in the opposite direction
  console.log(findTheEncoderAndDecoder("arun", 4));
  console.log(findTheEncoderAndDecoder("evyr", -4));
  console.log(findTheEncoderAndDecoder(true,3));
  console.log(findTheEncoderAndDecoder("arun",-2))
  console.log(findTheEncoderAndDecoder("arun",-2.6))
  