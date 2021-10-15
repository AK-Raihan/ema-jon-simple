import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Product = (props) => {
    const{img,name,price,seller,stock}=props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="content-div">
                <h4 style={{color:"blue"}}>{name}</h4>
                <p>By: {seller}</p>
                <p>Price: {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handleAddToCart(props.product)} className='purches-btn'>{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};
export default Product;