// In-Built Module: fs
const { unlink } = require("fs");

// This program needs the file name to be deleted to be passed as a command line parameter
const fileName = `./fs-actions/${process.argv[2]}`;

unlink(fileName, (err) => {
  if (err) {
    console.log("error: ", err?.message);
  }
});
