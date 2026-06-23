import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import  Item from './Item'
import FoundForm from './FoundForm'
import { useNavigate } from 'react-router-dom'

const Found = () => {
    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem("user"))
    const [data,setdata]=useState([])
    const [showForm, setShowForm] = useState(false)
    const ItemUrl="http://localhost:3000/found"
    console.log(ItemUrl)
    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const response=await axios.get(ItemUrl)
                console.log(response.data.data)
                setdata(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchdata()
    },[])
  return (
     <>
        <div className='flex justify-center mb-4'>
            {user?(
             <button onClick={() => setShowForm(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
             Add found Item
             </button>
             ):
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>navigate('/login')}>
             Login to add found Item
             </button>
             }
        </div>
        <div>
            <h2 className='font-bold text-4xl p-3 underline'>Found Items</h2>
        </div>
        {showForm && <FoundForm />}
         <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {
             data.map((item)=>(
                 <Item 
                     key={item.id}
                     title={item.name}
                     location={item.location}
                     description={item.description}
                 />
             )
             
             )
            
         }
         </div>
        
     </>
   )
}


export default Found