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
import MyLost from './components/MyLost'
import MyFound from './components/MyFound'
import MyClaims from "./components/Myclaims"
import ViewClaims from "./components/Viewclaims"
import ReportFound from "./components/ReportFound"
import IncomingReports from "./components/IncomingReports";
import LostReports from "./components/LostReports"
import Footer from "./components/Footer";

import {Routes,Route,NavLink, useLocation } from 'react-router-dom'
import axios from "axios"
import bgimg from "./assets/bg.jpeg"
import logo from "./assets/logo.png";


function App()
{
const location=useLocation()
const ishomepage=location.pathname==='/';
const hidenavbar=location.pathname==='/Admindash'

    const user=JSON.parse(localStorage.getItem("user"))
    const handlelogout=()=>{
        localStorage.removeItem("user")
        alert("Logged out")
        window.location.href='/'
    }
    return(
        <div className="min-h-screen flex flex-col" 
            style={
            !ishomepage?{
                backgroundImage:`linear-gradient( rgba(255,255,255,0.7),
        rgba(255,255,255,0.7)),url(${bgimg})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        minHeight: "100vh"
                
            }:{}
        }>
            {!hidenavbar&&(
                <nav className='bg-[#F59E0B] shadow-lg text-black flex-row '>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <ul className='flex gap-10 space-x-6 py-4 '>
                            <li className="w-25 h-15">

                                <img src={logo} alt="LOGO" />
                            </li>

                            <li className="font-bold pt-4">
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className="font-bold pt-4">
                                <NavLink to='/lost'>Lost</NavLink>
                            </li>
                            <li className="font-bold pt-4">
                                <NavLink to='/found'>Found</NavLink>
                            </li>
                            <li className="font-bold pt-4">
                                {user&&(
                                <NavLink to='/profile'>Profile</NavLink>
                                )}
                            </li>
                            <li>
                                <div className="flex justify-end">
                                {user?(
                                    <button className="bg-red-600 rounded-2xl p-3 hover:bg-red-500 text-white" onClick={handlelogout}>
                                        Logout
                                    </button>
                                ):(
                                    <NavLink to='/login'>
                                        <button className="bg-blue-500 rounded-2xl p-3 hover:bg-blue-400 text-white">User Login</button>
                                    </NavLink>
                                )}
                                </div>
                            </li>
                            
                            
                        </ul>
                    </div>

                </nav>
                )}

            <main className="flex-1">
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
                    <Route path='/my-lost' element={<MyLost/>}/>
                    <Route path='/my-found' element={<MyFound/>}/>  
                    <Route path='/my-claims' element={<MyClaims/>}/>
                    <Route path="/claims/:id" element={<ViewClaims />} />
                    <Route path="/report-found/:id" element={<ReportFound />} />
                    <Route
                        path="/incomingreports"
                        element={<IncomingReports />}
                    />
                    <Route
                        path="/lostreports/:id"
                        element={<LostReports />}
                    />
                </Routes>
            </main>
                {!hidenavbar && <Footer />}
        </div>
    )
}

export default App