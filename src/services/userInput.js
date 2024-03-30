import axios from 'axios';


export const submitInput = (event, userinput, setUserInput, setAiOutput) => {
    event.preventDefault()
   
    try {
        const UserInputPost = async () => {
        const body = {
                question: userinput
            }
        
        const newQuestion = await axios.post('http://localhost:8080/ai/input', body)
        
        setUserInput('')
        setAiOutput(newQuestion.data)       
        }
    
        UserInputPost()
        } catch (error) {
            console.error('Error submitting the form:', error)
        }
    }