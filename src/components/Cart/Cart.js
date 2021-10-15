import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.children)
    const {cart}= props;
    let totalQuantity = 0;
    let total =0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1
        }
        total= total+product.price * product.quantity;
        totalQuantity= totalQuantity + product.quantity;
    }

    const ship = total>0 ? 15:0;
    const tex= total*10/100;

    const totalPrice=total+ship+tex;
    
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Order Summary</h2>
            <p>Item order: {totalQuantity}</p>
            <p>Price: {total.toFixed(2)}</p>
            <p>Shipping: {ship}</p>
            <p>Esitimated Tex: {tex.toFixed(2)}</p>
            <h2>Total Price:{totalPrice.toFixed(2)}</h2>
            {props.children}
        </div>
    );
};

export default Cart;