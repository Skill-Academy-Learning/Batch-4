// In-Built Module: fs
const { rmdir, mkdir } = require("fs");

mkdir("newdirectory", () => {
  setTimeout(() => {
    rmdir("newdirectory", () => {
      //Handle any errors
    });
  }, 2000);
});
