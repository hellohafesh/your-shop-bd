import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <h1>Order Sammary</h1>
            <p>Selected Item :{props.cart.length}</p>
            <p>Total Price :$</p>
            <p>Total Shipping Charge :$</p>
            <p>Tax :$</p>
            <h6>Grand Total :$</h6>

            <button><p>Clear Cart</p></button>
            <br />
            <button><p>Review Order</p></button>
        </div>
    );
};

export default Cart;