import React from "react";
import data from "./data";
import { Link } from "react-router-dom";
import  './Product.css'


const Product = () => {
  const products = data.map(product => {
    return (
        
        <div className="cards">


<div className="card-box"> 

      <div key={product.id} >

            
        
        
          <Link to={`/products/${product.id}`}>
        
        <div className="card-image">        
        <img src={product.image} alt=""/>
        </div>
        
        <p>{product.name}</p>
        <p>${product.price}</p>
        </Link>
        </div>
      </div>
      
      </div>
    ); 
  });
  return (
    <div className="main-cards">
      {/* <h1>Products Page</h1> */}
      {products}
    </div>
  );
  
};

export default Product;

