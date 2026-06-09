import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import  Item from './Item'
import FoundForm from './FoundForm'

const Found = () => {
    const [data,setdata]=useState([])
    const [showForm, setShowForm] = useState(false)
    const ItemUrl="https://fakestoreapi.com/products"
    console.log(ItemUrl)
    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const response=await axios.get(ItemUrl)
                console.log(response.data)
                setdata(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchdata()
    },[])
  return (
     <>
        <div onClick={() => setShowForm(true)} className='flex justify-center mb-4'>
             <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
             Add found Item
         </button>
        </div>
        {showForm && <FoundForm />}
         <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {
             data.map((item)=>(
                 <Item 
                     key={item.id}
                     name={item.name}
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