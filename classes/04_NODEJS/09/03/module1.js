let i = 100; // varables in modules behave like singleton

function increment() {
  i++;

  return i;
}

module.exports = { increment };
