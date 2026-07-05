import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ClaimRequest = () => {

    const {id}=useParams()
    const [item,setItem]=useState(null)
    const [answer,setAnswer]=useState("")
    useEffect(()=>{

    const fetchItem=async()=>{

        try{
          console.log(id);
            const response=await axios.get(
                `http://localhost:3000/found/${id}`
            )
            
            console.log(response.data)
            setItem(response.data.data)

        }

        catch(error){

            console.log(error)

        }

    }

    fetchItem()

},[id])
const handleSubmit=async()=>{
  if(!item)
  {
    alert("Item not loaded")
    return;
  }
  if(answer.trim()==="")
  {
    alert("Please enter your answer!")
    return;
  }
  try {
    const user=JSON.parse(localStorage.getItem("user"))
    const response=await axios.post("http://localhost:3000/claimrequest",{
      foundItemId:item._id,
      claimantId:user._id,
      answer:answer

    })
    alert(response.data.message);
    setAnswer("");
  } catch (error) {
      console.log(error)
      alert(
            error.response?.data?.message ||
            "Failed to submit claim request."
        );
  }
    

}
  return (
    <div className='max-w-md mx-auto p-8 m-8 bg-white rounded shadow-2xl '>
        <h2 className='text-2xl font-bold mb-4'>Claim Verification</h2>
        <p>{item ? item.verifyquestion : "Loading..."}</p>
       <input

type="text"

value={answer}

onChange={(e)=>setAnswer(e.target.value)}

className='border p-2 rounded-lg mb-4'

placeholder='Enter your answer'

/>
<button onClick={handleSubmit}

className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'

>
            Submit
        </button>
    </div>
  )
}

export default ClaimRequest