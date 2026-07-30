import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from './Product'
import Item from './Item'
import User from './User'


const Admindash = () => {
    const navigate=useNavigate()
    const [lostitem,setlostitem]=useState([])
    const [founditem,setfounditem]=useState([])
    const [user,setuser]=useState([])

    const [lostSearch, setLostSearch] = useState("");
    const [foundSearch, setFoundSearch] = useState("");
    const [userSearch, setUserSearch] = useState("");

    const userref=useRef(null)
    const lostref=useRef(null)
    const foundref=useRef(null)

    useEffect(()=>{
    const isAdmin=localStorage.getItem("isAdmin")
    if(!isAdmin)
    {
        navigate('/adminlogin')
    }
    
    const fetchdata=async()=>{
    try{
    const lostresponse=await axios.get("http://localhost:3000/lost")
    const foundresponse=await axios.get("http://localhost:3000/found")
    const userresponse=await axios.get("http://localhost:3000/users")
    setuser(userresponse.data.data)
    setlostitem(lostresponse.data.data)
    setfounditem(foundresponse.data.data)
    }
    catch(error)
    {
        console.log(error)
    }
    }
    fetchdata()
    },[])



    const logout=()=>{
        localStorage.removeItem("isAdmin")
        navigate('/adminlogin')
    }

    const deletelost=async(id)=>{
        try {
            await axios.delete(`http://localhost:3000/lost/${id}`)
            setlostitem(lostitem.filter(item=>item._id!==id))
            alert("Item deleted")
        } catch (error) {
            console.log(error)
        }
    }

    const deletefound=async(id)=>{
        try {
            await axios.delete(`http://localhost:3000/found/${id}`)
            setfounditem(founditem.filter(item=>item._id!==id))
            alert("Item deleted")
        } catch (error) {
            console.log(error)
        }
    }

    const deleteuser=async(id)=>{
        try {
            await axios.delete(`http://localhost:3000/users/${id}`)
            setuser(user.filter(item=>item._id!==id))
            alert("Item deleted")
        } catch (error) {
            console.log(error)
        }
    }

    const scrolltolost=()=>{
        lostref.current?.scrollIntoView({
            behavior:'smooth'
    })
    }

    const scrolltofound=()=>{
        foundref.current?.scrollIntoView({
            behavior:'smooth'
        })
    }

    const scrolltouser=()=>{
        userref.current?.scrollIntoView({
            behavior:'smooth'
        })
    }

    const filteredlostitem = lostitem.filter((item) =>
    item.name.toLowerCase().includes(lostSearch.toLowerCase()) ||
    item.description.toLowerCase().includes(lostSearch.toLowerCase()) ||
    item.location.toLowerCase().includes(lostSearch.toLowerCase())
    );

    const filteredfounditem = founditem.filter((item) =>
    item.name.toLowerCase().includes(foundSearch.toLowerCase()) ||
    item.description.toLowerCase().includes(foundSearch.toLowerCase()) ||
    item.location.toLowerCase().includes(foundSearch.toLowerCase())
    );

    const filtereduser = user.filter((item) =>
    item.username.toLowerCase().includes(userSearch.toLowerCase()) ||
    item.email.toLowerCase().includes(userSearch.toLowerCase())
    );
  return (
    <>
        <div className='flex justify-end p-4'>
            <button onClick={logout} className='rounded p-3 bg-red-600 text-white'>Logout</button>
        </div>
        <div className='text-center'>
            <h2 className='font-mono text-5xl'>Admin Dashboard</h2>
            <button className='border bg-amber-300 p-4 m-7 rounded-2xl' onClick={scrolltolost}>Manage Lost items</button>
            <button className='border bg-amber-300 p-4 m-7 rounded-2xl' onClick={scrolltofound}>Manage Found items</button>
        </div>
        <div className='text-center'>
            <button className='border bg-amber-300 p-4 rounded-2xl' onClick={scrolltouser}>Manage Users</button>
        </div>
        <div ref={lostref}>
        <h2 className='text-4xl font-bold mb-7 mt-25 ml-5'>Lost items</h2>
        <div className="flex justify-center my-6">
        <input
            type="text"
            placeholder=" Search by item name, description or location..."
            value={lostSearch}
            onChange={(e) => setLostSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        </div>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                filteredlostitem.map((item)=>(
                    <Product 
                        key={item._id}
                        id={item._id}
                        title={item.name}
                        description={item.description}
                        location={item.location}
                        date={item.date}
                        image={item.image}
                        isAdmin={true}
                        onDelete={deletelost}
                    />
                )
            )
            }
        </div>
        </div>
        <div ref={foundref}>
        <h2 className='text-4xl font-bold mt-25 mb-7 ml-5'>Found items</h2>
        <div className="flex justify-center my-6">
        <input
            type="text"
            placeholder=" Search by item name, description or location..."
            value={foundSearch}
            onChange={(e) => setFoundSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        </div>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                filteredfounditem.map((item)=>(
                    <Item 
                        key={item._id}
                        id={item._id}
                        title={item.name}
                        description={item.description}
                        location={item.location}
                        date={item.date}
                        isAdmin={true}
                        onDelete={deletefound}
                    />
                )
            )
            }
        </div>
        </div>
        <div ref={userref}>
            <h2 className='text-4xl font-bold mt-25 mb-7 ml-5'>Users</h2>
            <div className="flex justify-center my-6">
        <input
            type="text"
            placeholder=" Search by username or email"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        </div>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-7'>
            {
                filtereduser.map((human)=>(
                    <User 
                        key={human._id}
                        id={human._id}
                        username={human.username}
                        email={human.email}
                        onDelete={deleteuser}
                    />
                ))
            }
        </div>
        </div>
    </>
    

  )
}

export default Admindash