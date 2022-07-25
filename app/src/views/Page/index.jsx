import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../functions/fetchData";
import { FeaturedImage, ArticleSection, Comments, Recommends } from "../../components/Page";

const Page = function(props){
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