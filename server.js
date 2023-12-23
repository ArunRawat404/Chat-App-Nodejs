const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// to set view engine as ejs
app.set("view engine", "ejs");

// to serve static files present in public directory
app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });

    socket.on("join_room", (data) => {
        console.log("Joining a room", data.roomid);
        socket.join(data.roomid);
    });

    socket.on("new_msg", (data) => {
        console.log("Received new message", data);
        // will emit message to particular roomid
        io.to(data.roomid).emit("msg_rcvd", data);
    });
});

app.get("/chat/:roomid/:user", async (req, res) => {
    res.render("index", {
        roomid: req.params.roomid,
        user: req.params.user
    });
});

app.get("/group", async (req, res) => {
    res.render("group");
});

server.listen(PORT, async () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});