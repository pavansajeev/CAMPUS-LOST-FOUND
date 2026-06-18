import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Item = ({id,name,description}) => {
  const navigate=useNavigate()
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition'>
        <div className='p-4'>
            <h2 className='text-lg font-bold text-gray-800'>{name}</h2>
            
            <p>{description}</p>
           
          
              <button onClick={()=> navigate(`/claim/${id}`)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Request Claim
              </button>

        </div>
    </div>
  )
}
export default Item
