import axios from "axios";
import { User } from "../components/Search/type";

export const fetchUser = async (query: string): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    // I want to check the "AxiosResponse"
    console.log("logging the response", response);

    console.log("response data", response.data);

    const filteredUser = response.data.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );

    console.log("filtered data", filteredUser);

    return filteredUser;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
