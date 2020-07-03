import React from 'react';
import './question-card.scss';

const QuestionCard = ({question}) => {
    
    return (
        <div className="question-card">{question.question}</div>
    )
}

export default QuestionCard;