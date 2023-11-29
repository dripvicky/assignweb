import React from 'react'
import './sidebar.css'

const Sidebar = ({show}) => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <div className={show ? 'sidebar' : 'none'}>
      <div className='content'>
        <h3>welcome,</h3>
        <span>{user?.username}</span>
      </div>
    </div>
  )
}

export default Sidebar
