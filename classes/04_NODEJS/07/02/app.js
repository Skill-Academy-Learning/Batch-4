const jwt = require("jsonwebtoken");

require("dotenv").config();

const token = jwt.sign(
  {
    username: "sme",
    role: "Seller",
  },
  process.env.MY_JWT_SECRET,
  { expiresIn: "6s" }
); // expires after 6 seconds

console.log(token);

let decoded = jwt.verify(token, process.env.MY_JWT_SECRET);

console.log("Decoding immediately", decoded);

setTimeout(() => {
  let decoded = jwt.verify(token, process.env.MY_JWT_SECRET);
  console.log("Decoding after 4 seconds", decoded);
}, 4000);

setTimeout(() => {
  let decoded = jwt.verify(token, process.env.MY_JWT_SECRET);
  console.log("Decoding after 8 seconds", decoded); // throws error
}, 8000);
