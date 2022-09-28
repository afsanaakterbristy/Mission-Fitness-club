import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
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
        <>
            <h3 className='home-title'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>  Mission Fitness club </h3>
            <p className='activities'>Click Your Today Activities</p>
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
            </>
    );
};

export default Home;