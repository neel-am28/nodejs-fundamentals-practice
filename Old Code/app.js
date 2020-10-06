const express = require('express');

// set up an instance of express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); 
// by default ejs is always going to look into "views" folder for files
/* 
to manuallys set the folder of views: 
 app.set("views", "folder-name");
*/

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
    // express automatically sets the content type and status code, so we dont have to do it manually
    // res.send("<p>Home Page</p>");
    // res.sendFile("./views/index.html", {root : __dirname});
    res.render('index');
});
app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", {root : __dirname});
});
app.get("/about-us", (req, res) => {
    // redirecting
    res.redirect("/about");
});
// 404 page (middlewares usage) should always go at the very bottom
app.use((req, res) => {

    res.status(404).sendFile("./views/404.html", {root : __dirname});
});