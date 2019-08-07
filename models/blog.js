const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  comment: String,
  posted: { type: Date, default: Date.now }
});

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  comments: [commentSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});
module.exports = mongoose.model("Blog", blogSchema);
