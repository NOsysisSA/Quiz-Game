import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/result.css'
function Result() {
  const points = localStorage.getItem("points");
  const answers = JSON.parse(localStorage.getItem("answers"));
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
    localStorage.clear();
  }

  if(answers == null && points == null){
    return <div><button onClick={handleClick}>Restart Game</button></div>
  }

  return (
    <div className="result">
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
        <button className="button" onClick={handleClick}>PLAY AGAIN?</button>
    </div>
  );
}

export default Result;