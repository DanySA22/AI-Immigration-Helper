import axios from 'axios';
import {useState} from 'react'  
import {useNavigate} from 'react-router-dom' 
import "./LoginPage.scss"


function LoginPage () {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate() 

//Login post functionality

const inputUsername = (event) => {
    setUsername(event.target.value)
}

const inputPassword = (event) => {
    setPassword(event.target.value)
}

const submitResult = (event) => {
    event.preventDefault()
    
    if(!username || !password) {
        alert('You need to fill all the form fields')
        return
    }
    try {
        
        const loginFormPost = async () => {
        const body = {
            username: username,
            password: password
        }
        console.log(body)
        const newUser = await axios.post('http://localhost:8080/authent/login', body)
        setUsername('')
        setPassword('') 
        const tokenObject = JSON.stringify(newUser.data)
        localStorage.setItem('user Token:', tokenObject)
       
    }

    loginFormPost()
    navigate('/aiassistance')
    } catch (error) {
        console.error('Error submitting the form:', error)
    }
}

//Alert when Google authentication button gets clicked

const googleAuthentNotification = () => {
        alert("Coming soon!")
    }

    return (
        <>
         <div className='login'>
           <h3 className='login__header'> Login </h3> 
           <div className='login__subdivision'>
            <form  className='login-form' onSubmit={event => submitResult(event)}>
            <label className='login-form__label'> Username </label>
            <input type="text" className='login-form__input' name='username' value={username} onChange={event => inputUsername(event)}/>
            <label className='login-form__label'> Password </label>
            <input type="password" className='login-form__input' name='password' value={password} onChange={event => inputPassword(event)}/>
            <input type="submit" className='login-form__submit' value='Login'/>
            </form>
            <div className='separation'>
                <div className='separation__lines'></div>
                <p className='separation__text'> Or </p>
                <div className='separation__lines'></div>
            </div>
            
            <button className='login-google' onClick={googleAuthentNotification}>SIGN IN WITH GOOGLE </button>

            </div>
        </div>
        </>
    )
}


export default LoginPage;