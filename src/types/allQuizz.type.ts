export type Quiz = {
  quizName: string;
  quizImage: string;
};
export type AllQuiz = {
  success: boolean;
  quizzes: Quiz[];
};
