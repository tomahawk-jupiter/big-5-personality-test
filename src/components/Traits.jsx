import React from "react";

const Traits = ({ setPage }) => {
  return (
    <>
      <h2>Openness</h2>
      <p>
        Measures your level of creativity and desire for knowledge and new
        experiences
      </p>

      <h2>Conscientiousness</h2>
      <p>
        Measures your levels of thoughtfulness, impulse control, and
        goal-directed behaviours
      </p>

      <h2>Extraversion</h2>
      <p>
        Measures excitability, sociability, talkativeness, assertiveness, and
        emotional expressiveness
      </p>

      <h2>Agreeableness</h2>
      <p>
        Measures trust, altruism, kindness, affection, and other prosocial
        behaviour
      </p>

      <h2>Neuroticism</h2>
      <p>
        Emotional instability, or tendency to experience negative emotions, such
        as anger, anxiety, or depression
      </p>
      <button onClick={() => setPage("Questionaire")} className="startButton">
        START
      </button>
    </>
  );
};

export default Traits;
