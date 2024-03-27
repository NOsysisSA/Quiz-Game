import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Question() {
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  const [answers, setAnswers] = useState([]);
  const data = JSON.parse(localStorage.getItem("data"));
  const item = data && data[counter];
  const navigate = useNavigate();

  const handleClick = (answer) => {
    const isCorrect = answer === item.correct_answer;
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: item.question, isCorrect },
    ]);
    setCounter((prevCounter) => prevCounter + 1);
    if (isCorrect) {
      setPoints((prevPoints) => prevPoints + 1);
    }
  };

  if (counter === data.length) {
    localStorage.setItem("points", points);
    localStorage.setItem("answers", JSON.stringify(answers));
    navigate("/result");
  }

  return (
    <div>
      {item && (
        <div>
          <p>{item.category}</p>
          <p>{item.question}</p>
          <button onClick={() => handleClick("True")}>True</button>
          <button onClick={() => handleClick("False")}>False</button>
          <p>Points: {points}</p>
        </div>
      )}
    </div>
  );
}

export default Question;
