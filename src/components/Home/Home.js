import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import './Home.css';
import ExerciseTime from '../ExerciseTime/ExerciseTime';

const Home = () => {
    const [missions, setMissions] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);
   
    useEffect(() => {
        fetch('missions.json')
        .then(res => res.json())
        .then(data => setMissions(data))
    },[])
    
    const handleAddToCart = (mission) => {
        //console.log(mission);
        const newCart = [...exerciseTime, mission];
        setExerciseTime(newCart)
    }
   

    return (
        <>
            <h3 className='home-title'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>  Mission Fitness club </h3>
            <p className='activities'>Click Your Today Activities</p>
           <div className='home-container'>           
            <div className='right-side'>
                {
                        missions.map(mission => (<Cart mission={mission} key={mission.id}
                        handleAddToCart ={handleAddToCart}></Cart>))  
                }
            </div>
                <div className='left-side'>

                    <ExerciseTime exerciseTime={exerciseTime} ></ExerciseTime>
                    

                </div>
               
            </div>
            </>
    );
};

export default Home;