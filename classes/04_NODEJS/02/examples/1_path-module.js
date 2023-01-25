// In-Module: path

const path = require("path");

// File / folder path separator
console.log(path.sep); //separator

// Information extracted from the file path
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

// Joins strings to create file/folder path
console.log(path.join("c:", "data", "training", "classes"));
