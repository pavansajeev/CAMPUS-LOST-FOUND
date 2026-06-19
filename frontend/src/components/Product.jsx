import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({id,title,description,location,date,image,isAdmin,onDelete}) => {

  

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition'>
        <img src={`http://localhost:3000${image}`} alt={title} className='=w-full h-40 object-cover'/>
        <div className='p-4'>
            <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
            <p>{description}</p>
            <p>{location}</p>
            <p>{date}</p>
            <Link to={`/products/${id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Report Found
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
export default Product
