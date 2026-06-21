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
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                lostitem.map((item)=>(
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
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                founditem.map((item)=>(
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
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-7'>
            {
                user.map((human)=>(
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