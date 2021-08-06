import { Heading, Button } from "@chakra-ui/react";
import { useQuestion } from "../context/question-data";
import { useNavigate } from "react-router-dom";
import { ScoreHeader } from "./ScoreHeader";
export const QuizResult = () => {
  const {
    state: { score, questionNumber },
    dispatch
  } = useQuestion();
  let navigate = useNavigate();
  const navigateToQuiz = () => {
    dispatch({ type: "RESET" });
    navigate("/quizone");
  };
  const reset = () => {
    dispatch({ type: "RESET" });
    navigateToQuiz();
  };
  const navigateToHome = () => {
    dispatch({ type: "RESET" });
    navigate("/");
  };
  return (
    <>
      <Heading>
        Congratulations!! You answered {score / 10}/{questionNumber + 1} right
        answers
      </Heading>
      <ScoreHeader />
      <br />
      <Button
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        colorScheme="#383e6e"
        onClick={() => reset()}
      >
        Reset Quiz{" "}
      </Button>
      <br />
      <br />
      <Button
        bgGradient="linear(to-l, #FF0080, #7928CA)"
        colorScheme="#383e6e"
        onClick={navigateToHome}
      >
        Take me Home
      </Button>
    </>
  );
};
