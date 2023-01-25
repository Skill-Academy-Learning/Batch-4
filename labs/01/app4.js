/// Scheduling script - job

const fs = require("fs");

const currentDate = new Date();

const timeStampData =
  currentDate.toLocaleDateString() +
  " " +
  currentDate.toLocaleTimeString() +
  "\n";

fs.appendFile("./temp/timestamp-data.txt", timeStampData, "utf-8", (error) => {
  error !== null && console.log("error: ", error);
});
