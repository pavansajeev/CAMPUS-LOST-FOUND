import React from 'react'

const SignIn = () => {
  return (
    <div>
        <form className=' bg-white flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-center mb-4'>Sign In</h2>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <p>Already have an account? <a href="/Login" className='text-blue-500 hover:underline'>Log in</a></p>
        </form>
    </div>
  )
}

export default SignIn