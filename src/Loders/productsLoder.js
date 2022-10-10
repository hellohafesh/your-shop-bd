import { getStoredCard } from "../utilities/fakedb";

export const productsLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();



    const saveCart = getStoredCard();
    const initialCart = [];
    for (const id in saveCart) {
        const addedproduct = products.find(product => product.id === id);
        if (addedproduct) {
            const quantity = saveCart[id];
            addedproduct.quantity = quantity;
            initialCart.push(addedproduct);
        }
    }
    return { products: products, initialCart: initialCart };
}