export async function getMediumFeedsApi(){
    return fetch("/api/mediumblog")
            .then(response => response.json())
            .then(feeds => {
                return feeds
            });
}