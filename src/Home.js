import React from "react";
import {Link} from 'react-router-dom'
import "./Home.css"
import { Product } from "./Product";
export const Home=()=>{
    return(
    <Link to="/"> <div className="section-1">
            <div className="section-1-container">
                <div className="section-1-column">
                    <h3>Top Picks for your home</h3>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" alt=""/>
                    <p>See more</p>
                </div>
                <div className="section-1-column">
                    <h3>Top rated, premium quality | Amazon Brands & more</h3>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Softlines_QC_2X_V2_5._SY232_CB636581721_.jpg" alt=""/>
                    <p>See more</p>
                </div>
                <div className="section-1-column">
                    <h3>Shop & Pay | Earn Rewards daily</h3>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg" alt=""
                    />
                    <p>See more</p>
                </div>
                
            </div>
</div>
        <Product/>
        </Link>
    )
}