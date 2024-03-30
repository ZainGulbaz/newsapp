export const getAfterToday = (days) => {
    var tomorrow = new Date();
    return new Date(tomorrow.setDate(tomorrow.getDate() + days));
}

export const filterDate=(date)=> (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();


export const deepCopy=(data)=>{
    try{
        return JSON.parse(JSON.stringify(data));
    }
    catch(err)
    {
        console.log("Unable to make deep copy");
        return null;
    }

}