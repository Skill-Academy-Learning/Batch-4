/// Scheduling script - job

const fs = require("fs");

const cron = require("node-cron");

function writeTimestampToFile() {
  const currentDate = new Date();

  const timeStampData =
    currentDate.toLocaleDateString() +
    " " +
    currentDate.toLocaleTimeString() +
    "\n";

  fs.appendFile(
    "./temp/timestamp-data.txt",
    timeStampData,
    "utf-8",
    (error) => {
      error !== null && console.log("error: ", error);
    }
  );
}

cron.schedule("* * * * *", () => {
  console.log(
    "Running this task every minute: ",
    new Date().toLocaleTimeString()
  );

  writeTimestampToFile();
});
