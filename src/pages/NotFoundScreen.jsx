import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/NotFoundPage.css';
import spaceImage from './styles/DALL.png';

const NotFoundScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="space-not-found-container">
            <div className="space-not-found-content">
                <h1 className="animated-text">404</h1>
                <h2 className="animated-text">LOST IN SPACE</h2>
                <p>App-Name? Hmm, looks like that page doesn't exist.</p>
                <button onClick={() => navigate('/')}>Go Home</button>
            </div>
        </div>
    );
};

export default NotFoundScreen;
