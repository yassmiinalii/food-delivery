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
      main: "#F7F7F7",
    },
  },
  typography: {
    fontFamily:'Poppins, sans-serif',
  },

});


// theme = responsiveFontSizes(theme);

export { theme };

