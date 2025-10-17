import React from 'react';
import { Link, useRouteError } from 'react-router';
import image from '../assets/image/error-404.png'

const ErrorPage = () => {
    const error=useRouteError()
    return (
      <>
        <div className='flex flex-col justify-center items-center'>
            <img src={image} alt="" />
            <h1 className='text-4xl'>Oops, page not found!</h1>
            <p>{error.statusText|| error.message}</p>
            <Link to='/'><button className='bg-[#632EE3] text-white px-4 py-2 rounded-md mb-5'>Go Back</button></Link>
              
        </div>
         <footer className=" grid grid-cols-1 md:grid-cols-3 bg-black text-white p-10 text-center md:text-start">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
   
  </nav>
</footer>
      </>
    );
};

export default ErrorPage;