import React, { useEffect, useState } from 'react'
import './User.css'
import Navbar from '../navbar/Navbar'
import axios from 'axios'

const User = () => {
  const [me,setMe] = useState([])
  const currentUser = JSON.parse(localStorage.getItem('userInfo'))

  useEffect(()=>{
    const getUser = async()=>{
      const res = await axios.get('http://localhost:3001/api/user/getuser/'+currentUser?._id)
      setMe(res.data)
    }
    getUser()
  },[currentUser])
  return (
    <div className='user'>
      <Navbar/>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>email</th>
              <th>address</th>
              <th>city</th>
              <th>adharno</th>
              <th>fathername</th>
              <th>mothername</th>
              <th>contact</th>
              <th>gender</th>
              <th>dob</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td>{ me.username}</td>
                  <td>{me.email }</td>
                  <td>{me.address }</td>
                  <td>{me.city }</td>
                  <td>{ me.adharno}</td>
                  <td>{me.fathername }</td>
                  <td>{me.mothername }</td>
                  <td>{me.contact }</td>
                  <td>{ me.gender}</td>
                  <td>{ me.dob}</td>
                  <td><button>delete</button></td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User
