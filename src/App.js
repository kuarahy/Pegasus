import React from 'react';
import logo from './assets/header.png';
import './App.css';

function App() {
    return (
        <div className="image-container">
            <img src={logo} alt="App Banner" className="responsive-image" />
            <h1 className="coming-soon">COMING SOON</h1>
        </div>
    );
}

export default App;
