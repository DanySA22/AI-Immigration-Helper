import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 
import {NavLink} from "react-router-dom"
import logo from "../../assets/logo.webp"
import './Header.scss'
function Header () {
    return (
        <>
       <header className="header"> 
      <NavLink to="/" className='header__logo'><img src= {logo} alt='AI-Immigration-Helper logo' className='header__image'/></NavLink>
      <div className='header__subdivision'>
        <NavLink to="/" className='header__Link'> Home </NavLink>
        <NavLink to="/signup" className='header__Link'> Signup </NavLink>
        <NavLink to="/login" className='header__Link'> Login </NavLink>
        <NavLink to="/aiassistance" className='header__Link'> AI Assistant </NavLink>
        <NavLink to="/educational" className='header__Link'> Educational </NavLink>
      </div>
      </header>
        </>
    )
}


export default Header;