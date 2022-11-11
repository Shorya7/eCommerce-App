import React from "react";
import "./Product.css"
export const Product=({id,title,image,price})=>{
    return(
        <div className="product">
            <img src={image} alt="product"/>
            <div className="p-info">
                <p>{title}</p>
                <strong>{price}</strong>
            </div>
            
            <button className="basket">Add to Basket</button>
        </div>
    )
}