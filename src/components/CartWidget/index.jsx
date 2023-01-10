import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import './styles.css';

const CartWidget = () => {
    return (
        <div>
           <HiShoppingCart style={{height:35, width:35}}/> 
        </div>
    );
};

export default CartWidget;