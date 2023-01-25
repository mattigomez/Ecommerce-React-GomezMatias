import React from 'react';
import { useContext } from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { Shop } from '../../context/ShopProvider';
import {Link} from 'react-router-dom'
import './styles.css';

const CartWidget = () => {
    // consumimos context para ver cantidad de elementos en nuestro changuito

    const {countCart}= useContext(Shop)

    return (
        <Link to="/cart">
           <HiShoppingCart style={{height:35, width:35}}/> 
           <span>{countCart()}</span>
        </Link>
    );
};

export default CartWidget;