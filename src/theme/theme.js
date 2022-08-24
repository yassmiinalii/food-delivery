import { colors} from "@mui/material";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: '#FF7A2F',
      light: colors.orange[600],
      dark: colors.orange[800],
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily:'Poppins, sans-serif',
    h1: {
      textTransform: "uppercase",
      fontWeight: '500'
    },
    h2: {
      textTransform: "uppercase",
      fontWeight: '500'
    },
    h3: {
      textTransform: "uppercase",
      fontWeight: '500'
    }
  },

});



export { theme };

