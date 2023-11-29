import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import './Admin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [admin,setAdmin] = useState(false)
  const [allUser, setAllUSer] = useState([])
  const [selectedUser,setSelectedUser] = useState(null)

  const navigate = useNavigate()

  const User = JSON.parse(localStorage.getItem('userInfo'))
  useEffect(() => {
    const getalluser = async () => {
      const res = await axios.get('http://localhost:3001/api/user/getalluser',)
      setAllUSer(res.data)
    }
    getalluser()
  }, [User,allUser])

  useEffect(()=>{
    if(User?.secretKey){
      setAdmin(true)
    }else{
      setAdmin(false)
      navigate('/404')
    }
  },[User])

  useEffect(()=>{
    const deleteUser = async()=>{
      const res = await axios.post('http://localhost:3001/api/user/delete/'+selectedUser?._id)
      alert(res.data)
    }
    deleteUser()
  },[selectedUser])

  return (
    <div className='user'>
      <Navbar />
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
            {
              allUser?.map((u, ind) => (
                <tr key={ind}>
                  <td>{ u.username}</td>
                  <td>{u.email }</td>
                  <td>{u.address }</td>
                  <td>{u.city }</td>
                  <td>{ u.adharno}</td>
                  <td>{u.fathername }</td>
                  <td>{u.mothername }</td>
                  <td>{u.contact }</td>
                  <td>{ u.gender}</td>
                  <td>{ u.dob}</td>
                  <td><button onClick={()=>setSelectedUser(u)}>delete</button></td>
                </tr>

              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin
