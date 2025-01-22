import { useState } from 'react'
import { FaSearch } from "react-icons/fa"

const SearchBar = ({onSearch}) => {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value) 
        onSearch(value) // pass to the parent components
    }

    return (
        <div className='flex justify-center mt-4 '>
            <div className='input-wrapper  bg-white flex gap-4 items-center rounded-lg shadow-xl justify-center px-4 py-2 max-w-96'>

                <FaSearch id='search-icon' className="text-blue-900 h-4 w-4"/>

                <input type="search" className="rounded-lg  focus:outline-none" placeholder='Type to search' value={input} onChange={(e) => handleChange(e.target.value)} />

            </div>
        </div>
    )
}

export default SearchBar