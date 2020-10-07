const mongoose = require('mongoose'); // rerurns an object
const Schema = mongoose.Schema; // access Schema property, which is a function, from that object
const blogSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;