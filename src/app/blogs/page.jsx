import { getMediumFeeds } from "@/functions/getMediumFeeds"


export default async function Blogs(){
    const feeds = await getMediumFeeds("emakas");
    const {channel} = feeds.mediumFeedsJson.rss;
    const myChannel = channel[0];
    return <div className="sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto">
            <h2 className="text-2xl font-semibold hover:underline">
                <a target="_blank" href={myChannel.link}>Medium Yazılarım</a>
            </h2>
            <div>
                <ul>

                    {myChannel.item.map((item,index) => (

                        <li key={index} className="card border border-secondary transition hover:scale-105">
                            <a target="_blank" href={item.link[0]}>
                                <p className="text-xl">{item.title[0]}</p>
                                <div className="flex flex-row flex-wrap gap-3 mt-2">
                                    {item.category.map((sit, six)=>(
                                        <span key={six} className="text-sm p-1 rounded-sm bg-secondary">{sit}</span>
                                    ))}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
}