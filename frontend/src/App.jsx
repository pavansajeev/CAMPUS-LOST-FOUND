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

import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { CircleUserRound, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import axios from "axios"
import bgimg from "./assets/bg.jpeg"
import logo from "./assets/logo.png";


function App()
{

    const navigate = useNavigate();

const [open, setOpen] = useState(false);

const menuRef = useRef(null);

useEffect(() => {
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);

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
                <nav className="bg-[#0F172A] shadow-lg text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center h-20">

      {/* Logo */}

      <img
        src={logo}
        alt="logo"
        className="w-16 h-16 object-contain"
      />

      {/* Navigation */}

      <div className="flex gap-14 ml-16 font-bold">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/lost">Lost</NavLink>

        <NavLink to="/found">Found</NavLink>

      </div>

      {/* Right Side */}

      <div className="ml-auto">

        {!user ? (

          <NavLink to="/login">

            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl">
              User Login
            </button>

          </NavLink>

        ) : (

          <div className="relative" ref={menuRef}>

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2"
            >
              <CircleUserRound
                size={36}
                className="hover:text-blue-300"
              />

              <ChevronDown
                size={18}
                className={`transition ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (

              <div className="absolute right-0 mt-3 w-48 rounded-xl bg-white shadow-xl text-black overflow-hidden z-50">

                <button
                  onClick={() => {
                    navigate("/profile");
                    setOpen(false);
                  }}
                  className="block w-full text-left px-5 py-3 hover:bg-gray-100"
                >
                  👤 Profile
                </button>

                <button
                  onClick={() => {
                    handlelogout();
                    setOpen(false);
                  }}
                  className="block w-full text-left px-5 py-3 text-red-600 hover:bg-red-50"
                >
                  🚪 Logout
                </button>

              </div>

            )}

          </div>

        )}

      </div>

    </div>

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