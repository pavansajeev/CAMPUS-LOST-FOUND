import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user=JSON.parse(localStorage.getItem("user"));
  const navigate=useNavigate()
  return (
    <div className='mt-13'>
        <h1 className='text-center text-3xl'>User Profile</h1>
        <div className='max-w-md mx-auto mt-6 bg-white p-4 rounded-2xl shadow-2xl'>
            <h2 className='text-xl font-bold mb-2 text-center'>{user?.username}</h2>
            <p className='text-gray-600 mb-4 text-center'>{user?.email}</p>
            <div className='flex flex-col gap-4  '>
            <button className='text-white mb-4 bg-blue-600 hover:bg-blue-500 rounded-2xl'>Items Reported Lost</button>
            <button className='text-white mb-4 bg-blue-600 hover:bg-blue-500 rounded-2xl'>Items Reported Found</button>
            </div>
        </div>
    </div>
  )
}

export default Profile