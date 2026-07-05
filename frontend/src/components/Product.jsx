import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Product = ({id,title,description,location,date,image,isAdmin,onDelete}) => {

  const user=JSON.parse(localStorage.getItem("user"))
  const navigate=useNavigate()

  return (
    <div className='bg-amber-50 shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition ml-5 mb-8'>
      <div className='flex items-center justify-center'>
        <img src={`http://localhost:3000${image}`} alt={title} className='=max-w-full max-h-full object-contain'/>
        </div>
        <div className='p-4'>
            <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
            <p>{description}</p>
            <p>Location: {location}</p>
            <p>Date: {date}</p>
            {!isAdmin &&(
              <div>
                {user?(
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-5" onClick={() => navigate(`/report-found/${id}`)}>
                Report Found
              </button>
              ):(
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-5" onClick={()=>navigate('/login')}>
                Login to report found
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
export default Product
