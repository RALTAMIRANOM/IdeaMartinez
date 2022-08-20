import './Item.css'
import * as React from 'react';
import { ImageListItem,ImageListItemBar, ThemeProvider, Button} from '@mui/material';
import theme from '../../themeConfig'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <ImageListItem key={product.img[selectedImage].id_img}>
            <img
                src={product.img[selectedImage].imglist} alt={product.name}
            />
            <ImageListItemBar
                title={product.name}
                subtitle={<span>Precio: S/. {product.price}</span>}
                position="top"
            />
            <ImageListItemBar
                subtitle={<span>Stock disponible: {product.stock}</span>}
                position="below"
            />
            <Link to={`/detail/${product.id}`} className="Option">Ver detalle del producto</Link>
            </ImageListItem>
        </ThemeProvider>

        // <Box sx={{ width: 500, height: 450 }}>
        //     <h3>{product.name}</h3>
        //     <img src={product.img} alt={product.name}/>
        // </Box>
    )
}
export default Item