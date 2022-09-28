import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const [missions, setMissions] = useState([])
    useEffect(() => {
        fetch('missions.json')
        .then(res => res.json())
        .then(data => setMissions(data))
    },[])
    

    return (
        <div className='home-container'>
            <div className='right-side'>
                {
                  missions.map(mission=>(<Cart mission={mission} key={mission.id}></Cart>))  
                }
            </div>
            <div className='left-side'>
                <h2>okk2</h2>
            </div>
        </div>
    );
};

export default Home;