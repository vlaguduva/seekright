import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });
  const [mode, setMode] = useState(darkMode ? 'dark' : 'light');

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); // Save preference to local storage
      setMode(newMode ? 'dark' : 'light');
      document.documentElement.setAttribute("data-theme", newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    setMode(darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute("data-theme", darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, mode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 