import axios from 'axios';

export const saveOutput = (aioutput, setAiOutput) => {

try {
    const aiOutputCreate = async () => {
    const body = {
           userId: 1,
           openAiOutput: aioutput
        }
    
    const savedAnswer = await axios.post('http://localhost:8080/ai/output/save', body)
    if (savedAnswer.status == 401) {
        alert('You need to authenticate as an user to save data')
    }
    setAiOutput('')
      
    }

    aiOutputCreate()
    } catch (error) {
        console.error('Error submitting the form:', error)
    }

}