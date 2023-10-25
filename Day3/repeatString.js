// Repeat string
// For example
// repeat(“arun”, 3);
// output “arunarunarun”;
//-------------------------------------------------------------------------------------------
function repeat(string,count){
    if(typeof string !== "string" || typeof count !== "number"){
        return "It is not a correct datatype."
    }
    let result = '';
    for(i=0; i<count; i++){
            result += string;  
    }
    return result;
}
console.log(repeat("arun",3));
console.log(repeat("welcome","hello"));