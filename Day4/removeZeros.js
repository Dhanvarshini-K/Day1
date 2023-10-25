// Remove zeros either trailing / leading
// Input - "000000123423423000"
// removeZeros(input, "leading") // output 123423423000
// removeZeros(input, "trailing") // output 000000123423423
//--------------------------------------------------------------------------------------------------------

function findTheremoveLeadingZeros(input) {

  let i = 0;
  while (i < input.length && input[i] === "0") {
    i++;
  }
  return input.slice(i);
}

function findTheremoveTrailingZeros(input) {
  let i = input.length - 1;
  while (i >= 0 && input[i] === "0") {
    i--;
  }
  return input.slice(0, i + 1);
}


console.log(findTheremoveLeadingZeros("0002356008684000"));  
console.log(findTheremoveTrailingZeros("0002356008684000"));  
console.log(findTheremoveTrailingZeros("00000hello0000"));
console.log(findTheremoveLeadingZeros("2356008684"));  
console.log(findTheremoveTrailingZeros("hello"));      


