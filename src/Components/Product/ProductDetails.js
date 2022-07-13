import React from "react"
import {useParams} from "react-router-dom"
import data from "./data"

function ProductDetails() {
    const {productId} = useParams()
    const thisProduct = data.find(prod => prod.id === productId)
    
    return (
        <div> 
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
            <img src={thisProduct.image} alt={thisProduct.name}/>
            
 
        </div>
    )
} 

export default ProductDetails
