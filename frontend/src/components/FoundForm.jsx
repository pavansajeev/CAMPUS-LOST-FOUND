import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const FoundForm = () => {

  const {register,handleSubmit,reset,setValue}=useForm()
  const navigate=useNavigate()

  const onsubmit=async(data)=>{
    const user = JSON.parse(localStorage.getItem("user"))
    try{
        const response=await fetch("http://localhost:3000/found",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({...data,userid:user._id})
        })
     
    if(!response.ok)
      throw new Error("Failed to add product")

    alert("Product Added");
    reset();
    window.location.href='/found'
    
    }
    catch(error){
      console.log(error)
      alert("Failed to add product");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 m-8 bg-white rounded shadow-2xl">
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onsubmit)}>
        <h1 className='text-center text-3xl'>Enter details of found item</h1>
       <input 
        {...register("name")}
        placeholder='Product Name'
        className='w-full rounded-2xl border-green-500 p-4'  
      />
      <textarea 
        {...register("description")}
        placeholder='Description'
        className='w-full rounded-2xl border-green-500 p-4'
      />
      <input 
        {...register("location")}
        placeholder='Location'
        className='w-full rounded-2xl border-green-500 p-4'
      />
      <input 
        {...register("date")}
        type='Date'
        placeholder='Date'
        className='w-full rounded-2xl border-green-500 p-4'
      />
      <input 
        {...register("verifyquestion")}
        type='text'
        placeholder='Verification Question'
        className='w-full rounded-2xl border-green-500 p-4'
      />
      <input 
        {...register("contactInfo")}
        placeholder='Contact Information'
        className='w-full rounded-2xl border-green-500 p-4'
      />
       <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
         Submit
       </button>
      </form>
    </div>
  )
}


export default FoundForm