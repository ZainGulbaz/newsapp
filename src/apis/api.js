import { getTopHeadlinesNewsApi,getSourcesNewsApis, getEverythingBasedOnFilterNewsApis } from "./newsapis";
import { ApiSourceEnums } from "../utils/constants";
import { getEverythingBasedOnFilterNYTApis, getSourcesNYTApis, getTopHeadlinesNYTApi } from "./newyork";



export const getTopHeadlines=async({source,category})=>{

    if(source==ApiSourceEnums.newsApi){
        return await getTopHeadlinesNewsApi({category});
    }
    else if(source==ApiSourceEnums?.nytAPI){
        return await getTopHeadlinesNYTApi({category});
    }
    return null;
}


export const getTopSources=async({source})=>{

    if(source==ApiSourceEnums.newsApi){
        return await getSourcesNewsApis();
    }
    else if(source==ApiSourceEnums.nytAPI){
        return await getSourcesNYTApis();
    }
    return null;
}

export const getEverythingBasedOnFilter=async({source,payload})=>{

    if(source==ApiSourceEnums.newsApi){
        return await getEverythingBasedOnFilterNewsApis(payload);
    }
    else if(source==ApiSourceEnums.nytAPI)
    {
        return await getEverythingBasedOnFilterNYTApis(payload);
    }
    return null;
}