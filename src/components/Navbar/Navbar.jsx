import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home")

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu("home")} className={menu==='home' ? 'active' : ''}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==='menu' ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==='mobile-app' ? "active" : ""}>Mobile App</a>
            <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==='contact-us' ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search_icon" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="basket_icon" /></Link>
                <div className="dot">
                    <p>85</p>
                </div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar