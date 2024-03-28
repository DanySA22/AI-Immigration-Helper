import axios from 'axios';

export const historyRetrieve = (setHistory, setFilteredData) => {
    try {
        const historyUserRetrieve = async () => {
        const userHistory = await axios.get('http://localhost:8080/history')
        if (userHistory.data.noLogged === true) {
            return alert(userHistory.data.message)
        }
        setHistory(userHistory.data)  
        setFilteredData(userHistory.data)
        }
    
        historyUserRetrieve()
        } catch (error) {
            console.log('Error submitting the form:', error)
            if (error.response && error.response.status === 401)
            { alert(error.response.data.message)
            } else {
              alert('An unexpected error happened')
            }
        }
    
    }