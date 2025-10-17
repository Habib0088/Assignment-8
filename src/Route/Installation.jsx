import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getFromLS } from '../utility';
import InstallationList from './InstallationList';

const Installation = ({list}) => {
  console.log(list);
  

    return (
        <div className='bg-gray-100'>
            <div className='text-center  py-2 md:py-12 space-y-4'>
                <h1 className='text-4xl font-bold '>Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>{
                list.map(singleItem=><InstallationList singleItem={singleItem}></InstallationList>)
}
</div>
        </div>
    );
};

export default Installation;