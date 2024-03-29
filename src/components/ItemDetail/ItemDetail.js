import React from "react"
import { Button, Divider, Grid, Typography,Box } from "@mui/material"
import ImageGrid from "../ImageGrid/ImageGrid";
import { useState } from "react";
import MainImage from "../MainImage/MainImage";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import './ItemDetail.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemDetail = ({id,name,price,img,category,description,stock}) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    // console.log(quantity)
    
    const {addItem, getProductQuantity} =useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        // console.log(`la cantidad agregada es: ${quantity}`)
         console.log(quantity)
        setQuantityToAdd(quantity)
        const productToadd = {
            id, name, price, quantity
        }

        addItem(productToadd)
        
    }
    
    const productQuantity = getProductQuantity(id)
    console.log(productQuantity)

    return (
        //Mejorar vista del detalle     
        <div>
            <Grid container spacing={1} style={{ maxWidth:1100, margin:"0 auto"}}>
                <Grid item sm={1}>
                    <ImageGrid images ={img} onSelect={setSelectedImage} selectedImage={selectedImage}/>
                </Grid>
                <Grid item sm={5}>
                    <MainImage src={img[selectedImage]}/>
                </Grid>
                <Grid item sm={5}>
                    <Grid container direction="column" style={{height: '100%'}}>
                        <Typography variant="subtitle1">
                            {category}
                        </Typography>
                        <Divider />
                        <Box mt={2}>
                            <Typography variant="h4">{name}</Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant="subtitle1">{description}</Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant="h5">S/. {price}</Typography>
                        </Box>
                        {
                            quantityToAdd === 0 ? (
                                <ItemCount stock={stock} onAdd={handleOnAdd} initial={productQuantity}/>    
                            ) : (
                                <Link to='/cart' className = "OptionItem">Terminar mi Compra</Link>
                            )
                         }
                        
                        {/* <Button variant="contained" color="primary" style={{marginTop: "auto"}}>
                            Añadir al carrito
                        </Button>  */}
                    </Grid>
                </Grid>
            </Grid>            
        </div>

    )
}

export default ItemDetail