const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use("/", express.static(__dirname + "/public"));

server.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});