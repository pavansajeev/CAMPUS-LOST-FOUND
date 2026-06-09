import Home from "./components/Home"
import FoundForm from "./components/FoundForm"
import Lost from "./components/Lost"
import Product from "./components/Product"
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'

function App()
{
    return(
        <>
            <BrowserRouter>
                <nav className='bg-green-800 shadow-lg text-white flex'>
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
                        </ul>
                    </div>

                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lost' element={<Lost />}/>
                    <Route path='/found' element={<FoundForm />}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App