import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../../src/functions/fetchData";
import { FeaturedImage, ArticleSection, Comments, Recommends } from "./components";

const Page = (props) => {
    const { uri } = useParams();
    const [blog,setBlog] = useState({});
    useEffect(() => {
        async function loadData(){
            let blog = await fetchData({url:'https://jsonplaceholder.typicode.com/posts',args: {uri}});
            setBlog(blog[0]);
        }
        loadData();
    },[])
    return <>
	{uri}
        {/* Featured image */}
        <FeaturedImage blog={blog}/>

        {/* Article */}
        <ArticleSection blog={blog} />
        
        {/* Comments */}
        <Comments blog={blog} />
        
        {/* Recommended posts */}
        <Recommends blog={blog} />

    </>;
}

export { Page };