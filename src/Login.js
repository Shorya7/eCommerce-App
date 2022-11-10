import React from "react";

import "./Login.css"
export const Login=()=>{
    return(
         <div className="Login">
            <img src="https://api.freelogodesign.org/assets/blog/img/20180911090509731amazon_logo_RGB.jpg" alt="Amazon"></img>
            <div className="login-cont">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="pass"/>
                    <button type="submit" className="signbtn">Sign In</button>
                </form>
                <p>By signining-in, you agree to Amazon's Terms and Conditions</p>
                <button className="regbtn">Create your Amazon Account</button>
            </div>
        </div>
    )
}

