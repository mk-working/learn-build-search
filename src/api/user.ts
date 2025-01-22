import axios from "axios";

export const fetchUsers = async (value: string) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data); 

    const results = response.data.filter((user) => {
      return (
        value &&
        user &&
        user.name &&
        user.name.toLowerCase().includes(value.toLowerCase())
      );
    });

    console.log(results);
    return results;
    
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
