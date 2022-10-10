import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getStoredCard } from '../../utilities/fakedb'
import './Shop.css';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setcart] = useState([]);
    const clearCart = () => {
        setcart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storecart = getStoredCard();
        const savecart = [];
        for (const id in storecart) {
            const addedproduct = products.find(product => (product.id === id));

            if (addedproduct) {
                const quantity = storecart[id];
                addedproduct.quantity = quantity;
                savecart.push(addedproduct)
            }
        }
        setcart(savecart);

    }, [products]);


    const handleAddToCart = (selectedProduct) => {
        let newcart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newcart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newcart = [...rest, exists];
        }

        setcart(newcart);
        addToDb(selectedProduct.id)
    };
    return (
        <div className='shop-container'>
            <div className="pro-container">
                {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <div className="order-container">
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;