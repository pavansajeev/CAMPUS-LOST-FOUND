import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Admindash = () => {
    const navigate=useNavigate()
    useEffect(()=>{
    const isAdmin=localStorage.getItem("isAdmin")
    if(!isAdmin)
    {
        navigate('/adminlogin')
    }
    },[])
    const logout=()=>{
        localStorage.removeItem("isAdmin")
        navigate('/adminlogin')
    }
  return (
    <div>
        <h1>Admin Dashboard</h1>
        <button onClick={logout} className='rounded p-3 bg-red-600'>Logout</button>
    </div>

  )
}

export default Admindash