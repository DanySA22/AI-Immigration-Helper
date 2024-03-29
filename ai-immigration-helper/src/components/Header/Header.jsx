import {NavLink} from "react-router-dom"
import logo from "../../assets/logo.webp"
import './Header.scss'


function Header () {
    return (
        <>
       <header className="header"> 
      <NavLink to="/" className='header__logo'><img src= {logo} alt='AI-Immigration-Helper logo' className='header__image'/></NavLink>
      <div className='header__subdivision'>
        <NavLink to="/" className='header__Link header__colorHome' activeclassname='active'> Home </NavLink>
        <NavLink to="/signup" className='header__Link header__colorSignup' activeclassname='active'> Signup </NavLink>
        <NavLink to="/login" className='header__Link' activeclassname='active'> Login </NavLink>
        <NavLink to="/aiassistance" className='header__Link' activeclassname='active'> AI Assistant </NavLink>
        <NavLink to="/educational" className='header__Link' activeclassname='active'> Educational </NavLink>
      </div>
      </header>
        </>
    )
}


export default Header;