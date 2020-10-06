const http = require('http');
const fs = require('fs');
const _ = require('lodash'); // Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.

const server = http.createServer((req, res) => {
    // lodash
    /*const num = _.random(0,20);
    console.log('num: ', num);
    
    const greet = _.once(() => {
        console.log("Hello");    
    });

    greet(); */
    
    //set header content type
    res.setHeader('Content-type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/' : 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;
            // redirect
        case '/about-me' :
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
            break;
        default : 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // res.end(); 
            res.end(data) 
        }     
    });   
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000'); 
});

