import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,description,time,img,quantity} = props.mission;
    return (
         <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='name'>{name}</p>
            <p>description:{description}</p>
            <p><small>time:{time}</small></p>
            <p><small>quantity:{quantity}</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to cart</p>   
            </button>
        </div>
    );
};

export default Cart;