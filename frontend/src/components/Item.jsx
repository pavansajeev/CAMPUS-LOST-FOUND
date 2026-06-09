import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id,name,description}) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition'>
        <div className='p-4'>
            <h2 className='text-lg font-bold text-gray-800'>{name}</h2>
            
            <p>{description}</p>
           
            <Link to={`/item/${id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Details
              </button>
              </Link>
        </div>
    </div>
  )
}
export default Item
