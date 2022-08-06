import './App.css';
import Navbar from './components/Navbar/Navbar';
// import ItemCount from './components/ItemCount/ItemCount';
// import {useState} from 'react'

import {ThemeProvider} from '@mui/material/styles'
import theme from './themeConfig'
import {makeStyles} from '@mui/styles/'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const useStyle = makeStyles({
  offset: theme.mixins.toolbar
})

function App() {
  // const [show, setShow] = useState (true)
  //const imagen = <img src="url" alt="imagen"/>
  const classes = useStyle()

  // const handleOnAdd = (quantity) => {
  //   console.log(`la cantidad agregada es: ${quantity}`)
  // }

  return (
    <ThemeProvider theme={theme}>
    {/* <div className="App"> */}
      
      {/*<header className="App-header">
        <p>
          Bienvenidos
        </p>
        <button style={{ color: 'red', backgroundColor: 'blue', fontSize: '30px'}}>Boton</button>
        {imagen}
      </header>*/}
      <Navbar />
      
      <div className={classes.offset}></div>
      <ItemDetailContainer/>
      {/* <button onClick={() =>setShow(!show) }>Mostrar/Ocultar</button> */}
      {/* {show ? <ItemCount /> : 
        null
      } */}

      <ItemListContainer greeting='Pruebe la mejor comida rápida de Lima-Perú'></ItemListContainer>
      {/* <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/> */}
    {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
