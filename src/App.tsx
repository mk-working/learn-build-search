import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import { fetchUsers } from './api/user';

function App() {
  const[results, setResults] = useState([]);

  const handleSearch = async (value: string) => {
    const data = await fetchUsers(value);
    setResults(data)
  }

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <SearchResult results={results}/>
    </>
  )
}

export default App
