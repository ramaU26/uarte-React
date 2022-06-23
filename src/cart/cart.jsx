//componente formulario de carrito
import React from 'react';

const Cart = ({ cart, total, onCheckoutClicked }) => {
    const cartItems = cart.map((cartItem) => {
        return <li key={cartItem.id}>{cartItem.name}</li>;
    }
    );
    return (
        <div className="cart">
            <ul>{cartItems}</ul>
            <button onClick={onCheckoutClicked}>Checkout</button>
            <p>Total: {total}</p>
        </div>
    );
}


export default Cart;
