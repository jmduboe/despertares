import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const request = new Request(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      
      const { user, access_token } = await response.json();
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return Promise.resolve();
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  },

  getPermissions: () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return Promise.resolve(user.role || 'user');
  },

  getIdentity: () => {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      return Promise.resolve({
        id: user.id,
        fullName: user.email,
        avatar: undefined,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },
};