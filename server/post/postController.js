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
		
		async function getPosts(){
			const blogs = await prisma.post.findMany();
			res.status(200).send(blogs);
		};
		getPosts();
	}
);

router.route("/").post(
	(req,res) => {
		async function upload(){
			let post = await prisma.post.create({
				data: {
					title: req.body.title,
					content: req.body.content,
					featuredImg: req.body.featuredImg,
					metadata: {
						visible: true,
						tag: {
							name: req.body.tag
						},
						category: {},
						seoTag: [{
							name: req.body.seoTag
						}],
						seoDesc: {
							name: req.body.seoDesc
						},

					}
				}
			})
		};

		upload();
	}
);

router.route("/").put();

router.route("/").delete();

module.exports = router;