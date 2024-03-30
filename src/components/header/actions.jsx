import React from 'react'
import { FaFilter } from "react-icons/fa6";
import { IoIosRefreshCircle } from "react-icons/io";
import SelectSearch from 'react-select-search';
import { deepCopy } from '../../utils/commons.js';
import { ApiSourceEnums, preDefinedCategories } from '../../utils/constants.js';
import { categoryAction } from '../../redux/actions/filterAction.js';
import { useDispatch } from 'react-redux';
import 'react-select-search/style.css'


const Actions = ({ setIsOpen, handleRefresh, className ,apiSource, setApiSource}) => {

    const [category, setCategory] = React.useState("");
    const dispatch=useDispatch();

  console.log(setApiSource,"setApi Source");

    React.useEffect(()=>{
        dispatch(categoryAction(category));
    },[category]);


    const categoryOptions = deepCopy(Object.values(preDefinedCategories)?.map((cat => { return { name: cat, value: cat } })));
    const ApiSourceOptions = deepCopy(Object.values(ApiSourceEnums)?.map((api => { return { name: api, value: api } })));

    return (
        <div className={'flex gap-1 justify-center items-center ' + className}>

<SelectSearch options={categoryOptions} placeholder="Choose your category" value={category} search onChange={value => setCategory(value)}/>
<SelectSearch options={ApiSourceOptions} placeholder="Choose your Api Source" value={apiSource} search onChange={value => setApiSource(value)}/>

            

            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xs md:text-sm px-5 py-1 md:py-2.5 text-center flex justify-center items-center gap-1 w-24 md:w-auto" onClick={() => setIsOpen(true)}><FaFilter style={{ fontSize: "15px" }} /> Filter</button>
            <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-xs md:text-sm px-5 py-1 md:py-2.5 text-center  flex gap-1  justify-center items-center w-24 md:w-auto" onClick={()=>{handleRefresh();setCategory("")}}> <IoIosRefreshCircle style={{ fontSize: "20px" }} /> Refresh</button>
        </div>
    )
}

export default Actions