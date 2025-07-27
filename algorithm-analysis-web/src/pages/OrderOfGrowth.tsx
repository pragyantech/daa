import React from 'react';
import InfoBox from '../components/Widgets/InfoBox';
import Visualization from '../components/Graphics/Visualization';

const OrderOfGrowth: React.FC = () => {
    return (
        <div className="order-of-growth">
            <h1>Order of Growth</h1>
            <InfoBox 
                title="What is Order of Growth?"
                content="Order of growth describes how the runtime or space requirements of an algorithm grow as the input size grows. It helps in understanding the efficiency of algorithms."
            />
            <Visualization />
            <h2>Key Concepts</h2>
            <ul>
                <li>Understanding how algorithms scale with input size.</li>
                <li>Comparing different algorithms based on their growth rates.</li>
                <li>Identifying the best algorithm for a given problem based on performance.</li>
            </ul>
        </div>
    );
};

export default OrderOfGrowth;