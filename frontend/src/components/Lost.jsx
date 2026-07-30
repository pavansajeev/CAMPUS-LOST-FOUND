import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'
import LostForm from './LostForm'
import { useNavigate } from 'react-router-dom'

const Lost = () => {

    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem("user"))
     const [data,setdata]=useState([])
     const [showForm, setShowForm] = useState(false)
     const [search, setSearch] = useState("");
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
    const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase()) ||
    product.location.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
         <div className='flex justify-center mb-4'>
            {user?(
             <button onClick={() => setShowForm(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
             Request for lost item
         </button>
         ):
            <button onClick={() => navigate('/login')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
             Login to request for lost item
         </button>
         }
        </div>
        <div className='m-5'>
            <h2 className='font-bold text-4xl p-3 underline'>Lost Items</h2>
        </div>
        <div className="flex justify-center my-6">
        <input
            type="text"
            placeholder=" Search by item name, description or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        </div>
        {showForm && <LostForm />}
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
            filteredData.map((product)=>(
                <Product 
                    key={product._id}
                    id={product._id}
                    title={product.name}
                    description={product.description}
                    location={product.location}
                    date={product.date}
                    image={product.image}
                    userid={product.userid}
                />
            )

            )
        }
        </div>
    </>
  )
}

export default Lost