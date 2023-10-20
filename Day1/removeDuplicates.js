//Function to remove duplicates in array
//output: [-10, 29, 4, -4, 16]


var array=[-10, 29, 4, 4, 16, 29, -10];
function removeDuplicates(array){
    let unique=[];
    array.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element);        
        }
    });
    return unique;
}
console.log(removeDuplicates(array));