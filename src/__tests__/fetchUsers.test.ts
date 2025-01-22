import { fetchUser } from '../api/user';
import axios from 'axios';

describe('fetchUser', () => {
  it('should return users matching the query', async () => {
    // Mock the API response
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      ],
    });

    const users = await fetchUser('John');
    expect(users.length).toBeGreaterThan(0); 
    expect(users[0].name.toLowerCase()).toContain('john'); 
  });

  it('should handle errors', async () => {
    // Mock an error response
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Network Error'));
    await expect(fetchUser('John')).rejects.toThrow('Network Error');
  });
});
