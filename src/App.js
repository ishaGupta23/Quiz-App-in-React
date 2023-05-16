import React, { useState } from 'react';
import './style.css'; // Import CSS file

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Tokyo', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest country in the world?',
      answerOptions: [
        { answerText: 'Russia', isCorrect: true },
        { answerText: 'Canada', isCorrect: false },
        { answerText: 'China', isCorrect: false },
        { answerText: 'Australia', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the smallest country in the world?',
      answerOptions: [
        { answerText: 'Monaco', isCorrect: false },
        { answerText: 'Nauru', isCorrect: false },
        { answerText: 'Vatican City', isCorrect: true },
        { answerText: 'San Marino', isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          <h2>Your Score</h2>
          <h3>{score} out of {questions.length}</h3>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <h2>Question {currentQuestion + 1}</h2>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
          
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
           
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
