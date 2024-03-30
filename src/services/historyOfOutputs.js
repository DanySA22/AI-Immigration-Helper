import axios from 'axios';
const {REACT_APP_API_URL} = process.env
export const historyRetrieve = (setHistory, setFilteredData, setPlaceholder) => {
    try {
        const historyUserRetrieve = async () => {
        const userHistory = await axios.get(`${REACT_APP_API_URL}/history`)
        if (userHistory.data.noLogged === true) {
            return alert(userHistory.data.message)
        }
        setHistory(userHistory.data)  
        setFilteredData(userHistory.data)
        setPlaceholder('')
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