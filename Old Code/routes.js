// routes for database CRUD operations

// create a new blog
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: "New Blog 3",
      snippet: "About my new blog 3",
      body: "more about my new blog 3"
    });
  
    blog.save()
     .then((result) => res.send(result))
     .catch((error) => console.log(error));
  });
  
  // read all blogs from the collection
  app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  });
  
  // read a single blog
  app.get('/single-blog', (req, res) => {
    Blog.findById('5f7c2072196bc208105f9ab5')
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
  });
  