import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

const MediumBlogItem = ({item}: {item: {link:string, title: string, thumbnail: string,author: string}}) =>{

    return (
		
      <>
	  	
        <a href={item.link} target="_blank" className="my-5 mx-auto block sm:w-1/2 md:w-3/4">
            <div className="flex flex-row justify-center border-2  border-secondary bg-secondary transform transition duration-500 hover:scale-105">
               <div className="flex flex-col items-center m-2">
                    <div className="uppercase text-lg font-bold p-2">{item.title}</div>
                    <div className="text-base italic">{item.title}</div>
                </div>
            </div>
        </a>
	  </>

    )

};

export default MediumBlogItem;
