import { useState, useEffect } from "react";
import { BlogItem } from "./components"
import { SearchBar } from "../../components/SearchBar"
import { fetchData } from "../../functions/fetchData";

export const Blogs = () =>{

    const [items,setItems] = useState([]);
    useEffect(() => {
        async function loadData(){
            let datas = await fetchData({url:'https://jsonplaceholder.typicode.com/posts'})   
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
                <ul className="list-none">

                {items.map((item,index) => <li key={index} className="py-2"><BlogItem item={item} /></li>)}
                </ul>
            </div>
        </div>
    );
}