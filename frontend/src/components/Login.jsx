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
        </form>
       </div>
    )
}

export default Login