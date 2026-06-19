import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'
import LostForm from './LostForm'

const Lost = () => {

     const [data,setdata]=useState([])
     const [showForm, setShowForm] = useState(false)
    const ProductsUrl="http://localhost:3000/lost"
    console.log(ProductsUrl)
    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const response=await axios.get(ProductsUrl)
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
         <div onClick={() => setShowForm(true)} className='flex justify-center mb-4'>
             <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
             Request for lost item
         </button>
        </div>
        <div className='m-5'>
            <h2 className='font-bold text-4xl p-3 underline'>Lost Items</h2>
        </div>
        {showForm && <LostForm />}
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
            data.map((product)=>(
                <Product 
                    key={product._id}
                    id={product._id}
                    title={product.name}
                    description={product.description}
                    location={product.location}
                    date={product.date}
                    image={product.image}
                />
            )

            )
        }
        </div>
    </>
  )
}

export default Lost