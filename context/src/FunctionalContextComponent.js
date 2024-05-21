import React from 'react';
import { useTheme } from './ThemeContext';

export default function FunctionalContextComponent() {
  const {darkTheme, toggleTheme} = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Functional Theme</div>
    </>
  );
}
