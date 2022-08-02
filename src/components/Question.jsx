import React from "react";

const Question = ({
  questionId,
  question,
  setScores,
  scores,
  nextQuestion,
}) => {
  const addToScore = (currQuestionScore) => {
    setScores({
      ...scores,
      [question.trait]: (scores[question.trait] += currQuestionScore),
    });
    nextQuestion();
  };

  const pointValueA = question.reverseScore ? 5 : 1;
  const pointValueB = question.reverseScore ? 4 : 2;
  const pointValueC = question.reverseScore ? 3 : 4;
  const pointValueD = question.reverseScore ? 2 : 4;
  const pointValueE = question.reverseScore ? 1 : 5;

  return (
    <>
      <h1>Question {questionId}</h1>
      <p>{question.text}</p>
      <div className="answerButtonContainer">
        <button onClick={() => addToScore(pointValueA)}>
          Strongly Disagree
        </button>
        <button onClick={() => addToScore(pointValueB)}>Disagree</button>
        <button onClick={() => addToScore(pointValueC)}>Neutral</button>
        <button onClick={() => addToScore(pointValueD)}>Agree</button>
        <button onClick={() => addToScore(pointValueE)}>Strongly Agree</button>
      </div>
    </>
  );
};

export default Question;
