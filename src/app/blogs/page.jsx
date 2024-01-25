"use client"
import { getMediumFeeds } from "@/functions/getMediumFeeds"
import {getString, STRING_FORMATS} from "@/strings";
import {useLanguageContext} from "@/components/LanguageContextAdapter";
import {useEffect, useState} from "react";


export default function Blogs(){
    const {language} = useLanguageContext()
    const [rss, setRss] = useState({channel: [{link:"",item:[]}]})

    useEffect(() => {
        fetch("/api/mediumblog")
            .then(response => response.json())
            .then(feeds => {
                console.log(feeds)
                setRss(feeds.content.mediumFeedsJson.rss)
            });
    },[])
    return <div className="sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto">
            <h2 className="text-2xl font-semibold hover:underline">
                <a target="_blank" href={rss.channel[0].link}>{getString("medium posts", language,STRING_FORMATS.CAPITALIZED)}</a>
            </h2>
            <div>
                <ul>

                    {rss.channel[0].item.map((item,index) => (

                        <li key={index} className="card border border-secondary transition hover:scale-105">
                            <a target="_blank" href={item.link[0]}>
                                <p className="text-xl">{item.title[0]}</p>
                                <div className="flex flex-row flex-wrap gap-3 mt-2">
                                    {item.category.map((sit, six)=>(
                                        <span key={six} className="text-sm p-1 rounded-md bg-secondary">#{sit}</span>
                                    ))}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
}
