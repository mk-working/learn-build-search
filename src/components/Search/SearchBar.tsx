import useSearchStore from '../../store/searchStore'

const SearchBar = () => {
    // Option 1: Direct Access -> component does not re-render (Work but not Recommand)
    // const setQuery = useSearchStore.getState().setQuery

    // Option 2: Reactive -> Component will be re-render
    const setQuery = useSearchStore((state) => state.setQuery);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        console.log(!!setQuery) //check if it true
    }

    return (
        // Option 1: (inline arrow function)

        // the event:object (e) will pas to handleChange -> create New function every render -> performance issues (Work but Not Recommand)

        // <input type="text" placeholder='Search users...' onChange={(e) => handleChange(e)} />

        // Option 2: direct function reference
        
        // The event:object (e) is automatically passed to the handleChange

        <input type="text" placeholder='Search users...' onChange={handleChange} />
    )
}

export default SearchBar