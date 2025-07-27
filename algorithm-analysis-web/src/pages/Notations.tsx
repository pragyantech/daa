import React from 'react';
import InfoBox from '../components/Widgets/InfoBox';

const Notations: React.FC = () => {
    return (
        <div>
            <h1>Algorithm Notations</h1>
            <InfoBox 
                title="Big-O Notation" 
                content="Big-O notation describes the upper bound of the time complexity of an algorithm, providing a worst-case scenario for its growth rate." 
            />
            <InfoBox 
                title="Theta (Θ) Notation" 
                content="Theta notation provides a tight bound on the growth rate of an algorithm, indicating that the algorithm's performance is both upper and lower bounded." 
            />
            <InfoBox 
                title="Big-Omega (Ω) Notation" 
                content="Big-Omega notation describes the lower bound of the time complexity of an algorithm, representing the best-case scenario for its growth rate." 
            />
            <h2>Understanding the Notations</h2>
            <p>
                These notations are essential for analyzing algorithms and understanding their efficiency. 
                They help in comparing the performance of different algorithms and in making informed decisions 
                about which algorithm to use for a particular problem.
            </p>
        </div>
    );
};

export default Notations;