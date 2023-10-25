// Format phone number
// Convert a ten digit number into US phone formatting
// For example: 9840164723 to "(984)016-473"
// Throw error if it's not a valid phone number
//----------------------------------------------------------------------------------------------------------
function getTheformatPhoneNumber(number) {
   
        if (typeof number !== "string" && typeof number !== "number") {
          return 'Invalid input. Please provide a valid ten-digit number.';
        }

        number = number.toString(); 

        const cleanedNumber = number.replace(/\D/g, ''); 
        
        if (cleanedNumber.length !== 10) {
          return 'Invalid phone number. Please provide a valid ten-digit number.';
        }
      
        return `(${cleanedNumber.slice(0, 3)})${cleanedNumber.slice(3, 6)}-${cleanedNumber.slice(6)}`;
      }

console.log(formatPhoneNumber("9840164723"));       //output:(984)016-4723
console.log(formatPhoneNumber("hello"));            //output:Invalid phone number. Please provide a valid ten-digit number.
console.log(formatPhoneNumber(9840164723));         //output:(984)016-4723
console.log(formatPhoneNumber(true));               //output:Invalid input. Please provide a valid ten-digit number.
console.log(formatPhoneNumber("98401647235687"));   //output:Invalid phone number. Please provide a valid ten-digit number.    
console.log(formatPhoneNumber("984016"));           //output:Invalid phone number. Please provide a valid ten-digit number.