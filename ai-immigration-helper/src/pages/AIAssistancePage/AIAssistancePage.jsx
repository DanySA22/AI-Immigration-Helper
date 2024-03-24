import axios from 'axios';
import {useState, useEffect} from 'react'  
import {useParams} from 'react-router-dom' 
import {jsPDF} from 'jspdf'  


function AiAssistance () {
    const [userinput, setUserInput] = useState('')
    const [aioutput, setAiOutput] = useState('')
    const [history, setHistory] = useState('')
    const [searchInput, setSearchInput] = useState('')
    // const [filteredData, setFilteredData] = useState(history)

//adding an Axios interceptor for including the JWT on the header of the request


axios.interceptors.request.use( (config) => {
      const token = localStorage.getItem('user Token:')
      if (token) {
        const tokenObject = JSON.parse(token)
        config.headers.Authorization = `Bearer ${tokenObject.token}`
      }
      console.log(config)
      return config
}, (error) => {
    console.log(error)
})

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

const saveOutput = () => {
    if(!aioutput) {
        alert('You need to wait for an AI answer before you can save the information')
        return
}
try {
    const aiOutputCreate = async () => {
    const body = {
           userId: 1,
           openAiOutput: aioutput
        }
    console.log(body)
    const savedAnswer = await axios.post('http://localhost:8080/ai/output/save', body)
    setAiOutput('')
      
    }

    aiOutputCreate()
    } catch (error) {
        console.error('Error submitting the form:', error)
    }

}

const historyRetrieve = (event) => {
//     if(!history) {
//         alert('You need to authenticat as an user and save the data before you can retrieve the information')
//         return
// }
try {
    const historyUserRetrieve = async () => {
    const userHistory = await axios.get('http://localhost:8080/history')
    setHistory(JSON.stringify(userHistory.data))  
    //userHistory.data is an array of objects where each object has date and OpenAIOutput to be displayed
    //data in a format where I get month, day, year only  
    console.log(history)
    }

    historyUserRetrieve()
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


//search functionality

const inputtoSearch = (event) => {
    setSearchInput(event.target.value)   
}

const filterUserHistory = () => {
      const searchResults = history.filter(item => 
        item.toLowerCase().includes(searchInput.toLowerCase())
        ) //from the history that is an array of objects I am filtering taking the items that include the search 
        //input. This is great because allow me include in the initial retrieve all the outcomes related to an user
    //    setFilteredData(searchResults)
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
                <button onClick={saveOutput}> Save this answer </button>
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
            <input type="text"  placeholder='Search...' onChange={event => inputtoSearch(event)} className='history__search-Input'/>
            <button className='history__search-Button' onClick={filterUserHistory}></button>
            </div>
            <div className='history__Information'>
                {history}
                {/* {filteredData.map(item => (
                <div className='history__Text-Subdiv' key={item.id}>
                <p className='history__Text-Date'> {item.date}</p>
                <p className='history__Text-Content'> {item.openAiOutput}</p>
                </div> 
                ))} */}
            </div>
        </div>
        </>
    )
}


export default AiAssistance;