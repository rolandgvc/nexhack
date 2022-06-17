const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  address: String,
  avatar: String,
  username: String,
  name: String,
  bio: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
