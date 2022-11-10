import img404 from "./images/404_image.jpg"
const NotFound = (props) => {
	return (
		<div className="mx-auto">
			<p className="text-xl text-center font-bold">Aradığınız sayfa bulunamadı</p>
			<p className="text-lg text-center">{props.message}</p>
			<img className="w-1/2 mx-auto" src={img404} alt="page not found" />

		</div>
	);
};

export {NotFound};