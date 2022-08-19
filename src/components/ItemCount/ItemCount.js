// import { useState, useEffect } from 'react'
import { useState, useEffect } from 'react'
import { Button, IconButton , ThemeProvider, Stack, Box } from '@mui/material';
import {Remove, Add} from '@mui/icons-material/'
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
const ItemCount = ({stock=0, initial= 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    // const [show, setShow] = useState (true)
    // const [text, setText] = useState('Bienvenido')
    // const [title, setTitle] = useState('Hola')
    //let count = 10
    // useEffect (() => {
    //     console.log('el componente se monto')

    //     return () => console.log('se a desmontar el componente')
    // },[])//se muestra una vez

    // useEffect (() => {
    //     console.log('cambio el title')
    //     return () => console.log('antes de cambiar title')
    // },[title])//cuando cambia title se ejecuta el useeffect

    // useEffect (() => {
    //     setTitle(title === 'Hola' ? 'Chau' : 'Hola')
    // },[count])//Esto se puede usar cuando se añadir un producto al carrito

    // const conditional = () => {
    //     if (count <= stock)
    //         onAdd(count)
    //     else 
    //         console.log(`la cantidad agregada supera el stock`)
    // }
    useEffect (() => {
        setQuantity(initial)
    }, [initial])
    const increment = () => {
        //count++
        if(quantity < stock)
            setQuantity(quantity + 1)
    }

    const decrement = () => {
        if(quantity > 1)
            setQuantity(quantity - 1)
    }

    // console.log('render')
    //const classes = useStyle()

    return(
        <ThemeProvider theme={theme}>
            {/* <h1>{title}</h1>
            <button onClick={() => setTitle(title === 'Hola' ? 'Chau' : 'Hola')}>Saludar</button>
            <h1>{text}</h1> */}
            <Box display="flex" flexDirection="column" alignItems="center" >
                <Stack  direction="row" alignItems="center" width="100%" maxWidth="150px" justifyContent="space-between">
                    <IconButton  color="primary" size="medium" onClick={decrement}> <Remove/> </IconButton >
                    <h4>{quantity}</h4>
                    {/* <button onClick={decrement}>Decrementar</button>
                    <button onClick={increment}>Incrementar</button> */}
                    <IconButton  color="primary" size="medium" onClick={increment}> <Add/> </IconButton >
                    {/* <button onClick={() => onAdd(count)}>Agregar al carrito</button> */}
                </Stack>
                <Button variant="outlined" color="primary" size="medium" onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
            </Box>
        </ThemeProvider>
    )
}

export default ItemCount
