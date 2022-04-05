import React from 'react';
import './Cirt.css';
const Cirt = (props) => {
    const {img, name, review,star,date} = props.produc;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{review}</h4>
            <h4>Rating: {star}</h4>
            <h4>Date: {date}</h4>
        </div>
    );
};

export default Cirt;