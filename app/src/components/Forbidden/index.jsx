import woah from "./images/woah.gif"


const HoldOn = (props) => {

	return <div>
		<p className="text-xl text-center fot-bold">Hold on...</p>
		<p className="text-lg  text-center">{props.message}</p>
		<img className="mx-auto" src={woah} alt="Woah woah woah..."/>
		<p className="text-lg  text-center">And, this is not Peter's Batman glass</p>
	</div>
};

export {HoldOn};