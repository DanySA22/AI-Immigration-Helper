import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 
import {NavLink} from "react-router-dom"
import logo from "../../assets/logo.webp"

function Header () {
    return (
        <>
       <header className="header"> 
      <NavLink to="/" className='header__logo'><img src= {logo} alt='AI-Immigration-Helper logo' /></NavLink>
      <div>
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