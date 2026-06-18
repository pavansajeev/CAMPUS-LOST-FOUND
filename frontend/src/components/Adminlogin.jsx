import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Admindash from './Admindash'

const Adminlogin = () => {

    const {register,handleSubmit,reset,setValue}=useForm()
    const navigate=useNavigate()
    const onsubmit=async(data)=>{
        try{
        const response=await fetch(
            "http://localhost:3000/adminlogin",
            {
                method:'POST',
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(data)
            }
        )
       if(!response.ok)
       {
        throw new Error("Something went wrong")
       }
       alert("Login Successfull");
       localStorage.setItem("isAdmin","true")
       reset();
       navigate('/Admindash');
    }
    catch(error)
    {
        console.log(error)
        alert("Failed to login")
    }
    }

  return (
    <div>
        <form className=' bg-white flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md' onSubmit={handleSubmit(onsubmit)}>
            <h2 className='text-2xl font-bold text-center'>Admin Login</h2>
            <label htmlFor="username">Username</label>
            <input
            {...register("username")} 
            type="text" 
            className='border p-2 rounded-2xl' 
            id='username' 
            placeholder='Enter username' 
            />
            <label htmlFor="password">Password</label>
            <input 
            {...register("password")}
            type="password" 
            className='border p-2 rounded-2xl' 
            id='password' 
            placeholder='Enter password' 
            />
            <button type='Submit' className='rounded-2xl p-3 m-3 bg-green-400'>Login</button>
        </form>
    </div>
  )
}

export default Adminlogin