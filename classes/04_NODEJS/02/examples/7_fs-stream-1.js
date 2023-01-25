// In-Built Module: fs
const { createReadStream, createWriteStream } = require("fs");

// readFile, writeFile
// chunk

const readFileStream = createReadStream("./fs-actions/readme.html", "utf-8");

const writeFileStream = createWriteStream(
  "./fs-actions/readme-copy.html",
  "utf-8"
);

let i = 0;
readFileStream.on("data", (chunk) => {
  console.log("Writing chunk #: ", ++i);
  writeFileStream.write(chunk);
});
