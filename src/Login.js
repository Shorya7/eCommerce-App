import React from "react";
import {Link} from 'react-router-dom'
export const Login=()=>{
    return(
        <Link to="/Login" className="login">
            <div className="login-cont">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                </form>
            </div>
        </Link>
    )
}

