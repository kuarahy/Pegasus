import React from 'react';
import ProductList from './components/ProductList.js';
import './App.css';

function App() {
    return (
        <div className="container">
            {/* Gradient Background */}
            <div className="gradient-background"></div>
            {/* Video Banner */}
            <div className="video-banner">
                <video className="banner-video" autoPlay loop muted playsInline>
                    <source src="/assets/video.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
                <div className="container">
                    <h1>Our Merch Store</h1>
                    <ProductList />
                </div>
                {/* Logo */}
                <img src="/assets/logo.png" alt="Logo" className="logo"/>
                {/* Coming Soon */}
                <h2 className="coming-soon">SUPPORT-A-CREATOR: PEGASUSFLY</h2>
                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="https://tiktok.com/@pegasusfly_" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="https://www.youtube.com/@PegasusFly_" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://twitch.tv/pegasusfly_" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitch"></i>
                    </a>
                    {/* BlueSky Social Media Link */}
                    <a href="https://bsky.app/profile/pegasusfly.shop" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-bluesky"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;