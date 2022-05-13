import { useState, useEffect } from "react";
import { BlogItem } from "../../components/BlogItem"
export const Blogs = () =>{
    const [items,setItems] = useState(0);
    useEffect(() => {
        fetch(
            "https://jsonplaceholder.typicode.com/users"
        )
        .then(data => data.json())
        .then(data => {
            setItems(data)
        })
    });
    return (<div>
        <ul className="list-none">
            {
                items.map(
                    (item) => 
                        (
                            <li>
                                <BlogItem item={item}/>
                            </li>
                        )
                )
            }
        </ul>
    </div>);
}