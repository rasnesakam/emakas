// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	datas: Array<
	{
		name: string;
		description: string;
		imageUrl: Array<string>;
		uri: string;
		price: number;
		stockCode?: string,
		mark?: string,
		createdAt?: Date;
		props?: Array<{key: string, value:string}>
		
	}
	>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	let datas = [
		{
			name:"LG Chem INR18650M26 - 3.7V 2600mAh Li-ion Şarjlı Pil - 10A",
			description: "",
			imageUrl: ["https://emakas.net/images/mock/logo_bd_180x180.png"],
			price: 59.99,
			uri: "",
			stockCode: "900.817.503.009",
			mark: "LG",
			props: [
				{key:"Pil türü",value:"Li-ion"},
				{key:"Amper değeri",value:"10A"},
				{key:"Voltaj değeri",value:"3.7V"},
				{key:"mAh değeri",value:"2600mAh"},
			]
		},
		{
			name:"LG Chem INR18650M26 - 3.7V 2600mAh Li-ion Şarjlı Pil - 10A",
			description: "",
			imageUrl: ["https://emakas.net/images/mock/logo_bd_180x180.png"],
			price: 59.99,
			uri: "",
			stockCode: "900.817.503.009",
			mark: "LG",
			props: [
				{key:"Pil türü",value:"Li-ion"},
				{key:"Amper değeri",value:"10A"},
				{key:"Voltaj değeri",value:"3.7V"},
				{key:"mAh değeri",value:"2600mAh"},
			]
		},
		{
			name:"LG Chem INR18650M26 - 3.7V 2600mAh Li-ion Şarjlı Pil - 10A",
			description: "",
			imageUrl: ["https://emakas.net/images/mock/logo_bd_180x180.png"],
			price: 59.99,
			uri: "",
			stockCode: "900.817.503.009",
			mark: "LG",
			props: [
				{key:"Pil türü",value:"Li-ion"},
				{key:"Amper değeri",value:"10A"},
				{key:"Voltaj değeri",value:"3.7V"},
				{key:"mAh değeri",value:"2600mAh"},
			]
		},
		{
			name:"LG Chem INR18650M26 - 3.7V 2600mAh Li-ion Şarjlı Pil - 10A",
			description: "",
			imageUrl: ["https://emakas.net/images/mock/logo_bd_180x180.png"],
			price: 59.99,
			uri: "",
			stockCode: "900.817.503.009",
			mark: "LG",
			props: [
				{key:"Pil türü",value:"Li-ion"},
				{key:"Amper değeri",value:"10A"},
				{key:"Voltaj değeri",value:"3.7V"},
				{key:"mAh değeri",value:"2600mAh"},
			]
		}
	];
	res.status(200).json({datas})
}