import React from "react";
import Faq from "./components/Faq";

const questions = [
  {
    id: 'q1',
    title: "Insert the first FAQ here.",
    info: "Insert the answer to the first FAQ here."
  },
  {
    id: 'q2',
    title: "Insert the second FAQ here.",
    info: "Insert the answer to the second FAQ here"
  },
  {
    id: 'q3',
    title: "Insert the third FAQ here.",
    info: "Insert the answer to the third FAQ here."
  }
];

function App() {
  return (
    <div className="App">
      <Faq questions={questions} />
    </div>
  );
}

export default App;
