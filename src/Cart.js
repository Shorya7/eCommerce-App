import React from "react";
import "./Cart.css"
import { Subtotal } from "./Subtotal";
export const Cart=()=>{
    return(
        <div className="cart">
            <div className="cart-left">
                <h2 className="cart-title">Your shopping basket is empty.</h2>
                <p>You have no items in your basket. Buy Now.</p>
            </div>
            <div className="cart-right">
                <Subtotal/>
            </div>
        </div>
    )
}