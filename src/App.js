import React from 'react';
import logo from './assets/header.png';
import './App.css';

function App() {
    return (
        <div className="image-container">
            <img src={logo} alt="App Banner" className="responsive-image" />
        </div>
    );
}

export default App;
