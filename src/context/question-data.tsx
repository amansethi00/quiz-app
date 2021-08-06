import React, { createContext, useContext, useReducer } from "react";
import { InitialState } from "../types/quiz.type";
import { reducer } from "../reducer/quiz-reducer";

const initialState: InitialState = {
  score: 0,
  questionNumber: 0
};
export const QuestionContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const QuestionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  return useContext(QuestionContext);
};
