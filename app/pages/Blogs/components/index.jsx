import { Link } from "react-router-dom";

const BlogItem = (props) =>{

    return (
    <a href={props.item.link} target="_blank" className="p-1">
        
        <div className="flex flex-col sm:flex-row p-2 border-2 transform transition duration-500 hover:scale-105">
            <div className="sm:pr-5 flex flex-col justify-center"><img className=" w-full sm:w-32" src={props.item.thumbnail}></img></div>
            <div className="flex flex-col">
                <div className="uppercase text-lg p-2">{props.item.title}</div>
                <div className="text-base">{props.item.author}</div>
            </div>
        </div>

    </a>
    )

};

export { BlogItem };