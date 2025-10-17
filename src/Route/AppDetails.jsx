import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Swal from 'sweetalert2';
import { addDataToLS, getFromLS } from '../utility';
import Installation from './Installation';
const AppDetails = () => {
  const [install, setInstall] = useState(false);
  const[list,setList]=useState([])
  const { id } = useParams();
  const intId = parseInt(id);

  const allData = useLoaderData();
  const singleData = allData.find(a => a.id === intId);

  // Check if this app is already installed
  useEffect(() => {
    const data = getFromLS(); // get array from localStorage
    const convertedData = data.map(id => parseInt(id));
    const list=allData.filter(card=>convertedData.includes(card.id))
    setList(list);
    
  }, []);

  const handleInstall = (id) => {
    addDataToLS(id); // add to localStorage
    setInstall(true); // update state
    // Swal.fire({
    //   title: "Install Done!",
    //   icon: "success",
    //   draggable: true
    // });
  };

  const { title, image, ratingAvg, downloads, reviews, companyName, description, size, ratings } = singleData;

  const chartData = ratings.map(r => ({
    name: r.name,
    value: r.count
  }));

  return (
   
    <div className='py-2 md:py-10'>
     {
        // <Installation list={list}></Installation>
     }
      <div className="container max-w-[90%] md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left */}
        <div className="left col-span-1 md:col-span-4">
          <img className='h-2/3 w-full object-cover rounded-md' src={image} alt={title} />
        </div>

        {/* Right */}
        <div className="right col-span-1 md:col-span-8">
          <h2 className='font-bold text-2xl'>{title}</h2>
          <p>Developed by  <small className='text-blue-500'>{companyName}</small></p>

          {/* Stats */}
          <div className='grid grid-cols-3 pt-5 gap-4'>
            <div className="column ">
              <small className='text-[#00d390] text-2xl'><FiDownload /></small>
              <p>Downloads</p>
              <h2 className='text-2xl font-bold'>{downloads}M</h2>
            </div>
            <div className="column ">
              <FaStar className='text-2xl text-[#FF8811]' />
              <p>Average Ratings</p>
              <h2 className='text-2xl font-bold'>{ratingAvg}</h2>
            </div>
            <div className="column">
              <small className='text-[#632EE3] text-2xl'><AiFillLike /></small>
              <p>Total Reviews</p>
              <h2 className='text-2xl font-bold'>{reviews / 1000}K</h2>
            </div>
          </div>

          {/* Install Button */}
          <Link to='/Installation'>
          <button
            onClick={() => handleInstall(intId)}
            disabled={install}
            className='bg-[#00D390] px-4 py-2 rounded-md text-white mt-4'
          >
            {install ? `Installed` : `Install Now (${size}) MB`}
          </button></Link>
          
          
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="chart max-w-[90%] md:max-w-[80%] mx-auto my-8" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barSize={30}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="description max-w-[90%] md:max-w-[80%] mx-auto mt-8">
        <h3 className='text-2xl font-bold mb-2'>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
