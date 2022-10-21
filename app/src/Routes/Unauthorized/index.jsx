import { HoldOn } from "../../components/Forbidden";

const Unauthorized = () => {

	let message = "The page you want to visit is forbidden"
	return (
		<div>
			<HoldOn message={message}/>
		</div>
	)
};

export {Unauthorized};