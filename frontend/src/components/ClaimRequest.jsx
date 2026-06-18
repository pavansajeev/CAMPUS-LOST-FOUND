import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ClaimRequest = () => {

    const {id}=useParams()
    const [item,setItem]=useState(null)
  return (
    <div className='max-w-md mx-auto p-8 m-8 bg-white rounded shadow-2xl '>
        <h2 className='text-2xl font-bold mb-4'>Claim Verification</h2>
        <p>what is the colour of this thing?</p>
        <input type="text" className='border p-2 rounded-lg mb-4' 
        placeholder='Enter your answer' />
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
            Submit
        </button>
    </div>
  )
}

export default ClaimRequest