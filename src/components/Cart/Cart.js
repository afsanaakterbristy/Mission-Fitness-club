import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,description,time,img,quantity} = props.mission;
    return (
         <div className='mission'>
            <img src={img} alt="" />
            <div className='mission-info'>
            <h2 className='name'>{name}</h2>
            <p>Description:{description}</p>          
            <p><small>Quantity:{quantity}</small></p>
             <p><small>Time:{time}</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to List</p>   
            </button>
        </div>
    );
};

export default Cart;