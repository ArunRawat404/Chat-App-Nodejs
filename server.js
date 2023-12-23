const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const { PORT } = require("./config/server_config.js");
const connect = require("./config/db_config.js");

const Group = require("./models/group.js");
const Chat = require("./models/chat.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

    socket.on("new_msg", async (data) => {
        console.log("Received new message", data);
        const chat = await Chat.create({
            roomid: data.roomid,
            sender: data.sender,
            content: data.message
        });
        // will emit message to particular roomid
        io.to(data.roomid).emit("msg_rcvd", data);
    });
});

app.get("/chat/:roomid/:user", async (req, res) => {
    const group = await Group.findById(req.params.roomid);
    const chats = await Chat.find({ roomid: req.params.roomid });
    res.render("index", {
        roomid: req.params.roomid,
        user: req.params.user,
        groupname: group.name,
        previousmsgs: chats
    });
});

app.get("/group", async (req, res) => {
    res.render("group");
});

app.post("/group", async (req, res) => {
    console.log(req.body);
    await Group.create({
        name: req.body.name
    });
    res.redirect("/group");
});

server.listen(PORT, async () => {
    console.log(`Server is up and running on PORT ${PORT}`);
    await connect();
    console.log("DB connected");
});