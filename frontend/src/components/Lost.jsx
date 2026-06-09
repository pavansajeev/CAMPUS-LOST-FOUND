import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'

const Lost = () => {

     const [data,setdata]=useState([])
    const ProductsUrl="https://fakestoreapi.com/products"
    console.log(ProductsUrl)
    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const response=await axios.get(ProductsUrl)
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
            data.map((product)=>(
                <Product 
                    key={product._id}
                    id={product._id}
                    title={product.name}
                    description={product.description}
                    price={product.price}
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