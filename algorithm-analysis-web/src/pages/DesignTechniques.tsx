import React from 'react';
import InfoBox from '../components/Widgets/InfoBox';
import QuizWidget from '../components/Quiz/QuizWidget';

const DesignTechniques: React.FC = () => {
    return (
        <div>
            <h1>Algorithm Design Techniques</h1>
            <InfoBox 
                title="Introduction to Design Techniques"
                content="Algorithm design techniques are strategies for developing algorithms that solve problems efficiently. Common techniques include Divide and Conquer, Greedy Algorithms, Dynamic Programming, and Backtracking."
            />
            <h2>Common Design Techniques</h2>
            <ul>
                <li><strong>Divide and Conquer:</strong> Breaks a problem into smaller subproblems, solves each subproblem independently, and combines their solutions.</li>
                <li><strong>Greedy Algorithms:</strong> Makes the locally optimal choice at each stage with the hope of finding a global optimum.</li>
                <li><strong>Dynamic Programming:</strong> Solves complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations.</li>
                <li><strong>Backtracking:</strong> Builds a solution incrementally and abandons solutions that fail to satisfy the constraints of the problem.</li>
            </ul>
            <h2>Quiz on Design Techniques</h2>
            <QuizWidget 
                questions={[
                    {
                        question: "What is the main idea behind Divide and Conquer?",
                        options: ["Combine solutions", "Make local choices", "Store results", "Incrementally build solutions"],
                        answer: "Combine solutions"
                    },
                    {
                        question: "Which technique is used to avoid redundant calculations?",
                        options: ["Greedy Algorithms", "Dynamic Programming", "Backtracking", "Divide and Conquer"],
                        answer: "Dynamic Programming"
                    }
                ]}
            />
        </div>
    );
};

export default DesignTechniques;