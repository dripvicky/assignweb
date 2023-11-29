import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Login.css'

const Login = () => {
  const [admin,setAdmin] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [secretKey,setSecretKey] = useState('')

  const navigate = useNavigate()

  const handleAdminLogin = async(e) =>{
    e.preventDefault()
    const res = await axios.post('http://localhost:3001/api/user/admin-login',{
      email,password,secretKey
    })
    if(res.data === 'invalid admin' || res.data === 'not registered'){
      alert(res.data)
    }else{
      alert('you are logged in')
      localStorage.setItem('userInfo',JSON.stringify(res.data))
      navigate('/admin-panel')
    }
  }
  const handleUserLogin = async(e)=>{
    e.preventDefault()
    const res = await axios.post('http://localhost:3001/api/user/login',{
      email,password,secretKey
    })
    if(res.data === 'not registered' || res.data === 'invalid user or password'){
      alert(res.data)
    }else{
      alert('login successfull')
      localStorage.setItem('userInfo',JSON.stringify(res.data))
      navigate('/user-panel')
    }
  }
  return (
    <div className='login'>
      <div className='main-box'>
      <h1>login yourself</h1>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          login as
          <input type='radio' name='type'onChange={()=>setAdmin(false)} />user
          <input type='radio' name='type' onChange={()=>setAdmin(true)}/>admin
        </div>
        {admin ? <input type='text' placeholder='enter your secret key' onChange={(e)=>setSecretKey(e.target.value)} />
        : null
         }
        <input type='email' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>
        {
          admin ? 
          <button type='submit' onClick={handleAdminLogin}>Admin Login</button>
          : 
          <button type='submit' onClick={handleUserLogin}>User Login</button>
        }
        <span>don't have an account ?<Link to='/'>click here </Link></span>
        </div>
    </div>
  )
}

export default Login
