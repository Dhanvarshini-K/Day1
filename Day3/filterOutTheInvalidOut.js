// Given an array, filter out the invalid items
// For example:
// filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
// Output [“a”, “d”, true, “cd”];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “boolean”);
// Output [“a”, “d”, 1, “cd”, 33];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “string”);
// Output [1, true, 33];
//----------------------------------------------------------------------------------------------------
function filterOut(array,dataType){
  if(!dataType && typeof dataType !== "string"){
    return "empty";
  }
    function isValidType(item) {
       
        switch (dataType) {
            case "number":
               return typeof item !== "number";  
            case "string":
              return typeof item !== "string";
            case "boolean":
              return typeof item !== "boolean";
            case "object":
              return typeof item !== "object";  
            case "undefined":
              return typeof item !== "undefined";  
            case "function":
              return typeof item !== "function";  
            default:
              return "The datatype is not matched";
          }
        }
        return array.filter(item => isValidType(item));
      }
     
      console.log(filterOut(["a", "d", 45, 66, true, "cd"], "string"));
      console.log(filterOut(["a", "d", 45, 66, true, "cd"], "boolean"));
      console.log(filterOut(["a", "d", -45, 66, true, "cd"], "number")); 
      console.log(filterOut(["a", "d", -45, 66, true,{name:"dhan",age:23}, null,"cd"], "object"));
      console.log(filterOut(["a", "d", -45, 66, true,()=>{},"cd",null], "function")); 
      console.log(filterOut(["a", "d", -45, 66, true,()=>{},"cd",undefined], ""));
    
      