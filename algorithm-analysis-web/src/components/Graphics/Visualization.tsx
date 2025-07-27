import React from 'react';
import { Line } from 'react-chartjs-2';

const Visualization: React.FC = () => {
    const data = {
        labels: ['n', 'n^2', 'n^3', '2^n', 'n!'],
        datasets: [
            {
                label: 'Time Complexity',
                data: [1, 4, 9, 16, 25], // Example data points
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Algorithm Performance Visualization</h2>
            <Line data={data} options={options} />
            <p>This graph illustrates the growth of different time complexities as the input size increases.</p>
        </div>
    );
};

export default Visualization;