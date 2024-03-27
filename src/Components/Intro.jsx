import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      const result = await response.json();
      console.log(result.results);
      localStorage.setItem("data", JSON.stringify(result.results));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="intro">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you scrore 100%</p>
      <Link to="/question">
        <button onClick={fetchData}>BEGIN</button>
      </Link>
    </div>
  );
}

export default Intro;
