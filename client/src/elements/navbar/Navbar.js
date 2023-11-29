import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import './navbar.css'
import Sidebar from '../sidebar/Sidebar';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [show,setShow] = useState(false)

  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.removeItem('userInfo')
    navigate('/login')
  }
  return (
    <div>
      <div className={show ?'sidenav' : 'navbar'}>
        <div className='first'>
            <span onClick={()=>setShow(prevshow=>!prevshow)}> <IoMenu/></span>
            <span className='span'>home</span>
            <span className='span'>contact</span>
        </div>
        <div className='second'>
            <span className='span'>service</span>
            <span className='span'>about</span>
            <span className='span' onClick={handleLogout}>logout</span>
        </div>
      </div>
      <Sidebar show={show}/>
    </div>
  )
}

export default Navbar
