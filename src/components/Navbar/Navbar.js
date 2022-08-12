import './Navbar.css'
//Se utiliza button
//import Button from '../Button/Button' 
import App from '../../App';
import { AppBar,Button, Toolbar, Typography, Box, Stack } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { createTheme, ThemeProvider} from '@mui/material/styles';
//import {Fastfood} from '@mui/icons-material/';
import {LunchDining,SportsBar,LocalPizza,RamenDining} from '@mui/icons-material/'
import {makeStyles} from '@mui/styles/'
import theme from '../../themeConfig'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    myButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    separator:{
        marginRight: theme.spacing(2),
    },
    separatorLeft:{
        marginLeft: theme.spacing(2),
    },
    title:{
        margin: 0,
    },
    offset: theme.mixins.toolbar,
    separatorPrin:{

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

    }
})
const Navbar =() => {

    const text = 'Hice Click'

    const handleClick = () => {
        console.log(text);
    }

    const classes = useStyle()

    return (
        <nav className="Navbar">
                <ThemeProvider theme={theme}>
                    <AppBar color="primary">
                        <Toolbar className={classes.separatorPrin}>
                            <Button href={`/`}>
                                <Box display="flex" flexDirection="column" alignItems="center" >
                                    <img src='../images/fastfood.svg' height="40px"></img>
                                    {/*<Fastfood
                                    color = 'secondary'
                                    />*/}                            
                                    <h5 className={classes.title} style={{ color: '#ffeb3b' }}>Orlando's Broaster </h5>
                                </Box>
                            </Button>
                            <Stack spacing={2} direction="row">
                                <Link to={`/category/Hamburguesas`} className="OptionNav"><LunchDining/>Hamburguesas</Link>
                                <Link to={`/category/Pizzas`} className="OptionNav"><LocalPizza/>Pizzas</Link>
                                <Link to={`/category/Ramens`} className="OptionNav"><RamenDining/>Ramens</Link>
                                <Link to={`/category/Cervezas`} className="OptionNav"><SportsBar/>Cervezas</Link>
                            </Stack>
                            {/* <Button className={classes.myButton}>hola</Button> */}
                            {/*href='link' en el button*/}
                            <CartWidget/>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                
                {/*<Button color='red'>Hamburguesas</Button>
                <Button handleClick ={handleClick} name='Broasters' color='blue'>Broasters</Button>
                <Button color='blue'>Salchipapas</Button>
                <Button color='blue'>Bebidas</Button>*/}
                
        </nav>
    )
}

export default Navbar