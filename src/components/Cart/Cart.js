import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
let total = 0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
}

    return (
        <div className="cart-style">
            <p>This is cart{cart.length}</p>
    <p>price{total}</p>
           
        
             
        </div>
    );
};

export default Cart;