import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Post = () =>{

	return <>
		<div>
			<CKEditor
				editor={ClassicEditor}
				data = "<h1>Start Typing!</h1>"
				onReady={ editor => {
					// You can store the "editor" and use when it is needed.
					console.log( 'Editor is ready to use!', editor );
				} }
				onChange={ ( event, editor ) => {
					const data = editor.getData();
					console.log( { event, editor, data } );
				} }
				onBlur={ ( event, editor ) => {
					console.log( 'Blur.', editor );
				} }
				onFocus={ ( event, editor ) => {
					console.log( 'Focus.', editor );
				} }
				/>
		</div>
	</>;
}

export {Post};