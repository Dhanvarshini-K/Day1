// Repeat string
// For example
// repeat(“arun”, 3);
// output “arunarunarun”;

function repeat(string,count){
    let result = '';
    for(i=0; i<count; i++){
        if(typeof string === "string" && typeof count === "number"){
            result += string;
        }
       else {
        return "It is not a correct datatype."
       }  
    }
    return result;
}
console.log(repeat("arun",3));
console.log(repeat("welcome",5));