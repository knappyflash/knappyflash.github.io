
  const socket = new WebSocket("ws://localhost:8080");

  socket.addEventListener("open", () => {
    socket.send("Hello server!");
  });

  socket.addEventListener("message", (event) => {
    console.log("From server:", event.data);
  });
