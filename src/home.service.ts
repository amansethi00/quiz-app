import axios from "axios";
import { AllQuiz } from "./types/allQuizz.type";
export const fetchListOfQuiz = async (setListOfQuiz) => {
  try {
    console.log("in try ");
    const response = await axios.get<AllQuiz>(
      "https://quiz-backend.amansethi00.repl.co/home"
    );
    console.log(response);
    if (response.data.success) {
      setListOfQuiz(() => response.data.quizzes);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error");
    } else {
      console.log("error in network maybe");
    }
  }
};
