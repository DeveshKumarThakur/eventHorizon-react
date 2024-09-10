import React from 'react';
import './App.css';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <header className="banner">
        <img src="https://via.placeholder.com/1500x500" alt="Banner" className="banner-image" />
      </header>
      <main>
        <h1>Welcome to Our Website</h1>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
