import useSearchStore from '../../store/searchStore'
import { User } from './type'

const SearchResult = () => {
    const results = useSearchStore((state) => state.results)
    
    console.log(results)
    return (
        <div>
            {results.length > 0 ? (
                results.map((user: User) => (
                    <div key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </div>
                ))
            ): (
                <div>No results found.</div>
                )}
        </div>
    )
}

export default SearchResult