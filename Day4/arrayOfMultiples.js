// Array of Multiples
// Get the result of the array in multiples
// For example: [2, 5];
// Result: [2, 4, 6, 8, 10]
//---------------------------------------------------------------------------------------------------------

function findTheResultOfTheArrayInMultiples(array) {
    if (!Array.isArray(array) || array.length !== 2) {
        return "Invalid input. Please provide an array with two elements: [number, limit].";
    }

    const number = array[0];
    const limit = array[1];

    if (typeof (number,limit) !== "number" || limit <= 0) {
        return "There is an error in your given input. Both the number and limit must be positive numbers.";
    }

    let multiples = [];
    for (let i = 1; i <= limit; i++) {
        multiples.push(number * i);
    }

    return multiples;
}

console.log(getTheResultOfTheArrayInMultiples([2, 5])); 
console.log(getTheResultOfTheArrayInMultiples([4, 0])); 
console.log(getTheResultOfTheArrayInMultiples(2, 5)); 
console.log(getTheResultOfTheArrayInMultiples(["hello", "world"])); 
console.log(getTheResultOfTheArrayInMultiples("hello"));
console.log(getTheResultOfTheArrayInMultiples([true]));
console.log(getTheResultOfTheArrayInMultiples(true)); 
console.log(getTheResultOfTheArrayInMultiples(["$"])); 
console.log(getTheResultOfTheArrayInMultiples([2, 5, 7, 6])); 