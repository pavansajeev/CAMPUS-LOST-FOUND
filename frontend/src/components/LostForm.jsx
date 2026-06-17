import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const LostForm = () => {

  const {register,handleSubmit,reset,setValue}=useForm()
  const navigate=useNavigate()

  const onsubmit=async(data)=>{
    try{
    console.log(data)
    const url="http://localhost:3000/lost"
    const method='POST';
    const response=await fetch(url,{
      method:method,
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),
    })
    if(!response.ok)
      throw new Error("Failed to add product")

    alert("Product Added");
    reset();
    navigate('/lost');
    }
    catch(error){
      console.log(error)
      alert("Failed to add product");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 m-8 bg-white rounded shadow-2xl">
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onsubmit)}>
        <h1 className='text-center text-3xl'>Enter details of lost item</h1>
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
        {...register("imageurl")}
        placeholder='Image'
        className='w-full rounded-2xl border-green-500 p-4'
      />
       <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
         Submit
       </button>
      </form>
    </div>
  )
}


export default LostForm