import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Home from "./Home"

const Login = () => {

    const{register,reset,handleSubmit}=useForm()
    const navigate=useNavigate()

    const onsubmit=async(data)=>{
        try {
            const response=await fetch("http://localhost:3000/login",{
                method:'POST',
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(data)

            })
            if(!response.ok)
            {
                throw new Error("Failed to login")
            }
            alert("Login successfull");
            localStorage.setItem("isUser","true")
            reset();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return(
       <div>

        <form className=' bg-white flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md' onSubmit={handleSubmit(onsubmit)}>
            <h2 className='text-2xl font-bold text-center'>Login</h2>
            <label htmlFor="email">Email:</label>
            <input
            {...register("email")} 
            type="email" 
            id="email" 
            placeholder="Email"
            />
            <label htmlFor="password">Password:</label>
            <input 
            {...register("password")}
            type="password" 
            id="password" 
            placeholder="Password" 
            />
            <button type="submit" className="rounded-2xl p-3 bg-green-500">Login</button>
            <p>Dont have an account? <a href="/Signin" className='text-blue-500 hover:underline'>Create an account</a></p>
        </form>
       </div>
    )
}

export default Login