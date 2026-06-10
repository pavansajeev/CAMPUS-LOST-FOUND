import React from 'react'

const Profile = () => {
  return (
    <div>
        <h1 className='text-center text-3xl'>User Profile</h1>
        <div className='max-w-md mx-auto mt-6 bg-white p-4 rounded shadow'>
            <h2 className='text-xl font-bold mb-2'>Swathi</h2>
            <p className='text-gray-600 mb-4'>Email: swathisas.com</p>
            <p className='text-gray-600 mb-4'>Phone: 123-456-7890</p>
            <div className='flex flex-col gap-4  '>
            <button className='text-white mb-4 bg-blue-600 hover:bg-blue-300'>Items Reported Lost</button>
            <button className='text-white mb-4 bg-blue-600 hover:bg-blue-300'>Items Reported Found</button>
            </div>
        </div>
    </div>
  )
}

export default Profile