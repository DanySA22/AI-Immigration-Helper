import axios from 'axios';
const {REACT_APP_API_URL} = process.env

export const submitInput = (event, userinput, setUserInput, setAiOutput) => {
    event.preventDefault()
   
    try {
        const UserInputPost = async () => {
        const body = {
                question: userinput
            }
        
        const newQuestion = await axios.post(`${REACT_APP_API_URL}/ai/input`, body)
        
        setUserInput('')
        setAiOutput(newQuestion.data)       
        }
    
        UserInputPost()
        } catch (error) {
            console.error('Error submitting the form:', error)
        }
    }