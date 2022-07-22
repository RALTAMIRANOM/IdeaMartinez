import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';

import {ThemeProvider} from '@mui/material/styles'
import theme from './themeConfig'
import {makeStyles} from '@mui/styles/'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const useStyle = makeStyles({
  offset: theme.mixins.toolbar
})

function App() {

  //const imagen = <img src="url" alt="imagen"/>
  const classes = useStyle()
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
      <div/>
      <ItemListContainer greeting='Pruebe la mejor comida rápida de Lima-Perú'></ItemListContainer>
      {/* <Counter /> */}

    {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
