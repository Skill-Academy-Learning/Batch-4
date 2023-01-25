const express = require("express");
const path = require("path");

const app = express();
const { body, validationResult } = require("express-validator");

app.get("/", (req, res) => {
  res.json({ method: "get" });
});

app.get("/getfile", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../public/htmlfile.html"));
});

app.post(
  "/",
  body("email")
    .isEmail()
    .withMessage("Should be of valid email format")
    .isLength({ min: 5, max: 15 })
    .withMessage("Email must be 5 to 15 chars in length!"),
  body("fullName")
    .isLength({ min: 5, max: 15 })
    .withMessage("Full Name must be 5 to 15 chars in length!"),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((e) => {
          return e.msg;
        }),
      });
    }

    res.json({ body: req.body });
  }
);

module.exports = app;
