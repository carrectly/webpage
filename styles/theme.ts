import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { purple } from '@mui/material/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[100],
    },
    error: {
      main: red.A400,
    },
  }
});

export default theme;
