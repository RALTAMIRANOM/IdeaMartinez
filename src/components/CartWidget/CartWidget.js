import './CartWidget.css'
import {ShoppingCart} from '@mui/icons-material/'
import {Typography, IconButton } from '@mui/material';
import {makeStyles} from '@mui/styles/'
import theme from '../../themeConfig'


const useStyle = makeStyles({
    title:{
        flexGrow: 1,
    }
})

const CartWidget = () => {
    const classes = useStyle()
    return (
        <>
            <IconButton size="small">                
                <ShoppingCart color='success'/>              
                <h5 style={{color: '#FFFFFF'}}>10</h5>
            </IconButton>
        </>
    )
}
export default CartWidget;