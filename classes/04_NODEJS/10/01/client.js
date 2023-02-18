const { io } = require("socket.io-client");

const socket = io("ws://localhost:8080");

socket.on("mymessage", (data) => {
  console.log("message recvd", data);

  socket.emit("mymessage", { y: 100 });
});
