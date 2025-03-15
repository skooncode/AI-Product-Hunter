import { User } from '../interfaces/User.interface';

class ApiService {
  private baseUrl = '/api';

  async getUsers(
    page: number = 0,
    pageSize: number = 10,
    sortColumn?: string,
    sortDirection?: 'asc' | 'desc'
  ): Promise<{ users: User[], total: number }> {
    // In a real application, you'd make an actual API call
    // This is a mock implementation
    try {
      let url = `${this.baseUrl}/users?page=${page}&pageSize=${pageSize}`;
      
      if (sortColumn && sortDirection) {
        url += `&sortBy=${sortColumn}&sortDirection=${sortDirection}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      
      // Mock data for demonstration
      const mockUsers: User[] = Array.from({ length: pageSize }).map((_, index) => ({
        id: page * pageSize + index + 1,
        name: `User ${page * pageSize + index + 1}`,
        email: `user${page * pageSize + index + 1}@example.com`,
        role: index % 3 === 0 ? 'Admin' : 'User',
        status: index % 4 === 0 ? 'inactive' : 'active',
        createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
      }));
      
      return {
        users: mockUsers,
        total: 100 // Mock total count
      };
    }
  }
}

const apiService = new ApiService();
export default apiService;