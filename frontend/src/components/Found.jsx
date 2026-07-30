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
    const [search, setSearch] = useState("");
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
    const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase())
    );
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
        <div className="flex justify-center my-6">
        <input
            type="text"
            placeholder=" Search by item name, description or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        </div>
        {showForm && <FoundForm />}
         <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {
             filteredData.map((item)=>(
                 <Item 
                     key={item._id}
                     id={item._id}
                     title={item.name}
                     location={item.location}
                     date={item.date}
                     verifyquestion={item.verifyquestion}
                     description={item.description}
                     claimed={item.claimed}
                     userid={item.userid}
                 />
             )
             
             )
            
         }
         </div>
        
     </>
   )
}


export default Found