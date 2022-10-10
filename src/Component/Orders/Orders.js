import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        const remining = cart.filter(product => product.id !== id);
        setCart(remining);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <Reviewitem
                        key={product.id} handleRemoveItem={handleRemoveItem} product={product}></Reviewitem>)
                }{
                    cart.length === 0 && <div>
                        <h2> No Product In Your Cart</h2>
                        <h3>Chooese <Link to='/'>Here</Link> </h3>
                    </div>
                }
            </div>
            <div className="order-container">
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Orders;