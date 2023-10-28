import Image from 'next/image'

const HoldOn = (props: {message: string}) => {

	return <div>
		<p className="text-xl text-center fot-bold">Hold on...</p>
		<p className="text-lg  text-center">{props.message}</p>
		<Image className="mx-auto" src="/images/woah.gif" width={500} height={500} alt="Woah woah woah..."/>
		<p className="text-lg  text-center">And, this is not Peter's Batman glass</p>
	</div>
};

export {HoldOn};