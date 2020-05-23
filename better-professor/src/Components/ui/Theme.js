import { createMuiTheme } from '@material-ui/core/styles';

const dayBlue = '#2196F3';
const nightBLue = '#0A2738';


export default createMuiTheme({
  palette: {
    common: {
      blue: `${dayBlue}`,

    },
    primary: {
      main: `${dayBlue}`
    },
    secondary: {
      main: `${nightBLue}`
    } 
  },
  typography: {
    fontFamily: "Roboto"
  }
})