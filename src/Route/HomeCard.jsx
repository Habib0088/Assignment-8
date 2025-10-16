import React from 'react';
import { IoMdDownload } from "react-icons/io";

const HomeCard = ({card}) => {

    let {title,ratingAvg,downloads,image}=card;
    
    return (
        <div>
            <img src={image}  />
            <h4>{title}</h4>
            
            <div className="lastLine flex justify-between">
        <button className='flex justify-between items-center'>{downloads} <IoMdDownload /></button>
        <button>{ratingAvg}</button>
            </div>
        </div>
    );
};

export default HomeCard;