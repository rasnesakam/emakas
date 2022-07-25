import { Link } from "react-router-dom";

const BlogItem = (props) =>{

    return (
    <Link to={`/page/${props.item.uri}`} className="p-1">
        
        <div className="flex flex-row p-2 border-2 transform transition duration-500 hover:scale-105">
            <div className="basis-[10%]">{props.item.name}</div>
            <div className="basis-[90%] flex flex-col">
                <div className="uppercase text-lg p-2">{props.item.title}</div>
                <div className="text-base">{props.item.email}</div>
            </div>
        </div>

    </Link>
    )

};

export { BlogItem };