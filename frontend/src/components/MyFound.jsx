import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MyFound = () => {

const [items,setItems]=useState([])

const user=JSON.parse(localStorage.getItem("user"))

useEffect(()=>{

fetchItems()

},[])

const fetchItems=async()=>{

const response=await axios.get("http://localhost:3000/found")

const myItems=response.data.filter(

item=>item.userId===user._id

)

setItems(myItems)

}

return (

<div className='mt-10'>

<h1 className='text-3xl text-center mb-6'>
My Found Items
</h1>

<div className='grid md:grid-cols-2 gap-5'>

{

items.map(item=>(

<div
key={item._id}
className='bg-white shadow-lg p-5 rounded-xl'
>

<h2 className='text-xl font-bold'>
{item.title}
</h2>

<p>{item.description}</p>

<p>
Location : {item.location}
</p>

<p>
Date : {item.date}
</p>

</div>

))

}

</div>

</div>

)

}

export default MyFound