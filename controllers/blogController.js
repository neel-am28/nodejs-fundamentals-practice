const Blog = require("../models/blog");
// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

// read all blogs, GET
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((error) => console.log(error));
};
// add a blog post, POST
const blog_details = (req, res) => {
  const blog = new Blog(req.body); // create a new instance of the model
  blog
    .save()
    .then((result) => res.redirect("/blogs")) // redirect to /blogs GET page
    .catch((error) => console.log(error));
};
// create a blog
const blog_create_get = (req, res) => {
  res.render("create", { title: "Create a new Blog" });
};
// read  a single post
const blog_create_post = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => console.log(err));
};
// delete a blog post
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirectLink: "/blogs" }); // passing an objecct with redirectLink property
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
};
