import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" ></img>
            <div className="pro-info">
                <p className='pro-name'>{name} </p>
                <p>Price : ${price}</p>
                <p><small>Seller : ${seller}</small></p>
                <p><small>Ratings : ${ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;