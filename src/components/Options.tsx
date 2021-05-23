import { quiz } from "../datamodels/data.model";
import { Button, Grid } from "@chakra-ui/react";
import { Question, Option } from "../types/quiz.type";
import { useQuestion } from "../context/question-data";
import { OptionProps } from "../types/option.type";
import { useNavigate } from "react-router-dom";

export const Options = ({
  isButtonDisabled,
  setIsButtonDisabled
}: OptionProps) => {
  const {
    state: { questionNumber },
    dispatch
  } = useQuestion();
  let navigate = useNavigate();
  const navigateToResult = () => {
    navigate("/result");
  };
  const checkAnswer = (question: Question, option: Option) => {
    setIsButtonDisabled(true);
    if (option.isRight) {
      dispatch({ type: "INCREASE_SCORE", payload: question });
    }
    if (questionNumber + 1 < quiz.quizOne.questions.length)
      setTimeout(() => {
        setIsButtonDisabled(false);
        dispatch({ type: "NEXT_QUESTION" });
      }, 1000);
    else {
      setTimeout(() => {
        navigateToResult();
      }, 1000);
    }
  };
  return (
    <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2,1fr)" gap={6}>
      {quiz.quizOne.questions[questionNumber].options.map((prev) => {
        return (
          <Button
            isDisabled={isButtonDisabled}
            variant="solid"
            width="100%"
            boxShadow="0 0 1px 2px #383e6e, 0 1px 1px 2px rgb(97, 110, 202);"
            colorScheme="#383e6e"
            backgroundColor={
              isButtonDisabled && prev.isRight ? "#4caf50" : "#383e6e"
            }
            onClick={() =>
              checkAnswer(quiz.quizOne.questions[questionNumber], prev)
            }
          >
            {prev.text}
          </Button>
        );
      })}
    </Grid>
  );
};
