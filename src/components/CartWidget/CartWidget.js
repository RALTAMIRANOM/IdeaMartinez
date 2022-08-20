import './CartWidget.css'
import {ShoppingCart} from '@mui/icons-material/'
import {Typography, IconButton,Box } from '@mui/material';
import {makeStyles} from '@mui/styles/'
import theme from '../../themeConfig'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const useStyle = makeStyles({
    title:{
        flexGrow: 1,
    }
})
/* <IconButton size="small">                
                <ShoppingCart color='success'/>              
                <h5 style={{color: '#FFFFFF'}}>{quantity}</h5>
            </IconButton>
              */

const CartWidget = () => {
    const classes = useStyle()
    const {getQuantity} = useContext(CartContext)
    const navigate = useNavigate()

    const quantity = getQuantity()
    return (
        <> 
            {quantity !== 0 ?
                <IconButton size="small" onClick={() => navigate('/cart')}>               
                        <ShoppingCart color='success'/>              
                        <h5 style={{color: '#FFFFFF'}}>{quantity}</h5>
                </IconButton> 
            : <IconButton></IconButton>}
        </>
    )
}
export default CartWidget;