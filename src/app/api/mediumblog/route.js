import { getMediumFeeds } from "@/functions/getMediumFeeds"

export async function GET(req){
    const feeds = await getMediumFeeds("emakas"); 
    return Response.json({content: feeds})
}

