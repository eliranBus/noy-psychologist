import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Context = React.createContext();

function ContextProvider({ children }) {
  let [quesNumber, setQuestNumber] = useState(0);
  let [index, setIndex] = useState(1);
  let [circularPrecentage, setCircularPrecentage] = useState(10);
  let [concatAnswers, setConcatAnswers] = useState([]);

  let history = useHistory();

  function nextQuestion() {
    setQuestNumber((quesNumber) => quesNumber++);
    history.push(`/q-${quesNumber}`);
  }

  return (
    <Context.Provider
      value={{
        quesNumber,
        setQuestNumber,
        nextQuestion,
        index,
        setIndex,
        circularPrecentage,
        setCircularPrecentage,
        concatAnswers,
        setConcatAnswers,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
