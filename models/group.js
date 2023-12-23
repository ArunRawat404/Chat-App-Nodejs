const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    name: {
        type: String
    },
    isPersonal: {
        type: Boolean,
        default: false
    }
});

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;