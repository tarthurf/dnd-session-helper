const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    lowercase: true,
    required: "Username is Required",
  },
  gm: {
    type: Boolean,
    default: false,
    required: "You must state if you are a GM or a PLAYER"
  },
  characters: []
})

const User = mongoose.model("User", UserSchema);

module.exports = User;