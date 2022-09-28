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
                    <div className='left-cart'>
                         <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div>
                            <h3 className='cart-details'>Name:Akter</h3>
                            <p className='cart-details'>Dhaka,Bangladesh</p>
                        </div>
                    </div>
                    <div className='right-cart'>
                       <h4>Weight:53kg</h4>
                       <h4>Height:5.4ft</h4>
                    </div>
                  <div>
                        <h3 className='break-title'>Add A Break</h3>
                        <div className='exercise-time'>
                        <button className='break-btn'>30s</button>
                        <button className='break-btn'>40s</button>
                        <button className='break-btn'>50s</button>
                        <button className='break-btn'>60s</button>
                        <button className='break-btn'>70s</button>
                        </div>
                        
                </div>
                <div>
                    <h3 className='break-title'>Exercise Details</h3>
                        <div className='exercise-time'>
                        <h4>Exercise time</h4>
                        <h4>300</h4>
                        </div>
                        <div className='exercise-time'>
                        <h4>Break time</h4>
                        <h4>300</h4>
                        </div>
                </div>
               <button className='btn'>Activity Completed</button>

                </div>
               
            </div>
            </>
    );
};

export default Home;