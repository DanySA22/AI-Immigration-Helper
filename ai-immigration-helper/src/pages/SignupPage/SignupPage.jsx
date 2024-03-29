import axios from 'axios';
import {useState} from 'react'  
import {useNavigate} from 'react-router-dom' 
import "./SignupPage.scss"


function SignupPage () {

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate() 


//sign up functionality
const inputUsername = (event) => {
    setUsername(event.target.value)
}

const inputEmail = (event) => {
    setEmail(event.target.value)
}
const inputPassword = (event) => {
    setPassword(event.target.value)
}

const submitResult = (event) => {
    event.preventDefault()
    if(!username || !email || !password) {
        alert('You need to fill all the form fields')
        return
    }
    try {
        
        const signupFormPost = async () => {
        const body = {
            username: username,
            email: email,
            password: password
        }
        console.log(body)
        const newUser = await axios.post('http://localhost:8080/authent/sign-up', body)
        setUsername('')
        setEmail('')
        setPassword('')
    }

    signupFormPost()
    navigate('/login')
    } catch (error) {
        console.error('Error submitting the form:', error)
    }
}

    return (
        <>
        <div className='signup'>
           <h3 className='signup__header'> Sign Up </h3> 
            <form className='signup-form' onSubmit={event => submitResult(event)}>
            <label className='signup-form__label'> Username </label>
            <input type="text" className='signup-form__input' value={username} onChange={event => inputUsername(event)} name='username'/>
            <label className='signup-form__label'> Email </label>
            <input type="email" className='signup-form__input' value={email} onChange={event => inputEmail(event)} name='email'/>
            <label className='signup-form__label'> Password </label>
            <input type="password" className='signup-form__input' value={password} onChange={event => inputPassword(event)} name='password'/>
            <input type="submit" className='signup-form__submit' value='Sign Up' />
            </form>
        </div>
        </>
    )
}


export default SignupPage;