const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    text1: {
        type: String,
        required: [true, "Please provide an author"],
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
