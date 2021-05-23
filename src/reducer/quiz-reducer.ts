import { InitialState, Action } from "../types/quiz.type";

export const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case "INCREASE_SCORE":
      return {
        ...state,
        score: state.score + action.payload.points
      };
    case "DECREASE_SCORE":
      return {
        ...state,
        score: state.score - action.payload.points
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        questionNumber: state.questionNumber + 1
      };
    case "RESET":
      return {
        score: 0,
        questionNumber: 0
      };
    default:
      return { ...state };
  }
};
