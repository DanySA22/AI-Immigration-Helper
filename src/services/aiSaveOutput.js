import axios from 'axios';
const {REACT_APP_API_URL} = process.env
export const saveOutput = (aioutput, setAiOutput) => {

try {
    const aiOutputCreate = async () => {
    const body = {
           userId: 1,
           openAiOutput: aioutput
        }
    
    const savedAnswer = await axios.post(`${REACT_APP_API_URL}/ai/output/save`, body)
    console.log(savedAnswer)
    
    if (savedAnswer.data.noLogged === true) {
        alert(savedAnswer.data.message)
    }
    setAiOutput('New AI output will display here...')
      
    }

    aiOutputCreate()
    } catch (error) {
        console.error('Error submitting the form:', error)
        if (error.response && error.response.status === 401)
        { alert(error.response.data.message)
        } else {
          alert('An unexpected error happened')
        }
    }

}