import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({id,title,description,price,image}) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition'>
        <img src={image} alt={title} className='=w-full h-40 object-cover'/>
        <div className='p-4'>
            <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <Link to={`/products/${id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Details
              </button>
              </Link>
        </div>
    </div>
  )
}
export default Product
