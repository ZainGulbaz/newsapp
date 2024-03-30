const env = import.meta.env;

const filterResponse=(data)=>{

    return {articles:data?.results?.map(article=>{
        return{
            source:{name:article?.source || "New York Times"},
            title:article?.title || "unknown",
            urlToImage:article?.multimedia?.[0]?.url,
            description:article?.abstract,
            url:article?.url
        }
    })}

}


export const getTopHeadlinesNYTApi = async ({category}) => {
    try {

        if(!category) category="home";

        var url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${env.VITE_NYT_API_KEY}`;
         
        var req = new Request(url);

        const response= await fetch(req);

        return filterResponse(await response.json());
    }
    catch (err) {
        console.log("Error in getting top headlines for nyt api", err?.message);

    }
}

export const getSourcesNYTApis= async ()=>{
    try{
        return {sources:[{
            name:"New York Times",
            id:"nyt"
        }]}
    }
    catch(err)
    {
        console.log("Error in getting sources for news api", err?.message);

    }
}

const filterDate=(dateStr)=>{

    // date= dd-mm-yy

    let dateStrArr= dateStr?.split("-").reverse();
    dateStr=dateStrArr?.join("");

    // date yymmdd 20240324

    if(dateStrArr[1].length==1) dateStr=dateStr.slice(0,4)+"0"+dateStr.slice(4);
    if(dateStrArr[2].length==1) dateStr=dateStr.slice(0,6)+"0"+dateStr.slice(6);

    dateStr=dateStr.slice(0,5)+dateStr.slice(7,9)+dateStr.slice(5,7);

    return dateStr;
    
    
}

export const getEverythingBasedOnFilterNYTApis= async({source,from,to,keywords})=>{
    try{
        
        console.log("Calling here...");
        console.log(source,from,to,keywords);

        let url=`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${env.VITE_NYT_API_KEY}&begin_date=${filterDate(from)}&end_date${filterDate(to)}`;
        
        if(keywords){
            url+= `&q=${keywords}`;
        }
        if(source){
            url+= `&sources=${source}`
        }

        var req = new Request(url);

        let response= await fetch(req);
        response=await response.json();
        console.log(response?.response?.docs);
        response=response?.response?.docs;

        return  {articles:response?.map(article=>{
            return{
                source:{name:article?.source || "New York Times"},
                title:article?.headline?.main || "unknown",
                urlToImage:"https://static01.nyt.com/"+article?.multimedia?.[0]?.url,
                description:article?.abstract,
                url:article?.web_url
            }
        })}
    

    }
    catch(error)
    {
        console.log("Error in getting filter results", error?.message);

    }
}


