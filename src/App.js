 import { Route, Routes } from "react-router";
import {BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import store from "./store/Store";
import { Provider } from "react-redux";


function App() {
  
 return (
    <Provider store={store}>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        </Routes>  
    </BrowserRouter>
    </Provider>
    
    
  );
}

export default App;
