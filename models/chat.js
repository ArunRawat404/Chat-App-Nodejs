const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    content: {
        type: String
    },
    sender: {
        type: String
    },
    roomid: {
        type: mongoose.Schema.Types.ObjectId
    }
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;