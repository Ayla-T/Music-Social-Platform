import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import NotesBg from './components/NotesBg';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  return (
    <div className="app">
      <NotesBg />

      {page === 'login' && (
        <Login onLogin={handleLogin} onGoSignup={() => setPage('signup')} />
      )}
      {page === 'signup' && (
        <Signup onSignup={() => setPage('login')} onGoLogin={() => setPage('login')} />
      )}
      {page === 'home' && (
        <Home user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;