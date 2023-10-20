//Add Suffix or Prefix
//output:Charles Jr,Mr Arun


function addSuffixOrPrefix(input,value,type){
    const input = input.charAt(0).toUpperCase()+input.slice(1).toLowerCase();
    const value = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
    if(type  === "prefix"){
        return value+" "+input;
    }
    else if(type === "suffix"){
        return input +" "+value;
    }
    else{
        return input;
    }

}
console.log(addSuffixOrPrefix("charles", "jr", "suffix"));
console.log(addSuffixOrPrefix("arun", "mr", "prefix"));