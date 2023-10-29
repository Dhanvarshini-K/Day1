// Encoder and Decoder
// Encode a string in such a way that the output will be the next characters given as input
// For example:
// encode(“arun”, 2)  -> ctwp
// encode(“arun”, 4) -> evyr
// And similarly decode will return the opposite
// decode(“ctwp”, 2) -> arun
// decode(“evyr”, 4) -> arun

function findTheEncodeAndDecode(inputString,value){
   
    if(typeof inputString !== "string" && typeof value !== "number"){
        return empty;
    }
    const letters = [/^[A-Za-z]+$/];
    if(value === "encode"){
        return encode(inputString,value);
    }
    else{
        return decode(inputString,value);
    }

    function encode(){

    }
    function decode(){

    }
}