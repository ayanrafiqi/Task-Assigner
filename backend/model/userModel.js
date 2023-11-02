const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, max: 8 },
  isAdmin: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("User", userSchema);
