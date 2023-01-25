//import * as math from "./math";
const { PI, add } = require("./math.js");
const sayHello = require("./person");

const { add: concatenate } = require("./string"); //alias

console.log(PI);

console.log("Adding 100 to 200: ", add(100, 200));

sayHello("Sreekanth", "Hello");

console.log(
  "Concatenating 'Hello' and 'World': ",
  concatenate("Hello", "World")
);

/*
Modularity of the codebase
Reuse
Avoid namespace conflict
*/
