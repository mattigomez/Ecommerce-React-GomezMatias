import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useFirebase from '../../hooks/useFirebase';

/* import saveFromJSONToFirebase from '../../services/saveFromJSONToFirebase'; */


const ItemListContainer = () => {
const {categoryId}  = useParams()
const [products, loading, error] = useFirebase(categoryId)

/*   useEffect(() => {
    saveFromJSONToFirebase()
  },[]) */

  return (
    <>
    {error && <h1>hubo un error {error}</h1>}
    {loading ?
    <h1> cargando ...</h1>
    : 
    <ItemList productos={products}/>
    }
    </>
  )
}


export default ItemListContainer