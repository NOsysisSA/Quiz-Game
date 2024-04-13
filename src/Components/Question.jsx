import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/question.css";
function Question() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const item = data && data[counter];

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

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );
        const result = await response.json();
        setData(result.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if (data && counter === data.length) {
      localStorage.setItem("points", points);
      localStorage.setItem("answers", JSON.stringify(answers));
      navigate("/result");
    }
  }, [points, answers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(answers);

  return (
    <div>
      {item && (
        <div className="question">
          <p>{item.category}</p>
          <p>{item.question}</p>
          <div className="buttons">
          <button type="button" onClick={() => handleClick("True")}>
            True
          </button>
          
            <button type="button" onClick={() => handleClick("False")}>
              False
            </button>
          </div>
          <div>Points: {points}</div>
        </div>
      )}
    </div>
  );
}

export default Question;
