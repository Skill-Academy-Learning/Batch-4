// In-Built Module: fs
const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

// synchronous approach
// readFileSync and writeFileSync are synchronous methods
const fileContent = readFileSync("./fs-actions/something.html", "utf-8");

writeFileSync("./fs-actions/new-file1.html", fileContent, "utf-8");

// asynchronous approach
readFile("./fs-actions/something100.html", "utf-8", (err, fileContent) => {
  if (err) {
    console.log("Error occured: ", err.message);
    return;
  }

  console.log("File content obtained in async manner.");

  writeFile("./fs-actions/new-file2.html", fileContent, "utf-8", () => {
    console.log("written");
  });
});
