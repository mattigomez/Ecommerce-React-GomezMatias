import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import "./styles.css";

const TableRow = ({product}) => {

  const {removeProduct} = useContext(Shop)
  return (
        <tr>
            <th scope="row">{product.id}</th>
            <td><img src={product.image} alt="table-row" className='img'/></td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><button onClick={() => removeProduct(product.id)}>Eliminar</button></td>
          </tr>
  )
}

export default TableRow