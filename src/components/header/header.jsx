import React from 'react'
import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { refreshAction } from "../../redux/actions/filterAction";
import Actions from './actions.jsx';
import FilterModal from "./filter.jsx";
import NewsLogo from "../../assets/newslogo.jpg";
import Dropdown from '../dropdown/dropdown.jsx';
import { ApiSourceEnums } from '../../utils/constants.js';

const Header = ({setApiSource,apiSource}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [displayMobileMenu,setDisplayMobileMenu]=React.useState(false);

  const dispatch = useDispatch();
  
  const handleRefresh = () => {
    try {
      dispatch(refreshAction());
    }
    catch (err) {
      console.log("Errors");
    }
  }

  const handleHeaderDisplay=()=>{
    setDisplayMobileMenu(!displayMobileMenu);
  }

  return (
    <nav className='bg-gray-700 w-full'>

      <div className='text-primary p-6 shadow-xl flex justify-between items-center w-full'>
        <div className='flex gap-2 items-center'>
        <img src={NewsLogo} height={75} width={75} className='rounded-full shadow-2xl'/>
        <h4 className='font-bold text-primary text-sm md:text-xl'>INSSOCRIPTA NEWS</h4>

        </div>

        <div className='hidden md:inline'>
          <Actions setIsOpen={setIsOpen} handleRefresh={handleRefresh} apiSource={apiSource} setApiSource={setApiSource}/>
        </div>

        <div className='md:hidden' onClick={handleHeaderDisplay}>
          <GiHamburgerMenu />
        </div>
      </div>

      {(displayMobileMenu) && <div className='p-2 transition-transform duration-300 ease-in-out transform'>
        <Actions className={"!flex-col !justify-start !items-start !gap-2 !w-50"} setIsOpen={setIsOpen} handleRefresh={handleRefresh} apiSource={apiSource} setApiSource={setApiSource}/>
      </div>}
     
     <FilterModal modalIsOpen={isOpen} setIsOpen={setIsOpen} apiSource={apiSource} />

    </nav>
  )
}

export default Header;