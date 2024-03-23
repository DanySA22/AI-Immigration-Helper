import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 
import {jsPDF} from 'jspdf'


function AiAssistance () {
    const [userinput, setUserInput] = useState('')
    const [aioutput, setAiOutput] = useState('')
    const [history, setHistory] = useState('')
    

const inputFromUser = (event) => {
        setUserInput(event.target.value)
}
const submitInput = (event) => {
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
        const newQuestion = await axios.post('http://localhost:8080/ai/input', body)
        
        setUserInput('')
        setAiOutput(newQuestion.data)       
        }
    
        UserInputPost()
        } catch (error) {
            console.error('Error submitting the form:', error)
        }
    }

const saveOutput = (event) => {
    if(!aioutput) {
        alert('You need to wait for an AI answer before you can save the information')
        return
}
try {
    const aiOutputCreate = async () => {
    const body = {
            // userId: id (of authenticated user) it will depend on the authentication system
            openAIOutput: aioutput
        }
    console.log(body)
    const savedAnswer = await axios.post('http://localhost:8080/ai/output/save/:id', body)
    setAiOutput('')
      
    }

    aiOutputCreate()
    } catch (error) {
        console.error('Error submitting the form:', error)
    }

}

const historyRetrieve = (event) => {
    if(!history) {
        alert('You need to authenticat as an user and save the data before you can retrieve the information')
        return
}
try {
    const historyRetrieve = async () => {
    const userHistory = await axios.get('http://localhost:8080/history/:id')
    setHistory(userHistory.data)
      
    }

    historyRetrieve()
    } catch (error) {
        console.error('Error submitting the form:', error)
    }

}

//download functionality
const donwloadToPDF = () =>{
    try {
        const newPDF = () => {
            const document = new jsPDF()
            document.setFontSize(10)
            document.text(document.splitTextToSize(history, 180), 10, 30)
            document.save('New PDF')
        }
    } catch (error) {
        console.error('Error downloading the data to pdf:', error)
    } 
}
    return (
        <>
        <div className='user-input'>
            <h3 className='user-input__header'> How can we help you with Immigration processes?</h3>
            <form action="" className='form' onSubmit={event => submitInput(event)}>
                <textarea className='form__Text' name="" id="" cols="30" rows="10" onChange={event => inputFromUser(event)}></textarea>
                <input className='form__file-Upload'type="file" />
                <input className='form__Submit'type="submit" />
            </form>
        </div>
        <div className='ai-output'>
            <h3 className='ai-output__header'> Artificial Intelligence Answer</h3>
            <div>
                <div>
                  {aioutput}
                </div>
                <button onClick={event => saveOutput(event)}> Submit </button>
            </div>
            <form action="" className='ai-output-form'>
                <textarea name="" id="" cols="30" rows="10" className='ai-output-form__Text'></textarea>
                {/* The textarea value attribute could be holding a useState that will include the gpt output answer */}
                <input type="submit" className='ai-output-form__Submit'/>
            </form>
        </div>
        <div className='history'>
            <h3 className='history__header'>Your Saved Information</h3>
            <div className='history__request'>
            <button className='history__button' onClick={historyRetrieve}>See History</button>
            <button className='history__download' onClick={donwloadToPDF}>Download Document</button>
            <input type="text"  placeholder='Search...' className='history__search'/>
            </div>
            <div className='history__Information'>
                <p className='history__Text'> This will contain the user Saved Information retrieve data {history}</p>
            </div>
        </div>
        </>
    )
}


export default AiAssistance;