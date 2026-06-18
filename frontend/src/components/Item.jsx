import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id,title,description,isAdmin,onDelete}) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition'>
        <div className='p-4'>
            <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
            
            <p>{description}</p>
           
            <Link to={`/item/${id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Request Claim
              </button>
              </Link>
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
