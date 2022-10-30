
const express = require("express");  // Js library for handling HTTP Requests

const fileUpload = require('express-fileupload'); // Js library for handling file inputs on web environment

const postController = require("./post/PostController.js"); // REST Controller for blog posts

const cors = require('cors'); // Do i need to explain? CORS Policy library

const morgan = require('morgan'); // Logging http requests 


const app = express();

app.use('/post',postController); // Using REST Controller for blog posts

app.use(cors()); 

app.use(fileUpload({ // Http file uploads
    createParentPath: true
}));

app.use(morgan('dev'));  //HTTP request logger middleware for node.js

const port = process.env.PORT || 8181
const server = app.listen(port,()=>{
	console.log(`Server linstening on port: ${port}`)
})