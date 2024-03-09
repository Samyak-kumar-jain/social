import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Authentication from './components/Authentication';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use state to manage login status

  // Fetch login status from local storage or database (replace with your logic)
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedIsLoggedIn === 'true');
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Update local storage (optional)
  };

  return (
    <>
  
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Authentication onLoginSuccess={handleLoginSuccess} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </div>
    
    </>
  );
}

export default App;
