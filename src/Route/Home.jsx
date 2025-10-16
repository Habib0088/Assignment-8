import React from 'react';
import { useLoaderData } from 'react-router';
import HomeCard from './HomeCard';

const Home = () => {
    let data=useLoaderData()

    
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
                data.map(card=> <HomeCard card={card}></HomeCard>)
            }
        </div>
    );
};

export default Home;