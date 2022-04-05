import React from 'react';
import useProduct from '../../hooks/useProduct';
import './Reviews.css';

const Reviews = () => {
    const [product] = useProduct();
    return (
        <div className='home-cart'>
        {
            product.map(produc => <div className='cart' key={produc.id}>
                <img src={produc.img} alt="" />
                <h3>{produc.name}</h3>
                <h4>{produc.review}</h4>
                <h4>Rating: {produc.star}</h4>
                <h4>Date: {produc.date}</h4>
            </div>)
        }  
        </div>
    );
};

export default Reviews;