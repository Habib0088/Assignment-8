import React from 'react';
import { Link, useRouteError } from 'react-router';
import image from '../assets/image/error-404.png'

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={image} alt="" />
            <h1 className='text-4xl'>Oops, page not found!</h1>
            <p>{error.statusText|| error.message}</p>
            <Link to='/'><button className='bg-[#632EE3] text-white px-4 py-2 rounded-md'>Go Back</button></Link>
            
        </div>
    );
};

export default ErrorPage;