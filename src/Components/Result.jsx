import React from "react";
import { Link } from "react-router-dom";
function Result() {
  const points = localStorage.getItem("points");
  const answers = JSON.parse(localStorage.getItem("answers"));

  return (
    <div>
      <h2>Your scored {points} / 10</h2>
      <h3>Answers:</h3>
      <ul>
        {answers &&
          answers.map((answer, index) => (
            <li key={index}>
              {answer.question}{" "}
              {answer.isCorrect ? (
                <p style={{ color: "#0FAE04" }}>Correct</p>
              ) : (
                <p style={{ color: "red" }}>Incorrect</p>
              )}
            </li>
          ))}
      </ul>
      <Link to={"/"}>
        <button>PLAY AGAIN?</button>
      </Link>
    </div>
  );
}

export default Result;
