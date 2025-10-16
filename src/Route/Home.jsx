import React from "react";
import { Link, useLoaderData } from "react-router";
import HomeCard from "./HomeCard";
import image from "../assets/image/hero.png";

const Home = () => {
  let data = useLoaderData();

  return (
    <>
      <div className="banner text-center max-w-[90%] md:max-w-[80%] mx-auto">
        <h1 className="font-bold text-6xl text-center py-4">
          We Build <br />
          <span className="text-[#632ee3]">Productive</span> Apps
        </h1>
        <p>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="button-line">
          <Link to="https://play.google.com/store/games?device=windows">
            <button className="outline px-6 py-2 my-3 mr-3 rounded-md">
              <h4>Play Store</h4>
            </button>
          </Link>
          <Link to="https://www.apple.com/app-store/">
            <button className="outline px-6 py-2 my-3 mr-3 rounded-md">
              App Store
            </button>
          </Link>
        </div>

        <div className="image">
          <img src={image} className="w-2/3 mx-auto" alt="" />
        </div>
      </div>
      {/* Blue area */}
      <div className="py-14 text-center bg-[#9f62f2] space-y-6">
        <h2 className="font-bold text-white text-4xl">
          Trusted by Millions, Built for You
        </h2>

        <div className="statistice-area grid grid-cols-1 md:grid-cols-3 w-full text-white ">
          {/* first column */}
          <div>
            <p>Total Downloads</p>
            <h1 className="text-4xl font-bold">21.6 M</h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="text-4xl font-bold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="text-4xl font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
     <div className="bg-gray-200">
       <div className="text-center my-5">
        <h1 className="text-4xl font-bold text-center my-7">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className=" card-container grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[90%] md:max-w-[80%] mx-auto">
        {data.map((card) => (
          <HomeCard card={card}></HomeCard>
        ))}
      </div>
      <div className="m-auto text-center py-9 text-white m-auto">
        <Link to='Apps'><button  className="px-4 py-2 bg-[#632EE3] text-white rounded-md ">Show All</button></Link>
      </div>
     </div>
    </>
  );
};

export default Home;
