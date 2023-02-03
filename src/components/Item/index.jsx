import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Item = ({product}) => {
    return (
        <div className="card" style={{width: "18rem"}} >
        <img className="card-img-top img-fluid" src={product.image} alt={`id-${product.id}`}/>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <Link to={`/detail/${product.id}`} className="btn btn-primary">Detalles</Link>
        </div>
      </div>
    );
};

export default Item;