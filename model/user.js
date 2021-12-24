const mongoose = require("mongoose");

const user = mongoose.Schema({
    uname: String,
    uemail: String,
});

const userSchema = new mongoose.model("userSchema", user);

module.exports = userSchema;