import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { MdOutlineTrackChanges } from "react-icons/md";
 import { FcDisclaimer } from "react-icons/fc";
 import { FaUser } from "react-icons/fa";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                < FaUser className='icon_header '/> 
                <p className='ml-2'>Profile</p>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaUser className='icon'/> Create User
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/request">
                    <FcDisclaimer  className='icon'/> Create File
                </a>
            </li>
        
           
         
         
        </ul>
    </aside>
  )
}

export default Sidebar