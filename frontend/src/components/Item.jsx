import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Item = ({title,description,location,isAdmin,date,onDelete}) => {
  const navigate=useNavigate()
  const user=JSON.parse(localStorage.getItem("user"));
  return (
    <div className='bg-amber-50 shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition text-center ml-5'>
        <div className='p-4'>
            <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
            
            <p>{description}</p>
            <p>Location: {location}</p>
            <p>Date: {date}</p>
           
            {!isAdmin &&(
              <div>
                {user?(
              <button onClick={()=> navigate(`/claim/${id}`)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Request Claim
              </button>
              ):(
                <button onClick={()=> navigate('/login')} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Login to request claim
              </button>
              )}
              </div>
              )}
              {isAdmin &&(
                <div className='text-center'>
                <button className='border bg-red-600 text-white rounded-2xl p-3 m-3 hover:bg-red-500' onClick={()=>onDelete(id)}>
                  Delete
                </button>
                </div>
              )}
        </div>
    </div>
  )
}
export default Item
