// Given an array, filter out the invalid items
// For example:
// filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
// Output [“a”, “d”, true, “cd”];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “boolean”);
// Output [“a”, “d”, 1, “cd”, 33];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “string”);
// Output [1, true, 33];

function filterOut(array,dataType){
    function isValidType(item) {
       
        switch (dataType) {
            case "number":
              return typeof item !== "number";
            case "string":
              return typeof item !== "string";
            case "boolean":
              return typeof item !== "boolean";
            default:
              return [];
          }
        }
        return array.filter(item => isValidType(item));
      }
     

console.log(filterOut(["a", "d", 45, 66, true, "cd"],"string"));
console.log(filterOut(["a", "d", 45, 66, true, "cd"],"boolean"));
console.log(filterOut(["a", "d", 45, 66, true, "cd"],"number"));