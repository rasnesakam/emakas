import { useState, useEffect } from "react";
import { BlogItem } from "./components"
import { SearchBar } from "../../src/components/SearchBar"
import { fetchData } from "../../src/functions/fetchData";

export const Blogs = () =>{

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
                < SearchBar onSearch={async (keyword)=>{
                    let datas = await fetchData({url:'https://jsonplaceholder.typicode.com/posts',args:{"search":keyword}});
                    setItems(datas);
                }}/>
            </div>
            <div>
				<div className="w-full mx-auto md:w-1/2">	
					<ul className="list-none">

						{items.items.map((item,index) => <li key={index} className="py-2"><BlogItem item={item} /></li>)}

					</ul>
				</div>
            </div>
        </div>
    );
}