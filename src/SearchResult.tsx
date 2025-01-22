import { useState } from "react"

const SearchResult = ({ results }) => {
    return (
        <div className='flex flex-col items-center justify-center mt-4'>
            {results.length > 0 ? (
                results.map((user) => (
                    <div key={user.id} className='bg-white p-4 rounded-lg shadow-md mb-4 w-96'>
                        <strong>{user.name}</strong> - {user.email}
                    </div>
                ))
            ) : (
                <div className='text-gray-500'>No results found.</div>
            )}
        </div>
    );
};

export default SearchResult;