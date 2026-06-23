import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <div className='mt-13'>
      <h1 className='text-center text-3xl'>User Profile</h1>

      <div className='max-w-md mx-auto mt-6 bg-white p-6 rounded-2xl shadow-2xl'>

        <h2 className='text-xl font-bold text-center'>
          {user?.username}
        </h2>

        <p className='text-gray-600 text-center mb-6'>
          {user?.email}
        </p>

        <div className='flex flex-col gap-4'>

          <button
            className='text-white bg-blue-600 hover:bg-blue-500 rounded-2xl p-3'
            onClick={() => navigate('/my-lost')}
          >
            Items Reported Lost
          </button>

          <button
            className='text-white bg-blue-600 hover:bg-blue-500 rounded-2xl p-3'
            onClick={() => navigate('/my-found')}
          >
            Items Reported Found
          </button>

          <button
            className='text-white bg-red-600 hover:bg-red-500 rounded-2xl p-3'
            onClick={() => {
              localStorage.removeItem("user");
              navigate('/login');
            }}
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  )
}

export default Profile