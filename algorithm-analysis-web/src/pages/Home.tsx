import React from 'react';
import { Link } from 'react-router-dom';
import InfoBox from '../components/Widgets/InfoBox';
import Visualization from '../components/Graphics/Visualization';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Algorithm Analysis</h1>
            <p>
                This interactive website will guide you through the fundamental concepts of algorithm analysis, including:
            </p>
            <ul>
                <li>Introduction to Algorithm Analysis</li>
                <li>Importance of Analysis</li>
                <li>Order of Growth</li>
                <li>Asymptotic Analysis</li>
                <li>Big-O Notation</li>
                <li>Time and Space Complexity</li>
                <li>Algorithm Design Techniques</li>
            </ul>
            <InfoBox />
            <Visualization />
            <Link to="/AlgorithmAnalysis">Learn More About Algorithm Analysis</Link>
        </div>
    );
};

export default Home;