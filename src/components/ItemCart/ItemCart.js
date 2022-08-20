import { useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import CartContext from '../../context/CartContext'
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Paper, Stack } from '@mui/material';
import ImageGrid from '../ImageGrid/ImageGrid';
import {makeStyles} from '@mui/styles/';
import {Delete} from '@mui/icons-material/';

const useStyle = makeStyles({
    separatorDescrip:{

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight:"800"

    },
    title:{
        fontSize:"large",
        fontWeight:"600"
    },
})

const ItemCart =({id,name,quantity,price}) => {
    const {removeItem } = useContext(CartContext)
    const [selectedImage, setSelectedImage] = useState(0);
    const navigate = useNavigate()
    const classes = useStyle()

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(id)
    }

    return (
        <Paper elevation={3} onClick={() => navigate(`/detail/${id}`)} cursor='pointer'>
                <Grid container direction="row">
                    <Box className={classes.title}>{name.toUpperCase()}</Box>
                    <Grid className={classes.separatorDescrip}  container direction="row">
                        <Box>CANTIDAD: {quantity}</Box>
                        <Box>PRECIO: S/. {price}</Box>
                        <Box>SUBTOTAL: S/. {price * quantity}</Box>
                        <IconButton aria-label="delete" size="large" color="error" onClick={handleRemoveItem}> 
                            <Delete fontSize="inherit" />
                        </IconButton>
                    </Grid>
                </Grid>
        </Paper>
    )
}
export default ItemCart;