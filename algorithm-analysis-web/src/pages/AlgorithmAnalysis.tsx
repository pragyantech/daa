import React from 'react';
import InfoBox from '../components/Widgets/InfoBox';
import Visualization from '../components/Graphics/Visualization';
import QuizWidget from '../components/Quiz/QuizWidget';

const AlgorithmAnalysis: React.FC = () => {
    return (
        <div className="algorithm-analysis">
            <h1>Introduction to Algorithm Analysis</h1>
            <InfoBox 
                title="What is Algorithm Analysis?" 
                content="Algorithm analysis is the study of the performance of algorithms, primarily in terms of time and space complexity."
            />
            <InfoBox 
                title="Importance of Analysis" 
                content="Understanding algorithm analysis helps in selecting the most efficient algorithm for a given problem, ensuring optimal performance."
            />
            <Visualization />
            <QuizWidget />
        </div>
    );
};

export default AlgorithmAnalysis;