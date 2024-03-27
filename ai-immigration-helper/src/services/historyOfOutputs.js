import axios from 'axios';

export const historyRetrieve = (setHistory, setFilteredData) => {
    try {
        const historyUserRetrieve = async () => {
        const userHistory = await axios.get('http://localhost:8080/history')
        setHistory(userHistory.data)  
        setFilteredData(userHistory.data)
        }
    
        historyUserRetrieve()
        } catch (error) {
            console.error('Error submitting the form:', error)
        }
    
    }