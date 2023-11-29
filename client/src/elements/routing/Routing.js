import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Sigup from '../signup/Sigup'
import Login from '../login/Login'
import Admin from '../admin-panel/Admin'
import User from '../user-panel/User'
import Error from '../404/404'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Sigup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin-panel' element={<Admin/>}/>
        <Route path='/user-panel' element={<User/>}/>
        <Route path='/404' element={<Error/>}/>
    </Routes>
  )
}

export default Routing
