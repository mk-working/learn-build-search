import { create } from "zustand";
import { User } from "../components/Search/type";

interface SearchState {
    query: string;
    results: User[];
    setQuery: (query: string) => void;
    setResults: (results: User[]) => void;
}

const useSearchStore = create<SearchState>((set) => ({
    query: '',
    results: [],
    // Action
    setQuery: (query) => set({query}),
    setResults: (results) => set({results}),
}));

export default useSearchStore;