import { useEffect, useState } from "react";
import  Link from "next/link";



interface GithubFeedItem{
	title: string
	link: string
	pubDate: string
	author: string
	content: string
	contentSnippet: string
	id: string
	isoDate: string

}

interface GithubContent {
	link:string
	feedUrl: string
	items: GithubFeedItem[]
}

interface GithubFeed {
	content: GithubContent
}

function GithubUserFeed(){
	const [feed,setFeed]: [GithubFeed, any] = useState({content:{link:"",feedUrl:"",items: Array()}});

	useEffect(()=>{
		fetch("/api/github-profile").then(response => response.json()).then(feed => {
			console.log(feed);
			setFeed(feed)
		})
	},[]);
	return <>
		<div className="flex flex-col border border-gray-500 px-2">
			<Link href={feed.content.link}  className="text-2xl hover:text-blue-500">Github Feed</Link>
			<ul>
				{feed.content.items.map((item,index) => (<>
					<li key={index}>
						<div className="border border-gray-400 p-2 m-2 rounded-sm">
							<Link href={feed.content.link} className="hover:text-blue-500">{item.author}</Link>
							<div dangerouslySetInnerHTML={{__html: item.content}}></div>
						</div>
					</li>
				</>))}
			</ul>
		</div>
	</>
}

export {GithubUserFeed}