// Create a function to count the number of letters in a string
//Output: 21

let string = "numentica ui internship 28['.";
let count = 0;
function counting(string){
    let characters="/^[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]'*$/0123456789";
    for(let i=0; i< string.length; i++){
        if(string[i]!==" " && !characters.includes(string[i])){
            count++;
        }
     }
     return count;
}
console.log(counting(string));