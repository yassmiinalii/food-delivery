// import './App.css';
import { ThemeProvider, CssBaseline } from "@mui/material";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import {theme} from "../theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar></Navbar>
      <Banner></Banner>
    </ThemeProvider>
  );
}

export default App;
