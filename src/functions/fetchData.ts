async function fetchData({url,args}: {url:string, args?:any}){
    let parameters = "";
    if (args != null)
        parameters = Object.entries(args)
            .map(([key,value]) => `${key}=${value}`).join("&");
    const dataitems = await fetch(
        `${url}?${parameters}`
        ).then(data => data.json());
    return (dataitems);
}

export { fetchData }