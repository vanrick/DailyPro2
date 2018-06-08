1. Describe what JSON format is
JavaScript Object Notation is a syntax for storing and exchanging data.

2. Delete the data types not permitted in JSON
3. Replace placeholder-text with the corresponding data type, properly formatted as JSON.


const myJsonObj = {
    myString: [some string],
    myNumber: [some number],
    myNull: [null],
    myBoolean: [false],
    myUndefined: [undefined],
    myArray: [some array],
    myFunction: [some function],
    myObject: [some object]
}


//answer
let myJsonObj = {
    "myString": "string",
    "myNumber": 4,
    "myNull": null,
    "myBoolean": false,
    "myArray": ["john", 30],
    "myObject": { "some": "object" }
}