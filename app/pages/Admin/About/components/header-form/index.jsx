import { useState } from "react";

const HeaderForm = () => {

	
	const [description, setDescription] = useState({content:""});
	const [title, setTitle] = useState({content:""});

	let save = () =>{
		let request = {
			area:"About",
			category:"head-section",
			title: title.content,
			content: description.content
		}
		alert(JSON.stringify(request));
	};

	let updateDesc = (event) =>{
		setDescription({content:event.target.value})
	};

	let updateTitle = (event) =>{
		setTitle({content:event.target.value})
	};

	return (<>
	
		<div>Kullanıcı Resmi alanı (Şimdik destek yok)</div>
		<div>
			<span className="mr-2">Başlık</span>
			<input type="text" onChange={updateTitle}/>
		</div>
		<div>
			
			<div>Yazı</div>
			<textarea onChange={updateDesc}></textarea>
		</div>

		<div><button type="button" onClick={save}>Kaydet</button></div>
	
	</>)
};

export {HeaderForm}