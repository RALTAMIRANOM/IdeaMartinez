import { useState,useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import {products} from "../../asyncMock";
import { Grid } from "@mui/material";
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
    
    const [product, setProduct] =useState(products['0'])
    
    const {productId} = useParams()

    useEffect (() => {
            getProductsById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })     
    }, [productId])
    
    return (
        <Grid>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </Grid>
    )
}

export default ItemDetailContainer