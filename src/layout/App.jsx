import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Questionaire from "./pages/Questionaire";
import Welcome from "./pages/Welcome";
import "../styles/globals.sass";
import "../styles/home.sass";

const App = () => {
  const [page, setPage] = useState("Welcome");

  // // Load previous score from local storage
  // const [loadedScores, setLoadedScores] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("scores")) {
  //     const storedScores = localStorage.getItem("scores");
  //     setLoadedScores(JSON.parse(storedScores));
  //   }
  // }, []);

  return (
    <div className="container">
      {page === "Welcome" ? (
        <Welcome setPage={setPage} />
      ) : (
        <Questionaire setPage={setPage} />
      )}
      <Footer />
    </div>
  );
};

export default App;
