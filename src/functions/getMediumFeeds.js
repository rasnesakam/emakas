
export async function getMediumFeeds(username){
    const mediumLink = `https://medium.com/feed/@${username}`;
    let parser = require("xml2js")
    let mediumFeeds = await fetch(mediumLink).then(response => response.text())
    let mediumFeedsJson = {}
    parser.parseString(mediumFeeds,function(err,result){
        if (err != null){
        }
        else {
            mediumFeedsJson = result;
        }
    });
    return { mediumFeedsJson };
}
