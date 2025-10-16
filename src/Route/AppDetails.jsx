import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";



const AppDetails = () => {
    let {id}=useParams()
    let intId=parseInt(id)
 
    

    let allData=useLoaderData()
    let singleData=allData.find(a=> a.id===intId)
    
    
    let {title,image,ratingAvg,downloads,reviews,companyName,description,size}=singleData
    console.log(title);
    
    return (
        <div className='py-2 md:py-10'>
        <div className="container max-w-[90%] md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-12">
            {/* Left */}
            <div className="left col-span-1 md:col-span-4">
                <img className='h-2/3' src={image} alt="" />
            </div>
            {/* Right side */}
            <div className="right col-end-1 md:col-span-8">
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p>Developed by <small className='text-blue-500'>{companyName}</small></p>
                {/* column of download */}
               <div className='col-container grid grid-cols-3 pt-5 space-y-2'>
                 <div className='column'>
                    <div className="download ">
                        <small className='text-[#00d390] text-2xl'> <FiDownload /></small>
                        
                        <p>Downloads</p>
                        <h2 className='text-2xl font-bold'>{downloads}M</h2>

                    </div>
                </div>
                <div className='column'>
                    <div className="download">
                        <small className=' '></small>
                        <FaStar className='text-2xl text-[#FF8811]' />

                        <p>Average Ratings</p>
                        <h2 className='text-2xl font-bold '>{ratingAvg}M</h2>

                    </div>
                </div>
                <div className='column'>
                    <div className="download">
                        <small className='text-[#632EE3] text-2xl'><AiFillLike /></small>
                        


                        <p>Total Reviews</p>
                        <h2 className='text-2xl font-bold'>{reviews/1000}K</h2>

                    </div>
                </div>
               </div>
                {/* button */}
                <button className='bg-[#00D390] px-4 py-2 rounded-md text-white mt-4'>Install Now ({size}MB)</button>
            </div>

            {/* Description area */}

            
        </div>
        <div className="description max-w-[90%] md:max-w-[80%] mx-auto">
                <h3 className='text-2xl font-bold'>Description</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;