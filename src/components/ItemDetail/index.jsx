import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';
import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = ({ detail }) => {

    const [quantity, setQuantity] = useState(0)

    const {addProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        console.log(`Se agregó una cantidad de productos: ${cantidad}`)
        setQuantity(cantidad)
        addProduct({...detail,quantity: cantidad})
    }

    return (
        <div className="detail-container">
            <img className="detail-img" src={detail.image} alt="detail" />
            <aside className="detail-aside">
                <h2>{detail.title}</h2>
                <h5>{detail.description}</h5>
                {
                    quantity === 0 ?
                    <ItemCount 
                        stock={detail.stock} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <button className="btn btn-secondary p-2">
                        <Link to="/cart" className='btnCarrito'>
                            Ir al carrito
                        </Link>
                    </button>
                }
            </aside>
        </div>
    );
};

export default ItemDetail;