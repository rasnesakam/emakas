

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Parser from 'rss-parser';

type Feed = {
	content: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Feed>
) {
	let feed;
	const url = `https:/github.com/rasnesakam.atom`;
	const feedParser = new Parser()
	fetch(url,)
			.then(response => response.text())
			.then(data => {
				feedParser.parseString(data).then(feed =>{
					res.status(200).send({content: feed})
				}).catch(error => {
					res.status(500).send({content: error})
				})
			})
			.catch(error => {
				res.status(500).send({content: error})
			});
}