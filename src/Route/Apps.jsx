import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router";
import AppsCards from "../assets/Component/AppsCards";

const Apps = () => {
  let data = useLoaderData();
  let navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <p
        className="text-center font-bold text-4xl"
      >
        Loading .....
      </p>
    );
  }

  return (
    <div className="bg-gray-200 ">
      <div className="max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="title text-center space-y-6 py-5">
          <h1 className="font-bold text-4xl ">Our All Applications</h1>
          <p>
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="search-section flex justify-between py-5">
          {/* search section start */}
          <p>({data.length}) Apps Found</p>
          <label className="input bg-gray-200">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>

          {/* search section end */}
        </div>
        <div className="card-container grid grid-cols-1 md:grid-cols-4 gap-4 md:pb-7">
          {data.map((item) => (
            <AppsCards item={item}></AppsCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
