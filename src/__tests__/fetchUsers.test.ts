// src/__tests__/fetchUsers.test.ts
import { fetchUser } from '../api/user';
import axios from 'axios';

describe('fetchUser', () => {
  it('should return users matching the query', async () => {
    const users = await fetchUser('John');
    expect(users.length).toBeGreaterThan(0); // Ensure at least one user is returned
    expect(users[0].name.toLowerCase()).toContain('john'); // Ensure the name contains the query
  });

  it('should handle errors', async () => {
    // Mock an error response
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Network Error'));
    await expect(fetchUser('John')).rejects.toThrow('Network Error');
  });
});