import React, { useState } from 'react'
import {BrowserRouter, NavLink} from "react-router-dom"
import {Menu, X} from 'lucide-react'

const NavLinks = () => {
  return (
    <BrowserRouter>
    <NavLink to="/">
      Home
    </NavLink>

    <NavLink to="/projects" className="">
      Projects
    </NavLink>

    <NavLink to="/about" className="">
      About
    </NavLink>
  </BrowserRouter>
  )
}



const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = ()=>{
        setIsOpen(!isOpen);
    }
  return (
   <nav className='flex w-1/3 justify-end'>
    <div className='hidden w-full justify-between md:flex'>
        <NavLinks/>
    </div>
    {/* <div className="w-[75px]">
          <ThemeToggle />
        </div> */}
    <div className='md:hidden'>
        <button onClick={toggleNavbar}>
            {isOpen? <X/> : <Menu/>}

        </button>
    </div>
    {isOpen && (
        <div className='flex  basis-full flex-col items-center '>
        <NavLinks/>

        </div>
    )}
   </nav>
  )
}

export default Nav

