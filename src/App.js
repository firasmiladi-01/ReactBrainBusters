import Header from "./components/Header";
import Quizz from "./components/Quizz";
import "./App.css";
import { useState } from "react";
import { ScoreProvider } from "./ScoreContext";
// import Checkbox from "@mui/material/Checkbox";
const questions = [
  {
    question: "What is React?",
    correctChoices: ["A JavaScript library for building user interfaces"],
    wrongChoices: ["A programming language", "A database"],
  },
  {
    question: "What is the virtual DOM in React?",
    correctChoices: [
      "A lightweight in-memory representation of the actual DOM",
    ],
    wrongChoices: ["A real DOM", "A server-side rendering solution"],
  },
  {
    question: "What is React JS used for?",
    correctChoices: ["Building user interfaces", "Server-side rendering"],
    wrongChoices: ["Data storage", "Game development"],
  },
  {
    question: "What are the main features of React JS?",
    correctChoices: ["Virtual DOM", "JSX", "Components"],
    wrongChoices: [
      "File system access",
      "Network communication",
      "Cross-browser compatibility",
    ],
  },
  {
    question: "What is Virtual DOM in React JS?",
    correctChoices: [
      "A lightweight in-memory representation of the real DOM",
      "A way to update the UI efficiently",
    ],
    wrongChoices: [
      "A way to access the file system",
      "A way to handle cross-browser compatibility issues",
    ],
  },
  {
    question: "What is a component in React?",
    correctChoices: [
      "A piece of UI that can be reused throughout the application",
    ],
    wrongChoices: ["A piece of HTML code", "A piece of JavaScript code"],
  },
  {
    question: "What is state in React?",
    correctChoices: [
      "An object that represents the data or variables that can change within a component",
    ],
    wrongChoices: [
      "An object that represents the data or variables that cannot change within a component",
      "A string that represents the data or variables within a component",
    ],
  },
  {
    question: "What is the purpose of the render method in React?",
    correctChoices: [
      "To return the elements that should be displayed on the UI",
    ],
    wrongChoices: [
      "To update the UI elements",
      "To handle the event listeners",
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className="App">
      <Header currentQuestion={currentQuestion} size={questions.length} />
      <Quizz
        question={questions[currentQuestion]}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentQuestion={currentQuestion}
        size={questions.length}
      />
    </div>
  );
}

function Root() {
  return (
    <ScoreProvider>
      <App />
    </ScoreProvider>
  );
}

export default Root;
