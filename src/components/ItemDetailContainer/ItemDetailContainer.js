import { useState,useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import {products} from "../../asyncMock";
import { Grid } from "@mui/material";

const ItemDetailContainer = () => {
    
    const [product, setProduct] =useState(products['0'])
    

    useEffect (() => {
            getProductsById('1')
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })     
    }, [])
    
    return (
        <Grid>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </Grid>
    )
}

export default ItemDetailContainer