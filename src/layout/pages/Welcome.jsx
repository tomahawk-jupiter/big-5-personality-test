import React, { useState } from "react";
import Traits from "../../components/Traits";

const Welcome = ({ setPage }) => {
  const [showTraits, setShowTraits] = useState(false);

  return (
    <main className="main">
      <h1 className="title">Big 5 Personality Test</h1>

      <div>
        <button onClick={() => setPage("Questionaire")} className="startButton">
          START
        </button>
      </div>
      <p>
        Answer the 44 questions to get your score for the big 5 personality
        traits
      </p>
      {showTraits ? (
        <Traits setPage={setPage} />
      ) : (
        <button onClick={() => setShowTraits(true)}>What are these?</button>
      )}
    </main>
  );
};

export default Welcome;
