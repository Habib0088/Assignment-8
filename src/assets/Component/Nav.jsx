import React from 'react';
import { Link, NavLink } from 'react-router';
import './nav.css'
import logo from'../image/logo.png'
import { FaGithub } from "react-icons/fa6";

const Nav = () => {
    let links=< >
    
    <NavLink to='/'><li className=' font-semibold hover:underline cursor-pointer mr-2'>Home</li></NavLink>
    <NavLink to='Apps'><li className='font-semibold hover:underline cursor-pointer mr-2'>App</li></NavLink>
    <NavLink to='Installation'><li className='font-semibold hover:underline cursor-pointer mr-2'>Installation</li></NavLink>
    
    </>
    return (
        
        
      <div className="navbar bg-base-100 shadow-sm  max-w-[90%] md:max-w-[80%] mx-auto border-x-0 shadow-none">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
 <Link to='/'> <div className='flex items-center'><img className='h-[30px]' src={logo} /> <small className='text-[#632EE3] font-bold ml-2'>HERO.IO</small></div></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
   

<Link to='https://github.com/dashboard'><button className='bg-[#632EE3] px-4 py-2 rounded-md flex items-center text-white'><FaGithub />
<p className='ml-2'>Contribute</p></button></Link>


  </div>
</div>
    );
};

export default Nav;