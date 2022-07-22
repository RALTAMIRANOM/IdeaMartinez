import {createTheme} from '@mui/material/styles';
import {yellow,green} from '@mui/material/colors'
const theme = createTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        //main: '#E86524',
        main: yellow[500],
        //contrastText: "#000000",
      },
      primary: {
        // This is green.A700 as hex.
        //main: '#E86524',
        main: green[800]
      },
      
    },
  });

export default theme;