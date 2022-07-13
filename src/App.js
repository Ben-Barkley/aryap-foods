import React from 'react';
// import { Link, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import ProductDetails from './Components/Product/ProductDetails';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from './Components/Home/Home';
// import Product from './Components/Product/Product';
// import ProductDetails from './Components/Product/ProductDetails';









function App() {
  return (
    <div>



        
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/productdetails" element={<ProductDetails />}/>
      

      
      </Routes>
      
        </BrowserRouter>
        

    
{/*       
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/products">
          <Product />
        </Route>

        <Route path="/products/:productId">
          <ProductDetails />
        </Route> */}

      
    </div>
  );
}

export default App;
