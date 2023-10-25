function removeZeros(input, position) {
    if (position === "leading") {
      return input.replace(/^0+/, '');
    } else if (position === "trailing") {
      return input.replace(/0+$/, '');
    } else {
      return input;
    }
  }
  
  const input = "";
  console.log(removeZeros("000000123423423000", "leading"));  // Output: "123423423000"
  console.log(removeZeros("0002356008684000", "trailing"));