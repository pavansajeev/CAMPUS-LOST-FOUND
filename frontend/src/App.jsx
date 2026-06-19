import Home from "./components/Home"
import Lost from "./components/Lost"
import Product from "./components/Product"
import Found from "./components/Found"
import Profile from "./components/Profile"
import SignIn from "./components/SignIn"
import Login from "./components/Login"
import Adminlogin from "./components/Adminlogin"
import Admindash from "./components/Admindash"
import ClaimRequest from "./components/ClaimRequest"
import {Routes,Route,NavLink, useLocation } from 'react-router-dom'
import axios from "axios"
import bgimg from "./assets/bg.jpeg"


function App()
{
const location=useLocation()
const ishomepage=location.pathname==='/';

    const user=JSON.parse(localStorage.getItem("user"))
    const handlelogout=()=>{
        localStorage.removeItem("user")
        alert("Logged out")
        window.location.reload()
    }
    return(
        <div style={
            !ishomepage?{
                backgroundImage:`linear-gradient( rgba(255,255,255,0.7),
        rgba(255,255,255,0.7)),url(${bgimg})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        minHeight: "100vh"
                
            }:{}
        }>
            
                <nav className='bg-yellow-500 shadow-lg text-black flex-row '>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <ul className='flex space-x-6 py-4'>
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/lost'>Lost</NavLink>
                            </li>
                            <li>
                                <NavLink to='/found'>Found</NavLink>
                            </li>
                            <li>
                                {user&&(
                                <NavLink to='/profile'>Profile</NavLink>
                                )}
                            </li>
                            <li>
                                {user?(
                                    <button onClick={handlelogout}>
                                        Logout
                                    </button>
                                ):(
                                    <NavLink to='/login'>User login</NavLink>
                                )}
                            </li>
                            <li>
                                <NavLink to='/adminlogin'>Admin Login</NavLink>
                            </li>
                        </ul>
                    </div>

                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lost' element={<Lost />}/>
                    <Route path='/found' element={<Found />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/signin' element={<SignIn />}/>
                    <Route path='/Login' element={<Login />}/>
                    <Route path="/adminlogin" element={<Adminlogin />}/>
                    <Route path="/admindash" element={<Admindash />}/>
                    <Route path="/claim/:id" element={<ClaimRequest />}/>   
                </Routes>
            
        </div>
    )
}

export default App