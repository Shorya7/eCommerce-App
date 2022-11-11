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
<div className="product_main">
        <Product
        id="1"
        title="Apple iPhone 12 (64GB) - Blue"
        price="₹53,999.00"
        image="https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901536-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTIzNHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGE1Lzk0MDc3NDY0NDEyNDYuanBnfDA3MmMxMTU3MzQ0M2ViMjdlMTMwNjlkZGMxOWMyNDViYjdiODJiYjZlNDExYzM4ZTQwYzQxOGZiNTk4MjMyNTk"/>
        <Product
        id="2"
        title="2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey"
        price="₹3,09,490.00"
        image="https://images-eu.ssl-images-amazon.com/images/I/61aUBxqc5PL._AC_UL320_SR320,320_.jpg"/>
        <Product
        id="3"
        title="2021 Apple iMac with 4.5K Retina Display (24-inch/60.96 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB) - Silver"
        price="₹1,29,990.00"
        image="https://images-eu.ssl-images-amazon.com/images/I/61LNnZPoKPS._AC_UL320_SR320,320_.jpg"/>
        <Product
        id="4"
        title="HP Pavilion 14 12th Gen Intel Core i5 16GB SDRAM/512GB SSD 14 inch(35.6cm) FHD,IPS,Micro-Edge Display/Intel UHD Graphics/B&O/Win 11/Alexa Built-in/Backlit KB/FPR/MSO 2021/Tranquil Pink, 14-dv2016TU"
        price="₹69,990.00"
        image="https://images-eu.ssl-images-amazon.com/images/I/71hmqIQJFdL._AC_UL320_SR320,320_.jpg"/>
        <Product
        id="5"
        title="Lenovo Yoga 6 AMD Ryzen 7 5700U 13.3'' (33.782cm) FHD IPS 2-in-1 Convertible Touchscreen Laptop (16GB/1TB SSD/Windows 10/MS Office/Backlit Keyboard/Fingerprint Reader/Abyss Blue/1.31Kg), 82ND004GIN"
        price="₹83,990.00"
        image="https://images-eu.ssl-images-amazon.com/images/I/41iiQmWnDKL._SX300_SY300_QL70_FMwebp_.jpg"/>
        <Product
        id="6"
        title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV 43W6600 (Black) (2020 Model)"
        price="₹42,990.00"
        image="https://m.media-amazon.com/images/I/91v4nFq0LuL._SX679_.jpg"/>
       </div>
        </Link>
    )
}