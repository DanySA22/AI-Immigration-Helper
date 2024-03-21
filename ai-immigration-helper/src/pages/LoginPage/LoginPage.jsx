import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 



function LoginPage () {
    return (
        <>
         <div className='login'>
           <h3 className='login__header'> Login </h3> 
           <div className='login__subdivision'>
            <form  className='login-form'></form>
            <label className='login-form__label'> Username </label>
            <input type="text" className='login-form__input' name='username'/>
            <label className='login-form__label'> Email </label>
            <input type="email" className='login-form__input' name='email'/>
            <label className='login-form__label'> Password </label>
            <input type="password" className='login-form__input' name='password'/>
            <input type="submit" />
            <div className='separation'>
                <div className='separation__lines'></div>
                <p className='separation__text'> Or </p>
                <div className='separation__lines'></div>
            </div>
            
            <button className='login-google'>SIGN IN WITH GOOGLE </button>

            </div>
        </div>
        </>
    )
}


export default LoginPage;