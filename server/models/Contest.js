const { model, Schema } = require("mongoose");

const contestSchema = new Schema({
  title: String,
  body: String,
  header: String,
  slug: String,
  isFeatured: Boolean,
  createdBy: String,
  createdAt: String,
  prizes: [String],
  participants: [String],
  entries: [String],
});

module.exports = model("Contest", contestSchema);
