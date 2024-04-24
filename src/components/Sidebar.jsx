import React from 'react'
import { BiSolidLogOut, BiSolidUserAccount } from 'react-icons/bi'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,
  BsPersonFillGear,
  BsAppIndicator,
  BsBank,
  BsListTask,
  BsCalendar}
 from 'react-icons/bs'
import { FcLeave } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {

    function Logout(){
        alert("hi");
        localStorage.removeItem("email");

    }

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsAppIndicator  className='icon_header'/> Employee App
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/profile">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/project">
                    <BsListTask className='icon'/> Projects
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/account">
                    <BsBank className='icon'/> Account
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCalendar className='icon'/> Leave
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Exit Form
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/editProfile">
                    <BsPersonFillGear className='icon'/> Edit Profile
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BiSolidLogOut className='icon' onClick={(e) => {e.preventDefault(); Logout();
            }}
            type="submit"/> Log Out
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar