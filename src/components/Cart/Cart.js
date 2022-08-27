import './Cart.css'
import { Box, Button, Grid, Stack } from '@mui/material'
import {makeStyles} from '@mui/styles/'
import { useContext } from 'react';
import CartContext from '../../context/CartContext'
import { Link, useNavigate } from "react-router-dom"
import theme from '../../themeConfig'
import ItemCart from '../ItemCart/ItemCart';

const useStyle = makeStyles({
    alignCart:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height:"100%",
    },
    title:{
        lexDirection:"column",
        justifyContent:"space-betwee",
        alignItems:"center",
        height:"100%"
    },
})

const Cart =() => {
    const {cart, getQuantity, clearCart,totalToPay } = useContext(CartContext)
    const classes = useStyle()
    const navigate = useNavigate()
    const quantity =getQuantity()


    if (!quantity){
        return (
            <Grid container direction="column" className={classes.alignCart}>
                <div className='title'>Tu carrito está vacío</div>
                <div className='subtitle'>
                    Navega por las categorías en el sitio o busca tu producto para realizar una compra.
                </div>
                <Link to='/' className="OptionCart">Comenzar a Comprar</Link>
            </Grid>
        )
    }

    return (
        <Grid container direction="column" className={classes.alignCart}>
            <div  className='title'>Tu carrito </div>
                <Stack spacing={3} alignItems="center">
                    <Stack spacing={2}>
                        {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}
                    </Stack>
                    <div className={classes.title}>Total: S/. {totalToPay}</div>
                    <Stack spacing={2}  direction="row" >
                        <Link to='/order' className="OptionCart">Crear Orden</Link>
                        <button onClick={() => clearCart()} className="OptionCart">Limpiar carrito</button>
                    </Stack>
                </Stack>
        </Grid>
    )
}

export default Cart;