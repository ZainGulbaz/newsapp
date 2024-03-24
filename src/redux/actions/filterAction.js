
export const filterAction=(payload)=>{

    return{
        payload,
        type:"FILTER_ACTION"
    }

}


export const refreshAction=()=>{

    return{
        payload:{refresh:true},
        type:"REFRESH_ACTION"
    }

}


export const categoryAction=(category)=>{

    return{
        payload:{category},
        type:"CATEGORY_ACTION"
    }

}