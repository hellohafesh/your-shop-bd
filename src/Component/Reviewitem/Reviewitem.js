import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Reviewitem.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Reviewitem = ({ product, handleRemoveItem }) => {
    const { id, name, shipping, price, quantity, img } = product;
    return (
        <div className='review'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviw-details">
                <div className="detail">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping : ${shipping}</small></p>
                    <p><small>Quantity :{quantity}</small></p>
                </div>
                <div className='delete-con'>
                    <button onClick={() => handleRemoveItem(id)} className="btn">
                        <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviewitem;