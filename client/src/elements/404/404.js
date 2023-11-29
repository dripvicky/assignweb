import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1> Oops....! you can't access this page</h1>
      <h6> only admin access this page</h6>
      <Link to='/login'>go back to login</Link>
    </div>
  )
}

export default Error
