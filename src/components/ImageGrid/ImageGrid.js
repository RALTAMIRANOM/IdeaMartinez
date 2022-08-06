import React from 'react';
import { Grid } from "@mui/material";

const ImageGrid = ({images, onSelect, selectedImage}) => {
    return (
        <Grid container direction="column">
            {images.map((image,index) => (
                <img key={image.id_img} src={image.imglist} alt={image} height={80} width={80} onClick={() => onSelect(index)} style={{ border: index === selectedImage ? "solid 1px black" : "solid 1px #eee", cursor: "pointer"}}/>
            ))}            
        </Grid>

    )
}

export default ImageGrid