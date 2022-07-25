
const express = require("express")
const app = express();

const blogController = require("./blog/blogController.js");

app.use('/',blogController);

const port = process.env.PORT || 8181
const server = app.listen(port,()=>{
	console.log(`Server linstening on port: ${port}`)
})