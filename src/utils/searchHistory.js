export const filterUserHistory = (history, searchInput, setFilteredData) => {
    const searchResults = history.filter(item => 
      item.openAiOutput.toLowerCase().includes(searchInput.toLowerCase())
      ) 
     setFilteredData(searchResults)

}