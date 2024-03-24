import { getTopHeadlinesNewsApi,getSourcesNewsApis, getEverythingBasedOnFilterNewsApis } from "./newsapis";
import { ApiSourceEnums } from "../utils/constants";



export const getTopHeadlines=async({source,category})=>{

    if(source==ApiSourceEnums.newsApi){
        return await getTopHeadlinesNewsApi({category});
    }
    return null;
}


export const getTopSources=async({source})=>{

    if(source==ApiSourceEnums.newsApi){
        return await getSourcesNewsApis();
    }
    return null;
}

export const getEverythingBasedOnFilter=async({source,payload})=>{

    if(source==ApiSourceEnums.newsApi){
        return await getEverythingBasedOnFilterNewsApis(payload);
    }
    return null;
}