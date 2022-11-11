import React from "react";
import "./Product.css"
// import { useStateValue } from "./StateProvider";
export const Product=({id,title,image,price})=>{
    // const [{basket},dispatch]=useStateValue()
    // const addToBasket=()=>{
    //     dispatch({
    //     type:'ADD_TO_BASKET',
    //     item:{
    //         id:id,
    //         title:title,
    //         image:image,
    //         price:price
    //     }
    // })
    // }
    return(
        <div className="product">
            <img src={image} alt="product"/>
            <div className="p-info">
                <p>{title}</p>
                <strong>{price}</strong>
            </div>
            
            <button  className="basket">Add to Basket</button>
        </div>
    )
}