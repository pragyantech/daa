import React from 'react';
import InfoBox from '../components/Widgets/InfoBox';
import Visualization from '../components/Graphics/Visualization';
import QuizWidget from '../components/Quiz/QuizWidget';

const AsymptoticAnalysis: React.FC = () => {
    return (
        <div className="asymptotic-analysis">
            <h1>Asymptotic Analysis</h1>
            <InfoBox 
                title="What is Asymptotic Analysis?"
                content="Asymptotic analysis is a method of describing the behavior of algorithms in terms of their running time or space requirements as the input size grows. It provides a way to compare the efficiency of different algorithms."
            />
            <Visualization />
            <QuizWidget 
                questions={[
                    {
                        question: "What does asymptotic analysis help us understand?",
                        options: ["Efficiency of algorithms", "Memory usage", "Both", "None"],
                        answer: "Both"
                    },
                    {
                        question: "Which notation is commonly used in asymptotic analysis?",
                        options: ["Big-O", "Theta", "Big-Omega", "All of the above"],
                        answer: "All of the above"
                    }
                ]}
            />
        </div>
    );
};

export default AsymptoticAnalysis;