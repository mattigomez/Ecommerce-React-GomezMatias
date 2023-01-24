import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()


  useEffect(()=> {

    const getProduct= async() => {
      
      const docRef = doc(db, "products",id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setDetail(productDetail);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }

    getProduct();

/*     const getProductDetail = () => {

      const obtenerProducto = new Promise((res, rej) => {
        setTimeout(()=> {
          res(productJson)
        }, 3000)
      })

      obtenerProducto
      .then( productos => {
        if (id) { 
          const detalleProducto = productos.find(producto => producto.id.toString() === id) 
          console.log(detalleProducto) 
          setDetail(detalleProducto) 
        }
      })
      .catch(error => console.log(error))
    }

    getProductDetail() */

  }, [id])

  return (
    <div>
    {
      Object.keys(detail).length === 0 
        ? <h2>Aguarde un momento</h2>
        : <ItemDetail detail={detail}/>
    }
</div>
  )
}

export default ItemDetailContainer