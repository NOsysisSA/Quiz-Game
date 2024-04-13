import Intro from "./Components/Intro";
import Result from "./Components/Result";
import Question from "./Components/Question";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/app.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
