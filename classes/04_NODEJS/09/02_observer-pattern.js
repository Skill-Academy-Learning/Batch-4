// In-Built Module: events
const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("mycustomevent", (data) => {
  console.log("1- mycustomevent event occured", data);
});

// eventEmitter.on("mycustomevent", (data) => {
//   console.log("2- mycustomevent event occured", data);
// });

const array = [100, 200, 300, 400, 500];

for (let index = 0; index < array.length; index++) {
  const element = array[index];

  eventEmitter.emit("mycustomevent", { arrayElement: element });
}
