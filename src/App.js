import './App.css';
import Navbar from './components/Navbar/Navbar';
// import ItemCount from './components/ItemCount/ItemCount';
// import {useState} from 'react'

import {ThemeProvider} from '@mui/material/styles'
import theme from './themeConfig'
import {makeStyles} from '@mui/styles/'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
    <BrowserRouter>
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
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos' />}/>
          
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de productos filtrado'/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          {/* <button onClick={() =>setShow(!show) }>Mostrar/Ocultar</button> */}
          {/* {show ? <ItemCount /> : 
            null
          } */}


          {/* <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/> */}
        {/* </div> */}
        </Routes> 
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
