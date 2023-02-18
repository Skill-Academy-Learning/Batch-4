const { Server } = require("socket.io");

const io = new Server(8080);

io.on("connection", (socket) => {
  console.log("New client connected", socket?.id);

  socket.emit("mymessage", { x: 100 });

  socket.on("mymessage", (data) => {
    console.log("message recvd", data);
  });
});
