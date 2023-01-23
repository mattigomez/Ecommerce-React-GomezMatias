import React from 'react'
import "./styles.css";

const TableRow = ({product}) => {
  return (
        <tr>
            <th scope="row">{product.id}</th>
            <td><img src={product.image} alt="table-row" className='img'/></td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><button>Eliminar</button></td>
          </tr>
  )
}

export default TableRow