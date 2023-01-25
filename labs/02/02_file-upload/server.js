const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const app = express();

app.get("/", (req, res) => {
  res.send(`<form action='/profile' method='post' enctype='multipart/form-data'>
  <input type='file' name='avatar' /><br><br>
  <input type='text' name='caption' /><br><br>
  <input type='submit' value="Upload File"/>
</form>`);
});

app.post("/profile", upload.single("avatar"), (req, res, next) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  const body = req.body; // caption
  const file = req.file; //file

  // Write the user entered data and file metadata to the DB

  res.json({ body, file });
});

app.listen(8080, () => {
  console.log("Express server started and listening on port 8080");
});

/**
 * Sample request content recvd by /profile route in the above code:
 * 
{
  "body": { "caption": "some caption" },
  "file": {
    "fieldname": "avatar",
    "originalname": "20230124_132217.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "uploads/",
    "filename": "f8d68b22c3eeab6f95e008219d21b69e",
    "path": "uploads\\f8d68b22c3eeab6f95e008219d21b69e",
    "size": 1220363
  }
}
 */
