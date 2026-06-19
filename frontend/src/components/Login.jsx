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
            const result=await response.json()
            if(!response.ok)
            {
                alert(result.message);
                return;
            }
            localStorage.setItem("user",JSON.stringify(result.data));
           

            alert("Login successfull");
            localStorage.setItem("isUser","true")
            reset();
            window.location.href='/'
        } catch (error) {
            console.log(error)
        }
    }

    return(
       <div>

        <form className=' bg-white flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md' onSubmit={handleSubmit(onsubmit)}>
            <h2 className='text-2xl font-bold text-center'>Login</h2>
            <label htmlFor="email">Enter email:</label>
            <input
            {...register("email")} 
            type="email" 
            id="email" 
            placeholder="Email"
            className="border rounded h-9"
            />
            <label htmlFor="password">Enter password:</label>
            <input 
            {...register("password")}
            type="password" 
            id="password" 
            placeholder="Password"
            className="border rounded h-9" 
            />
            <button type="submit" className="rounded-2xl p-3 bg-green-500 hover:bg-green-700 text-white">Login</button>
            <p>Dont have an account? <a href="/Signin" className='text-blue-500 hover:underline'>Create an account</a></p>
        </form>
       </div>
    )
}

export default Login