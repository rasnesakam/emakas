const {v4:uuidv4} = require('uuid');

const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.use(bodyParser.json());

// Post image
router.route("/image").post(async (req,res) => {
	try {
		if (!req.files) {
			res.status(400).send("No file uploaded");
			return;
		}
		let image = req.files.image; // req.files.[image] is the file input name
		let extension = image.name.substring(image.name.lastIndexOf('.'),image.name.length);
		let newName = uuidv4().concat(extension);
	}
	catch (err) {
		res.status(500).send(`INTERNAL SERVER ERROR: ${err.message}`)
	}
});