import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 



function AiAssistance () {
    const [userinput, setUserInput] = useState('')
    const [aioutput, setAiOutput] = useState('')
    const [history, setHistory] = useState('')

const inputFromUser = (event) => {
        setUserInput(event.target.value)
}
const submitResult = (event) => {
    event.preventDefault()
    if(!userinput) {
            alert('You need to make a request or question first')
            return
    }
    try {
        const UserInputPost = async () => {
        const body = {
                question: userinput
            }
        console.log(body)
        const newUser = await axios.post('http://localhost:8080/authent/login', body)
        
        setUserInput('')
                  
        }
    
        UserInputPost()
        } catch (error) {
            console.error('Error submitting the form:', error)
        }
    }
    useEffect(() => {
        const aiResponse = async () => {
            const dataResponse = await axios.get()
        }

    }, [])

    return (
        <>
        <div className='user-input'>
            <h3 className='user-input__header'> How can we help you with Immigration processes?</h3>
            <form action="" className='form' onSubmit={event => submitResult(event)}>
                <textarea className='form__Text' name="" id="" cols="30" rows="10" onChange={event => inputFromUser(event)}></textarea>
                <input className='form__file-Upload'type="file" />
                <input className='form__Submit'type="submit" />
            </form>
        </div>
        <div className='ai-output'>
            <h3 className='ai-output__header'> Artificial Intelligence Answer</h3>
            <form action="" className='ai-output-form'>
                <textarea name="" id="" cols="30" rows="10" className='ai-output-form__Text'></textarea>
                {/* The textarea value attribute could be holding a useState that will include the gpt output answer */}
                <input type="submit" className='ai-output-form__Submit'/>
            </form>
        </div>
        <div className='history'>
            <h3 className='history__header'>Your Saved Information</h3>
            <div className='history__request'>
            <button className='history__button'>See History</button>
            <button className='history__download'>Download Document</button>
            <input type="text"  placeholder='Search...' className='history__search'/>
            </div>
            <div className='history__Information'>
                <p className='history__Text'> This will contain the user Saved Information retrieve data </p>
            </div>
        </div>
        </>
    )
}


export default AiAssistance;