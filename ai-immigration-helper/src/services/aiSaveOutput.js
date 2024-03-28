import axios from 'axios';

export const saveOutput = (aioutput, setAiOutput) => {

try {
    const aiOutputCreate = async () => {
    const body = {
           userId: 1,
           openAiOutput: aioutput
        }
    
    const savedAnswer = await axios.post('http://localhost:8080/ai/output/save', body)
    console.log(savedAnswer)
    
    if (savedAnswer.data.noLogged === true) {
        alert(savedAnswer.data.message)
    }
    setAiOutput('')
      
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