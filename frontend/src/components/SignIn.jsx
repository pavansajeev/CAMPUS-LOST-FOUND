import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const {register,reset,handleSubmit}=useForm()
  const navigate=useNavigate()
  const onsubmit=async(data)=>{
    try {
      const url="http://localhost:3000/signup";
      const method='POST'
      const response=await fetch(url,{
        method:method,
        headers:{"Content-type":"Application/json"},
        body:JSON.stringify(data),
      })
      const result=await response.json();
      if(!response.ok){
        alert(result.message);
        return;
      }
      alert("Account created successfully");
      reset();
      navigate('/login');
    } catch (error) {
      console.log(error)
      alert("Failed to create account")
    }
  };


  return (
    <div>
        <form className=' bg-white flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md' onSubmit={handleSubmit(onsubmit)}>
            <h2 className='text-2xl font-bold text-center mb-4'>Create Account</h2>
            <label htmlFor="username">Username</label>
            <input 
              {...register("username")}
              type="text" 
              id="username" 
              placeholder="Username" 
              />
            <label htmlFor="email">Email</label>
            <input
              {...register("email")} 
              type="email" 
              id="email" 
              placeholder="Email" 
              />
            <label htmlFor="password">Password</label>
            <input 
              {...register("password")}
              type="password" 
              id="password" 
              placeholder="Password" 
              />
            <button type="submit" className='rounded-2xl bg-green-400 p-4 m-4 hover:bg-green-600 text-white'>Sign Up</button>
            <p>Already have an account? <a href="/Login" className='text-blue-500 hover:underline'>Log in</a></p>
        </form>
    </div>
  )
}

export default SignIn