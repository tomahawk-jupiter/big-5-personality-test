import React, { useState } from "react";
import Question from "../../components/Question";
import Results from "../../components/Results";
import { questions } from "../../data/questions";

const Questionaire = ({ setPage }) => {
  const endTestNumber = 45;
  const [questionId, setQuestionId] = useState(1);
  const [scores, setScores] = useState({
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
  });

  const nextQuestion = () => {
    setQuestionId(questionId + 1);
  };

  return (
    <div className="main">
      {questionId < endTestNumber ? (
        <Question
          scores={scores}
          questionId={questionId}
          question={questions[questionId]}
          nextQuestion={nextQuestion}
          setScores={setScores}
        />
      ) : (
        <Results scores={scores} />
      )}

      <button className="quitButton" onClick={() => setPage("Welcome")}>
        QUIT
      </button>
    </div>
  );
};

export default Questionaire;
