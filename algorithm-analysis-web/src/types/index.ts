export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface QuizResult {
    score: number;
    totalQuestions: number;
}

export interface AlgorithmConcept {
    title: string;
    description: string;
}

export interface ComplexityMetrics {
    timeComplexity: string;
    spaceComplexity: string;
}

export interface Notation {
    name: string;
    symbol: string;
    description: string;
}

export interface DesignTechnique {
    name: string;
    description: string;
}