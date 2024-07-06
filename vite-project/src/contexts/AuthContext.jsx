import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fakeApiLogin(username, password);
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const userData = await response.json();
      const token = 'mock-jwt-token'; 
      setUser({ username: userData.username, token });
      localStorage.setItem('user', JSON.stringify({ username: userData.username, token }));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const fakeApiLogin = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'pablo' && password === '123') {
        resolve({
          ok: true,
          json: () => Promise.resolve({ username: 'Pablo Ortiz' }),
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000); 
  });
};
