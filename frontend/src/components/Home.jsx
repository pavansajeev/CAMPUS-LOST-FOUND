import React from 'react'

const Home = () => {
  return (
    <>  <div>
        <img src="/assets/bg.png" alt="Campus Lost and Found" className='w-full h-full object-cover' />
       </div>
        <div className='text-center m-5 bg-amber-100 p-5 rounded-lg shadow-lg'>
            <h6 className='text-lg'>Welcome to</h6>
            <h2 className='text-5xl font-mono'>Campus-Lost-Found</h2>
            <h3 className='text-2xl text-gray-600 p-4'>Lost . Found . Reunited</h3>
        </div>
    </>
  )
}

export default Home