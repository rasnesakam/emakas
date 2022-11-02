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
			let metadata = await prisma.metaData.create({
				data: {
					visible: true,
					description: req.body.metadata.description,
					tag: {
						name: req.body.metadata.tag
					},
					category: {
						name:req.body.metadata.category.name.toString(),
						normalized_name:req.body.metadata.category.name.toString().toUpperCase()
					},
				},
				include: {
					tag: true,
					category: true
				}
			});
			let post = await prisma.post.create({
				data: {
					title: req.body.title,
					content: req.body.content,
					featuredImg: req.body.featuredImg,
					metadata: metadata
				},
				include: {
					metadata: true
				}
			})
		};

		upload().catch((err) => {
			res.status(500).send(err.message);
		});
	}
);

router.route("/").put();

router.route("/").delete();

module.exports = router;