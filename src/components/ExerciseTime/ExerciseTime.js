import React, { useState } from 'react';
import './ExerciseTime.css';
import Swal from 'sweetalert2'
import { addToDb } from '../../utilities/fakedb';

const ExerciseTime = ({exerciseTime}) => {
    
    const [breakTime, setBreakTime] = useState(0);
    const handleBreakTime = (breakTime ) => { 
         setBreakTime(breakTime);
         addToDb(breakTime);
    }

    const activity = () => {
        Swal.fire(
                'Good job!',
                'You Done All Thing Properly!',
                'success'
                )
    }
    //console.log(exerciseTime);
    let totalTime = 0;
    for (const mission of exerciseTime) {
        totalTime  = totalTime  + mission.time;
    }

    return (
 
        <div>
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
                        
                        <button onClick={()=>handleBreakTime(20)}  className='break-btn'>20<span>s</span></button>
                        <button onClick={()=>handleBreakTime(30)}  className='break-btn'>30<span>s</span></button>
                        <button onClick={()=>handleBreakTime(40)}  className='break-btn'>40 <span>s</span></button>
                        <button onClick={()=>handleBreakTime(50)}  className='break-btn'>50 <span>s</span></button>
                        <button onClick={()=>handleBreakTime(60)}  className='break-btn'>60 <span>s</span></button>
                        
                        </div>
                        
                </div>
                <div>
                    <h3 className='break-title'>Exercise Details</h3>
                        <div className='exercise-time'>
                        <h4>Exercise time</h4>
                        <h4>{totalTime}</h4>
                        </div>
                        <div className='exercise-time'>
                        <h4>Break time</h4>
                        <h4>{breakTime}</h4>
                        </div>
                </div>
               <button onClick={activity} className='btn'>Activity Completed</button>
        </div>
    );
};

export default ExerciseTime;