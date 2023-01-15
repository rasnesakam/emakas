// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	links: Array<{title: string, link: string, desc: string}>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	let links = [
		{title:"Github",link:"https://www.github.com/rasnesakam", desc:""},
		{title:"LinkedIn",link:"https://www.linkedin.com/in/ensar-makas-a16b69199/", desc:""},
		{title:"VSCO",link:"https://www.vsco.co/rasnesakam/gallery", desc:""},
		{title:"HackerRank",link:"https://www.hackerrank.com/ensar_makas", desc:""},
		{title:"LeetCode",link:"https://leetcode.com/emakas/", desc:""},
		{title:"Medium",link:"https://medium.com/@emakas", desc:""},
		{title:"Instagram",link:"https://instagram.com/prilog.e?igshid=YçmMyMTA2M2Y=", desc:""},
		{title:"Twitter",link:"https://twitter.com/ensar_makas", desc:""},
		{title:"Buy me a coffee",link:"https://www.buymeacoffee.com/emakas", desc:""},
	];
	res.status(200).json({links})
}