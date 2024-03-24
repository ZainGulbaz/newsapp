import React from 'react';
import { getTopSources } from '../../apis/api';
import Modal from 'react-modal';
import { ApiSourceEnums,preDefinedCategories } from '../../utils/constants';
import SelectSearch from 'react-select-search';
import DatePicker from "react-datepicker";
import { deepCopy, filterDate, getAfterToday } from '../../utils/commons';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { filterAction } from '../../redux/actions/filterAction';


import "react-datepicker/dist/react-datepicker.css";
import 'react-select-search/style.css'
import Strings from '../../utils/strings';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function FilterModal({ modalIsOpen, setIsOpen }) {


  const [sources, setSources] = React.useState([]);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(getAfterToday(1));
  const [keywords,setKeywords]=React.useState("");
  const [source,setSource]=React.useState("");
  const [category,setCategory]=React.useState("");

  const dispatch = useDispatch();

  React.useEffect(() => {

    getTopSources({ source: ApiSourceEnums.newsApi }).then(res => {
      const sourcesRes = res?.sources?.map(source => {
        return { value: source?.id, name: source?.name }
      })
      setSources(sourcesRes);
    }).catch(console.log);

  }, []);


  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  const handleSearch=()=>{
    runChecks();
    dispatch(filterAction({keywords,from:filterDate(startDate),to:filterDate(endDate),source}));
    closeModal();
  }

  const runChecks=()=>{
    if(endDate.getTime()<startDate.getTime()) toast.error(Strings.invalid_date_error);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"

    >
      <div className="pl-24 pr-24">


        <h4 className='text-lg font-bold'>Filter News Feed</h4>
        <hr />
        <div className='flex flex-col gap-4 mt-4 mb-48'>


          <div>
            <input type="text" id="first_name" class="bg-zinc border border-gray-300 text-secondary focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-3 text-md rounded-none" placeholder="Enter Keywords" required onChange={(event)=>setKeywords(event.target.value)} />
          </div>

          <SelectSearch options={sources} placeholder="Choose your Source" search  onChange={value=>setSource(value)}/>

          <div>
            <div style={{ border: "10px", borderColor: "black" }}>
              <label className='font-bold'>From: </label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div style={{ border: "10px", borderColor: "black" }}>
              <label className='font-bold'>To: </label>
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
            </div>
          </div>
        </div>

        <hr/>
        <div className='flex gap-2 mt-4'>
        <button type="button" className="text-gray-900 text-primary border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-primary  dark:focus:ring-gray-800" onClick={handleSearch}>Search</button>
        <button type="button" className="text-danger border border-danger focus:ring-4 focus:outline-none focus:ring-danger-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-danger-600 dark:focus:ring-gray-800" onClick={closeModal} >Cancel</button>
        </div>




      </div>

    </Modal>
  );
}