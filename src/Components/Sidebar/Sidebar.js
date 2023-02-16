import React ,{useState}from 'react';
import"./Sidebar.css"
import Home from '../Home/Home';
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import SidebarList from './SidebarList';
const Sidebar = () => {
    
    
    
    const [expandSideBar, setexpandSideBar] = useState(true);
    const handleExpandClick=()=>{
        setexpandSideBar(!expandSideBar)
    }
    
    return (
        <div className='container-fluid sidebar-section'>
            <div className={expandSideBar?"sidebar-expand sidebar":'sidebar'}>
                   <div className='icon-for-sidebar-expand'>
                         <p onClick={handleExpandClick}>
                            {
                                expandSideBar?(<BsChevronLeft size={30}/>):(<BsChevronRight size={30}/> )
                            }
                        </p>
                   </div>
                   <SidebarList/>
            </div>
            <div className='container'>
                <Home/>
            </div>
        </div>
    );
};

export default Sidebar;