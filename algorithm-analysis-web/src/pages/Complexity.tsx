import React from 'react';

const Complexity: React.FC = () => {
    return (
        <div className="complexity-page">
            <h1>Time and Space Complexity</h1>
            <p>
                In algorithm analysis, time complexity and space complexity are two critical factors that help us evaluate the efficiency of an algorithm.
            </p>
            <h2>Time Complexity</h2>
            <p>
                Time complexity measures the amount of time an algorithm takes to complete as a function of the length of the input. It is often expressed using Big-O notation, which describes the upper limit of the running time.
            </p>
            <h3>Common Time Complexities</h3>
            <ul>
                <li>O(1) - Constant Time</li>
                <li>O(log n) - Logarithmic Time</li>
                <li>O(n) - Linear Time</li>
                <li>O(n log n) - Linearithmic Time</li>
                <li>O(n^2) - Quadratic Time</li>
                <li>O(2^n) - Exponential Time</li>
            </ul>
            <h2>Space Complexity</h2>
            <p>
                Space complexity measures the amount of memory an algorithm uses in relation to the input size. Like time complexity, it can also be expressed using Big-O notation.
            </p>
            <h3>Common Space Complexities</h3>
            <ul>
                <li>O(1) - Constant Space</li>
                <li>O(n) - Linear Space</li>
                <li>O(n^2) - Quadratic Space</li>
            </ul>
            <h2>Importance of Complexity Analysis</h2>
            <p>
                Understanding time and space complexity is crucial for selecting the right algorithm for a given problem, especially when dealing with large datasets or performance-critical applications.
            </p>
        </div>
    );
};

export default Complexity;