import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/user";
import { useEffect } from "react";
import { User } from "../components/Search/type";
import useSearchStore from "../store/searchStore";

export const useSearchQuery = (query: string) => {
  const setResults = useSearchStore((state) => state.setResults);

  console.log("Query in useSearchQuery:", query);

  const result = useQuery<User[], Error>({
    queryKey: ["users", query],
    queryFn: () => fetchUser(query),
    enabled: !!query,
  });

  // logging for debugging
  useEffect(() => {
    if (result.data) {
      console.log("Fetched Data:", result.data);
      setResults(result.data);
    }
  }, [result.data, setResults]);

  useEffect(() => {
    if (result.error) {
      console.log("Error:", result.error);
    }
  }, [result.error]);

  return result;
};
