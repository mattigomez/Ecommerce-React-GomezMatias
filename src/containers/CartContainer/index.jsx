import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopProvider";
import TableRow from "./TableRow";

const Cart = () => {

    const {products} = useContext(Shop);

  return (
    <div>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Imagen</th>
            <th scope="col">Titulo</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return <TableRow key={product.id} product={product}/>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
