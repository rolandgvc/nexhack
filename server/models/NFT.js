const { model, Schema } = require("mongoose");

const contestSchema = new Schema({
  image: String,
  title: String,
  description: String,
  addresses: [String],
  shares: [String],
  timestamp: String,
});

module.exports = model("NFT", contestSchema);
