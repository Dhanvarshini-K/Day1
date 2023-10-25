// Remove zeros either trailing / leading
// Input - "000000123423423000"
// removeZeros(input, "leading") // output 123423423000
// removeZeros(input, "trailing") // output 000000123423423
//--------------------------------------------------------------------------------------------------------

function removeZeros(input,type){
  if(input < 0 || input === "" || typeof (input,type) !== "string" ){
    return "Invalid input";
  } 
  if(type === "leading"){
    return findTheremoveLeadingZeros(input,type);
  }
  else{
    return findTheremoveTrailingZeros(input,type);
  }
}
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


console.log(removeZeros("000000123423423000","leading"));
console.log(removeZeros("000000123423423000","trailing"));
console.log(removeZeros("-000000123423423000","leading"));
console.log(removeZeros("hello","leading"));
console.log(removeZeros("0.00000123423423000","leading"));
console.log(removeZeros("0.00000123423423000","trailing"));
console.log(removeZeros("true","trailing"));
console.log(removeZeros("-000000123423423000",6));
console.log(removeZeros(6,7));

