import axios from 'axios';
import {useState, useEffect, useRef} from 'react'  
import { downloadToPDF } from '../../utils/downloadDocument';
import { filterUserHistory } from '../../utils/searchHistory';
import { timeGap } from '../../utils/formatDate';
import { historyRetrieve } from '../../services/historyOfOutputs';
import { saveOutput } from '../../services/aiSaveOutput';
import { submitInput } from '../../services/userInput';
import "./AIAssistancePage.scss"

function AiAssistance () {
    const [userinput, setUserInput] = useState('')
    const [aioutput, setAiOutput] = useState('')
    const [history, setHistory] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [filteredData, setFilteredData] = useState(history)
    const contentRef = useRef(null)

//adding an Axios interceptor for including the JWT on the header of the request

axios.interceptors.request.use( (config) => {
      const token = localStorage.getItem('user Token:')
      if (token) {
        const tokenObject = JSON.parse(token)
        config.headers.Authorization = `Bearer ${tokenObject.token}`
      }
      
      return config
}, (error) => {
    console.log(error)
})

//Adding user input
const inputFromUser = (event) => {
        setUserInput(event.target.value)
}

const userInputCreation = (event) => {
    if(!userinput) {
        alert('You need to make a request or question first')
        return  
}
    submitInput(event, userinput, setUserInput, setAiOutput)
}


//Save AI output 
const saveOnOutput = () => {
    if(!aioutput) {
        alert('You need to wait for an AI answer before you can save the information')
        return
}
saveOutput(aioutput, setAiOutput)
}

//Retrieve user saved outputs history
const retrieveOnHistory = () => {
historyRetrieve(setHistory, setFilteredData)}

//download functionality
const handleDownloadPDF = () => {
    downloadToPDF(contentRef)
}

//search functionality
const inputtoSearch = (event) => {
    setSearchInput(event.target.value)   
}
const searchOnHistory = () => {
    filterUserHistory(history, searchInput, setFilteredData)
}

return (
        <>
        <main className='main'>
          
        <div className='user-input'>
            <h3 className='user-input__header'> How can we help you with Immigration processes?</h3>
            <form action="" className='form' onSubmit={event => userInputCreation(event)}>
                <textarea className='form__input' value={userinput} cols="30" rows="10" onChange={event => inputFromUser(event)}></textarea>
                <input className='form__Submit'type="submit" value='Send'/>
            </form>
        </div>
        <div className='ai-output'>
            <h3 className='ai-output__header'> Artificial Intelligence Answer</h3>
            <div className='ai-output__subdivision'>
                <div className='ai-output__Text'>
                  {aioutput}
                </div>
                <button onClick={saveOnOutput} className='ai-output__Save'> Save this answer </button>
            </div>
        </div>
        <div className='history'>
            <h3 className='history__header'>Your Saved Information</h3>
            <div className='history__request'>
            <button className='history__button' onClick={retrieveOnHistory}>See History</button>
            <button className='history__download' onClick={handleDownloadPDF}>Download </button>
            <input type="text"  placeholder='Search...' onChange={event => inputtoSearch(event)} className='history__search-Input'/>
            <button className='history__search-Button' onClick={searchOnHistory}> Search </button>
            </div>
            <div className='history__Information' ref={contentRef}>
                
             {filteredData.map(item => (
                <div className='history__Text-Subdiv' key={item.id}>
                <p className='history__Text-Date'> {timeGap(item.date)}</p>
                <p className='history__Text-Content'> {item.openAiOutput}</p>
                </div> 
                ))}
            </div>
        </div>
        </main>
        </>
    )
}


export default AiAssistance;