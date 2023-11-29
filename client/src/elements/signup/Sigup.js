import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './signup.css'

const Sigup = () => {
  const [userType, setUserType] = useState('')
  const [username, setuserName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [adharno, setadharno] = useState('')
  const [gender, setgender] = useState('')
  const [contact, setcontact] = useState('')
  const [address, setaddress] = useState('')
  const [dob, setdob] = useState('')
  const [fathername, setfathername] = useState('')
  const [mothername, setmothername] = useState('')
  const [city, setcity] = useState('')
  const [secretKey,setSecretKey] = useState('')

  const navigate = useNavigate()

  const handleAdminRegister = async(e) =>{
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/api/user/admin-register',{
        secretKey,username,email,password
      })
      if(res.data === 'invalid admin' || res.data === 'you are already registered'){
        alert(res.data)
      }else{
        alert('register successfully')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleUserRegister = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/api/user/register',{
        username,email,password,adharno,gender,contact,address,dob,fathername,mothername,city
      })
      if(res.data === 'user already registered'){
        alert(res.data)
      }else{
        alert('register successfully')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='signup'>
      <div className='main'>
        <h1>Register your self</h1>
        <div className='radio-box'>
          register as
          <input type='radio' name='radio' onChange={() => setUserType('user')} />user
          <input type='radio' name='radio' onChange={() => setUserType('admin')} />admin
        </div>
        <div className='input-box'>
          {
            userType === 'admin' ?
              <input type='text' className='secretKey' placeholder='enter the secret key' onChange={(e)=>setSecretKey(e.target.value)}/>
              : null
          }
          {
            userType === 'admin'?
          <div className='admin-box'>
            <input type='text' placeholder='enter your username' onChange={(e)=>setuserName(e.target.value)}/>
            <input type='email' placeholder='enter your email' onChange={(e)=>setemail(e.target.value)}/>
            <input type='password' placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}/>
          </div>
          :
          <div className='user-box'>
            <input type='text' placeholder='enter your username' onChange={(e)=>setuserName(e.target.value)}/>
            <input type='email' placeholder='enter your email' onChange={(e)=>setemail(e.target.value)}/>
            <input type='password' placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}/>
            <input type='text' placeholder='enter your adhar no.' onChange={(e)=>setadharno(e.target.value)}/>
            <div className='user-radio-box'>
            <input type='radio' name='gender' value='male' onChange={(e)=>setgender(e.target.value)}/>male
            <input type='radio' name='gender' value='female' onChange={(e)=>setgender(e.target.value)}/>female
            <input type='radio' name='gender' value='other' onChange={(e)=>setgender(e.target.value)}/>other
            </div>
            <input type='text' placeholder='enter your address' onChange={(e)=>setaddress(e.target.value)}/>
            <input type='text' placeholder='enter your city' onChange={(e)=>setcity(e.target.value)}/>
            <input type='date' placeholder='enter your date of birth' onChange={(e)=>setdob(e.target.value)}/>
            <input type='text' placeholder='enter your father name' onChange={(e)=>setfathername(e.target.value)}/>
            <input type='text' placeholder='enter your mother name' onChange={(e)=>setmothername(e.target.value)}/>
            <input type='text' placeholder='enter your contact no.' onChange={(e)=>setcontact(e.target.value)}/>

          </div>
          }
          {
            userType === 'admin' ?
            <button type='submit' className='btn' onClick={handleAdminRegister} >admin register</button>
            :
            <button type='submit' className='btn' onClick={handleUserRegister} >user register</button>
          }
          <span style={{marginBottom:'15px'}}>already have an account ? <Link to='/login'>click here</Link> </span>
        </div>
      </div>
    </div>
  )
}

export default Sigup
