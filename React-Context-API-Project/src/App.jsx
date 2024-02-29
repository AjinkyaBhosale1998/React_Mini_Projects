import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <div className="app-container">
        <h1>React Context API</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
