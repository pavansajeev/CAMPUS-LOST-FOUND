import React from 'react'
import { useNavigate } from 'react-router-dom'

export const User = ({id,username,email,onDelete}) => {

    const navigate=useNavigate()

  return (
    <div className='bg-amber-50 shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition text-center ml-5'>
        <h2 className='font-bold'>{username}</h2>
        <p>{email}</p>
        <button className='bg-red-600 text-white p-3 rounded-2xl m-3' onClick={()=>onDelete(id)}>Delete</button>
    </div>
  )
}

export default User