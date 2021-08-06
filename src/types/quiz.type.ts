export type Option = {
  text: string;
  isRight: boolean;
};
export type Question = {
  question: string;
  points: number;
  image: string;
  options: Option[];
};
export type Quiz = {
  questions: Question[];
};
export type QuizModel = {
  quizOne: Quiz;
};
export type InitialState = {
  score: number;
  questionNumber: number;
};
export type Action =
  | { type: "INCREASE_SCORE"; payload: Question }
  | { type: "DECREASE_SCORE"; payload: Question }
  | { type: "NEXT_QUESTION" }
  | { type: "RESET" };
