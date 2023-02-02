import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopProvider";
import generateOrderObject from "../../services/generateOrderObject";
import TableRow from "./TableRow";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import FormComp from "../../components/Form";
import Spinner from 'react-bootstrap/Spinner';

const Cart = () => {

    const {products, total, cleanCart} = useContext(Shop);

    const [formVis, setFormVis] = useState(false);

    const [loader, setLoader] = useState(false)

    const confirmPurchase = async(dataDelFormulario) => {
      
    const {telefono, nombre, email} = dataDelFormulario

      try {

        setLoader(true);
  
        const order = generateOrderObject({
          //realizar formulario
          nombre,
          email,
          telefono,
          cart: products,
          total: total()
        })
  
  //almacenamos order en firebase
  
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()

  //actualizamos stock de productos

      for (const productCart of products) {

        const productRef = doc(db, "products", productCart.id);

        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      alert("Orden confirmada, ID: " + docRef.id);
  
      
    } catch (error) {
      console.log(error);
    } finally{
      setLoader(false);
      setFormVis(false);
      }


}
  return (

    <>
    {
      products.length !== 0 ? 

      <>
      <table className="table table-success table-striped">
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
    {
    loader ?
    <Spinner animation="border" />
    :
    <button onClick={() => setFormVis(true)}>Confirmar Compra</button>
    }  
      </>
      :
      <>
      <h1>No hay productos en el carrito.</h1>
      <button>
        <Link to = "/">Home</Link>
      </button>
      </>
  }

    {
      formVis ?
      <FormComp
        confirmPurchase = {confirmPurchase}
        formVis = {formVis}
        setFormVis = {setFormVis}
        />
        : null
    }
    </>

  )
}

export default Cart;
