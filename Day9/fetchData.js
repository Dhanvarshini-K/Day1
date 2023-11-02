
// GET Request.
fetch("https://jsnplaceholder.typicode.com/todos/1")
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

    
