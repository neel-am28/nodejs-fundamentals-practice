const express = require("express");
const blogController = require('../controllers/blogController');
const router = express.Router();

// read all blogs
router.get("/", blogController.blog_index);

// add a blog post
router.post("/", blogController.blog_details);

// create a blog
router.get("/create", blogController.blog_create_get);

// read a single blog post
router.get("/:id", blogController.blog_create_post);

// delete a blog post
router.delete("/:id", blogController.blog_delete);

module.exports = router;
