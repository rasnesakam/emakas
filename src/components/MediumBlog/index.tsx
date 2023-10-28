
const MediumBlogItem = (props: {item: {link:string, title: string, thumbnail: string,author: string}}) =>{

    return (
    <a href={props.item.link} target="_blank" className="">
        
        <div className="flex flex-col sm:flex-row border-2 border-secondary bg-secondary transform transition duration-500 hover:scale-105">
            <div className="sm:pr-5 flex flex-col justify-center"><img className=" w-full sm:w-32" src={props.item.thumbnail}></img></div>
            <div className="flex flex-col">
                <div className="uppercase text-lg font-bold p-2">{props.item.title}</div>
                <div className="text-base italic">{props.item.author}</div>
            </div>
        </div>

    </a>
    )

};

export default MediumBlogItem;