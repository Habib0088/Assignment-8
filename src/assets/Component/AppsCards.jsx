import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { IoMdDownload } from 'react-icons/io';
import { Link } from 'react-router';

const AppsCards = ({item}) => {
  
let {id,image, title, ratingAvg,downloads}=item
    
    return (
       <>
        <Link to={`/AppDetails/${id}`}>
        <div className='py-6 bg-white h-full p-2 rounded-md'>
                <img className="rounded-md bg-gray-100 h-[200px] m-auto" src={image} />
                 <h4 className='font-semibold mb-2'>{title}</h4>
           
                 <div className="lastLine flex justify-between items-center">
                   <button className="flex justify-between items-center bg-[#F1F5E8] px-2 text-green-600 rounded-md">
                     {downloads} <IoMdDownload />
                   </button>
                   <button className="flex items-center justify-between bg-[#FFF0E1] text-[#FF8811] px-2 rounded-md">
                     {ratingAvg}
                     <FaStar />
                   </button>
                 </div>
        </div>
        </Link>
       </>
    );
};

export default AppsCards;