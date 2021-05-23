import "./styles.css";
import { QuestionComponent } from "./components/QuestionComponent";
import { QuizResult } from "./components/QuizResult";
import { Home } from "./components/Home";
import { ScoreHeader } from "./components/ScoreHeader";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App" style={{ paddingTop: "2rem" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizone" element={<QuestionComponent />} />
        <Route path="/result" element={<QuizResult />} />
      </Routes>
    </div>
  );
}
