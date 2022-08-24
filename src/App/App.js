import { ThemeProvider, CssBaseline } from "@mui/material";
import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import { theme } from "../theme/theme";
import { Provider } from "react-redux";
import store from "../redux/store";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardSkeltonGroup from "../components/CardSkeltonGroup";
import OrderStatus from "../pages/OrderStatus";



function App() {
  const Home = lazy(() => import("../pages/Home"));
  const Cart = lazy(() => import("../pages/Cart"));
  const NotFound = lazy(() => import("../pages/NotFound"));
  const OrderStatus = lazy(() => import("../pages/OrderStatus"));
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={ <CardSkeltonGroup/>}>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orderStatus" element={<OrderStatus/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </Suspense>
    
      </ThemeProvider>
    </Provider>
  );
}

export default App;
