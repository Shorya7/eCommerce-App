import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <Link to="/" className="header">
            <nav className="header-nav">
                <div className="header-container">
                    <img className="amazon-logo" src="https://mlsvc01-prod.s3.amazonaws.com/fd4e81f3101/a77159a6-cbf4-46a1-a731-522b77da3e42.png?ver=1649349594000 " alt="Amazon"></img>
                    <div className="header-search">
                        <input className="search-input" type="text"></input>
                        <button className="search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>

                        </button>
                    </div>

                    <Link to="/cart"className="header-cart">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg> 
                        </div>
                        <p>Cart</p>
                    </Link>
                    <Link to="/Login" className='login'>
                        <div>
                        <p>Hello User</p>
                        <h4>Login or Sign up</h4>
                        </div>
                    </Link>
                </div>
            </nav>
    </Link>
  )
}
