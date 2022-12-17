import { useState, useEffect } from "react";
import MediumBlogItem from "../../src/components/MediumBlog"
import { fetchData } from "../../functions/fetchData";

const MediumBlogs = () =>{

    const [items,setItems] = useState({feed:"",items:[],status:"ok"});
    useEffect(() => {
        async function loadData(){
            let datas = await fetchData({url:'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emakas'}) 
            setItems(datas);
        }
        loadData();
    },[]);

    return (
        <div >
            
            <div>
				<div className="w-full mx-auto md:w-1/2">	
					<ul className="list-none">

						{items.items.map((item,index) => <li key={index} className="my-5"><MediumBlogItem item={item} /></li>)}

					</ul>
				</div>
            </div>
        </div>
    );
}

export default MediumBlogs;