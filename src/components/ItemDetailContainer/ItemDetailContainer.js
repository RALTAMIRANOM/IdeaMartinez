import { useState,useEffect } from "react";
// import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
//import {products} from "../../asyncMock";
import { Grid } from "@mui/material";
import { useParams } from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore';
import { db } from "../../services/firebase";
const ItemDetailContainer = () => {
    
    const [product, setProduct] =useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect (() => {

        getDoc(doc(db,'products',productId)).then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
            // getProductsById(productId)
            // .then(product => {
            //     setProduct(product)
            // })
            // .catch(error => {
            //     console.log(error)
            // })     
    }, [productId])
    
    return (
        <Grid>
            {loading ? <h1>Cargando...</h1> : <ItemDetail {...product} />}
        </Grid>
    )
}

export default ItemDetailContainer