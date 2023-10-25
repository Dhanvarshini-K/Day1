// Convert to minutes
// Users can give a time like 2:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
// Try with different hours and minutes and cover all possible negative cases

function convertToMinutes(time) {
  
    const parts = time.split(':');

    if (parts.length !== 2 ) {
        return "Invalid time format. Please use 'hh:mm' format.";
    }
    //The Number() method converts a value to a number.
    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || minutes < 0 || minutes >= 60) {
        return "Invalid time values. Please provide valid hours and minutes.";
    }

    return hours * 60 + minutes;
}

console.log(convertToMinutes("2:30")); 
console.log(convertToMinutes("0:45")); 
console.log(convertToMinutes("10:0"));
console.log(convertToMinutes("2:70")); 
console.log(convertToMinutes("3.5:30")); 
console.log(convertToMinutes("hello:world")); 
console.log(convertToMinutes("2:-30"));