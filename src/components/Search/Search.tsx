import { useSearchQuery } from '../../hooks/useSearchQuery'
import useSearchStore from '../../store/searchStore'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const Search = () => {
    const query = useSearchStore((state) => state.query)

    // Connect the Zustand and the Tanstack Query
    useSearchQuery(query)
    console.log("Query in Search Component", query);

    return (
        <div>
            <h2>Search Users</h2>
            <SearchBar/>
            <SearchResult/>
        </div>
    )
}

export default Search