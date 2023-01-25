import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import productJson from '../../data/products.json';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from "firebase/firestore"; 
/* import saveFromJSONToFirebase from '../../services/saveFromJSONToFirebase'; */


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const {categoryId}  = useParams()
  
/*   useEffect(() => {
    saveFromJSONToFirebase()
  },[]) */

  useEffect(()=> {

    const getProducts = async () => {
      let querySnapshot;
      if (categoryId){
        const q = query(collection(db, "products"), where("category", "==", categoryId));
        querySnapshot = await getDocs(q);
      } else{
        querySnapshot = await getDocs(collection(db, "products"));
      }
      const productosFirebase = [];
          querySnapshot.forEach((doc) => {
          const product = {
            id: doc.id,
            ...doc.data()
          }
          productosFirebase.push(product)
        });
        setProducts(productosFirebase)
    }

    getProducts()

  
    /* const getProducts = () => {

      const obtenerProductos = new Promise((res, rej) => {
        setTimeout(()=> {
          res(productJson)
        }, 3000)
      })

      obtenerProductos
      .then( productos => {
        if (categoryId) { 
          const productosFiltradosPorCategoria = productos.filter(producto => producto.category === categoryId) 
          console.log(productosFiltradosPorCategoria) 
          setProducts(productosFiltradosPorCategoria) 
        } else { 
          setProducts(productos) 
        }
      })
      .catch(error => console.log(error))
    }

    getProducts() */

   
  }, [categoryId])

  const handleChange = (event) => {
    const value = event.target.value
    const productsFiltradosPorInput = productJson.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
    setProducts(productsFiltradosPorInput)
  }


  return (
    <div>
        <input onChange={handleChange} placeholder='Realice la búsqueda de productos'></input>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer