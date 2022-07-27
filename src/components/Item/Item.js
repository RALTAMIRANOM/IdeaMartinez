import * as React from 'react';
import { ImageListItem,ImageListItemBar, ThemeProvider, Button, Box, Stack } from '@mui/material';
import theme from '../../themeConfig'
import {makeStyles} from '@mui/styles/'

const useStyle = makeStyles({
    text:{
        marginTop:5,
    },
    separatorPrin:{

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

    }
})

const Item = ({product}) => {
    const classes = useStyle()
    return (
        <ThemeProvider theme={theme}>
            <ImageListItem key={product.img}>
            <img
                src={product.img} alt={product.name}
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
            <Button variant="outlined" color="primary" size="medium">Ver detalle del producto</Button>
            </ImageListItem>
        </ThemeProvider>

        // <Box sx={{ width: 500, height: 450 }}>
        //     <h3>{product.name}</h3>
        //     <img src={product.img} alt={product.name}/>
        // </Box>
    )
}
export default Item