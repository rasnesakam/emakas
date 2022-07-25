const { PrismaClient } = require("@prisma/client");
const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");

const prisma = new PrismaClient();

router.use(bodyParser.urlencoded({extended: true}));

router.use(bodyParser.json())

// GET: blogs/
router.route("/").get(
	(req, res) => {
		
		async function getBlogs(){
			const blogs = await prisma.blog.findMany();
			res.status(200).send(blogs);
		};
		getBlogs();
	}
);

router.route("/").post(
	(req,res) => {
		async function upload(){
			await prisma.post.create({
				data: {
					title: req.body.title,
					featuredImg: req.body.featuredImg,
					content: req.body.content,
					uri: req.body.uri,
					meta: {
						create: {
							
						}
					}
				}
			})
		};
	}
);

router.route("/").put();

router.route("/").delete();

module.exports = router;