const Login = () => {
    return(
       <div>

        <form className=' bg-white flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-center'>Login</h2>
            <label htmlFor="email,username">Email or Username:</label>
            <input type="email" id="email,username" placeholder="Email or Username" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Password" />
            <button type="submit">Login</button>
            <p>Dont have an account? <a href="/Signin" className='text-blue-500 hover:underline'>Create an account</a></p>
        </form>
       </div>
    )
}

export default Login