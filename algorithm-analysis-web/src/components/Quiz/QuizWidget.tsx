import React, { useState } from 'react';

const questions = [
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n"
    },
    {
        question: "Which of the following is a stable sorting algorithm?",
        options: ["Quick Sort", "Merge Sort", "Heap Sort", "Selection Sort"],
        answer: "Merge Sort"
    },
    {
        question: "What does Big-O notation describe?",
        options: ["Worst-case scenario", "Best-case scenario", "Average-case scenario", "All of the above"],
        answer: "Worst-case scenario"
    },
    // Add more questions as needed
];

const QuizWidget = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (option: string) => {
        setUserAnswers([...userAnswers, option]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const renderResults = () => {
        return (
            <div>
                <h2>Quiz Results</h2>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question.question}</p>
                        <p>Your answer: {userAnswers[index]}</p>
                        <p>Correct answer: {question.answer}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            {quizCompleted ? (
                renderResults()
            ) : (
                <div>
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuizWidget;