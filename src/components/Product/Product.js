import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {

    const {name, price, picture} = props.product;
    return (
        <div className='product'>
            <img src={picture} alt="img" />
            <div className='product-info'>
                <h3>Name: {name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;