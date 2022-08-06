import React from "react"
import { Button, Divider, Grid, Typography,Box } from "@mui/material"
import ImageGrid from "../ImageGrid/ImageGrid";
import { useState } from "react";
import MainImage from "../MainImage/MainImage";

const ItemDetail = ({name,price,img,category,description,stock}) => {
    const [selectedImage, setSelectedImage] = useState(0);

    
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
                        
                        <Button variant="contained" color="primary" style={{marginTop: "auto"}}>
                            Añadir al carrito
                        </Button> 
                    </Grid>
                </Grid>
            </Grid>            
        </div>

    )
}

export default ItemDetail