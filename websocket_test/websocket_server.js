const WebSocket = require("ws");

const PORT = 8080;

const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

wss.on("connection", (socket) => {
  console.log("Client connected");

  socket.send("Welcome client!");

  socket.on("message", (message) => {
    console.log("Client said:", message.toString());
    socket.send("Server got your message: " + message.toString());
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error.message);
  });
});