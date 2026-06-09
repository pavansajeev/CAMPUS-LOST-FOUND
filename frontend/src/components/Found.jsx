import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import  Item from './Item'

const Found = () => {const [data,setdata]=useState([])
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