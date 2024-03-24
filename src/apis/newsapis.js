import NewsAPI from 'newsapi';

const env = await import.meta.env;

export const getTopHeadlinesNewsApi = async ({category}) => {
    try {

        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        `apiKey=${env.VITE_NEWS_API_KEY || ""}`;
         
        console.log(category);
        if(category) url+="&category="+category;

        var req = new Request(url);

        const response= await fetch(req);
        return (await response.json());
    }
    catch (err) {
        console.log("Error in getting top headlines for news api", err?.message);

    }
}

export const getSourcesNewsApis= async ()=>{
    try{
        const url="https://newsapi.org/v2/top-headlines/sources?country=us&apiKey="+env.VITE_NEWS_API_KEY;
        var req = new Request(url);

        const response= await fetch(req);
        return (await response.json());

    }
    catch(err)
    {
        console.log("Error in getting sources for news api", err?.message);

    }
}


export const getEverythingBasedOnFilterNewsApis= async({source,from,to,keywords})=>{
    try{
        
        console.log("Calling here...");
        console.log(source,from,to,keywords);

        let url=`https://newsapi.org/v2/everything?from=${from}&to=${to}&sortBy=popularity&apiKey=`+env.VITE_NEWS_API_KEY;
        
        if(keywords){
            url+= `&q=${keywords}`;
        }
        if(source){
            url+= `&sources=${source}`
        }

        var req = new Request(url);

        const response= await fetch(req);
        return (await response.json());

       

         
    }
    catch(error)
    {
        console.log("Error in getting filter results", err?.message);

    }
}


