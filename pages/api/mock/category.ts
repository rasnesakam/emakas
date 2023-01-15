// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	datas: Array<{name:string, uri:string}>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	let datas = [
		{
			name: "Öne Çıkan",
			uri:"one-cikan"
		},
		{
			name: "Batarya",
			uri:"batarya"
		},
		{
			name: "Powerbank",
			uri:"powerbank"
		},
		{
			name: "Akü",
			uri:"aku"
		}
	];
	res.status(200).json({datas})
}