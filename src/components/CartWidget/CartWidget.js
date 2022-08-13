import './CartWidget.css'
import {ShoppingCart} from '@mui/icons-material/'
import {Typography, IconButton } from '@mui/material';
import {makeStyles} from '@mui/styles/'
import theme from '../../themeConfig'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const useStyle = makeStyles({
    title:{
        flexGrow: 1,
    }
})

const CartWidget = () => {
    const classes = useStyle()
    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()
    return (
        <>
            <IconButton size="small">                
                <ShoppingCart color='success'/>              
                <h5 style={{color: '#FFFFFF'}}>{quantity}</h5>
            </IconButton>
        </>
    )
}
export default CartWidget;