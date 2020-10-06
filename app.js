const express = require("express");
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');
const app = express();


// connect to mongodb
const dbURI = 'mongodb+srv://neelam:neelam1234@node-js-practice.rjv5q.mongodb.net/node-js?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((error) => console.log(error));

app.set("view engine", "ejs");

// middleware and static files
app.use(express.static('public'));
// body parser
app.use(express.urlencoded({ extended: true}));
//morgan
app.use(morgan('dev'));

// routes
app.get("/", (req, res) => {
  res.redirect('/blogs');
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});
// blog routes

app.use('/blogs', blogRoutes);

// 404 middleware (always insert at the bottom)
app.use((req, res) => {
  res.render("404", { title: "404" });
});
