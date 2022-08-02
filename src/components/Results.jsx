import React, { useEffect } from "react";
import { descriptions } from "../data/traitDescriptions";

const Results = ({ scores }) => {
  const openness = (scores.openness / 10).toFixed(1);
  const conscientiousness = (scores.conscientiousness / 9).toFixed(1);
  const extraversion = (scores.extraversion / 8).toFixed(1);
  const agreeableness = (scores.agreeableness / 9).toFixed(1);
  const neuroticism = (scores.neuroticism / 9).toFixed(1);

  // // Save scores to local storage
  // useEffect(() => {
  //   const scores = {
  //     openness,
  //     conscientiousness,
  //     extraversion,
  //     agreeableness,
  //     neuroticism,
  //   };

  //   const jsonScores = JSON.stringify(scores);
  //   localStorage.setItem("scores", jsonScores);
  // }, []);

  const workOutTraitLevel = (traitScore) => {
    const scoreToNumber = traitScore;

    if (scoreToNumber <= 2) {
      return "low";
    }
    if (scoreToNumber > 2 && scoreToNumber <= 3) {
      return "just below average";
    }
    if (scoreToNumber > 3 && scoreToNumber <= 4) {
      return "just above average";
    }
    if (scoreToNumber > 4) {
      return "high";
    }
    return "error occurred!";
  };

  const getDescription = (traitScore) => {
    if (traitScore <= 3) {
      return "low";
    }
    return "high";
  };

  return (
    <>
      <h1>Your Results</h1>

      <ul>
        <li>
          Openness: <strong>{openness}</strong>
        </li>
        <li>
          Conscientiousness: <strong>{conscientiousness}</strong>
        </li>
        <li>
          Extraversion: <strong>{extraversion}</strong>
        </li>
        <li>
          Agreeableness: <strong>{agreeableness}</strong>
        </li>
        <li>
          Neuroticism: <strong>{neuroticism}</strong>
        </li>
      </ul>

      <h2>Openness</h2>
      <p>
        You scored {openness} which is {workOutTraitLevel(openness)}
      </p>
      <h3>Which is associated with these traits:</h3>
      <p>{descriptions["openness"][getDescription(openness)]}</p>

      <h2>Conscientiousness</h2>
      <p>
        You scored {conscientiousness} which is{" "}
        {workOutTraitLevel(conscientiousness)}
      </p>
      <h3>Which is associated with these traits:</h3>
      <p>
        {descriptions["conscientiousness"][getDescription(conscientiousness)]}
      </p>

      <h2>Extraversion</h2>
      <p>
        You scored {extraversion} which is {workOutTraitLevel(extraversion)}
      </p>
      <h3>Which is associated with these traits:</h3>
      <p>{descriptions["extraversion"][getDescription(extraversion)]}</p>

      <h2>Agreeableness</h2>
      <p>
        You scored {agreeableness} which is {workOutTraitLevel(agreeableness)}
      </p>
      <h3>Which is associated with these traits:</h3>
      <p>{descriptions["agreeableness"][getDescription(agreeableness)]}</p>

      <h2>Neuroticism</h2>
      <p>
        You scored {neuroticism} which is {workOutTraitLevel(neuroticism)}
      </p>
      <h3>Which is associated with these traits:</h3>
      <p>{descriptions["neuroticism"][getDescription(neuroticism)]}</p>
    </>
  );
};

export default Results;
