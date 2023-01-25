function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const PI = 22 / 7;

// ES6 import / export syntax does not work
// Use CommonJS specification for export / import of modules

// Multiple named export
module.exports = {
  add,
  product: multiply,
  PI,
};
