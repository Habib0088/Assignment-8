import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const HomeCard = ({ card }) => {
  let {id, title, ratingAvg, downloads, image } = card;

  return (
    <>
      <Link to={`AppDetails/${id}`}>
        <div className="  bg-white p-2 rounded-md h-full">
          <img className="rounded-md bg-gray-200" src={image} />
          <h4>{title}</h4>

          <div className="lastLine flex justify-between items-center">
            <button className="flex justify-between items-center bg-[#F1F5E8] px-2 text-green-600">
              {downloads} <IoMdDownload />
            </button>
            <button className="flex items-center justify-between bg-[#FFF0E1] text-[#FF8811]">
              {ratingAvg}
              <FaStar />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HomeCard;
