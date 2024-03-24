export const filterReducer=(intialState={},action)=>{
    console.log("action",action);
    if(action.type=="FILTER_ACTION") return action;
    else if (action.type=="REFRESH_ACTION") return action;
    else if (action.type=="CATEGORY_ACTION") return action;
    return intialState;
}