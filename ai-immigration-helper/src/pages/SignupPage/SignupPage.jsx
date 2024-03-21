import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 



function SignupPage () {
    return (
        <>
        <div className='signup'>
           <h3 className='signup__header'> Sign Up </h3> 
            <form  className='signup-form'></form>
            <label className='signup-form__label'> Username </label>
            <input type="text" className='signup-form__input' name='username'/>
            <label className='signup-form__label'> Email </label>
            <input type="email" className='signup-form__input' name='email'/>
            <label className='signup-form__label'> Password </label>
            <input type="password" className='signup-form__input' name='password'/>
            <input type="submit" />
        </div>
        </>
    )
}


export default SignupPage;