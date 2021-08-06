import { useQuestion } from "../context/question-data";
import { quiz } from "../datamodels/data.model";
import { Options } from "./Options";
import { useState, useEffect, useRef } from "react";
import { ScoreHeader } from "./ScoreHeader";
import { Question, Option } from "../types/quiz.type";
import {
  Button,
  Image,
  Stack,
  Text,
  VStack,
  Heading,
  Spacer,
  useMediaQuery
} from "@chakra-ui/react";
export const QuestionComponent = () => {
  const {
    state: { questionNumber },
    dispatch
  } = useQuestion();
  const refToQuestionBody = useRef<HTMLInputElement>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isForLargeScreen] = useMediaQuery("(min-width:640px)");
  useEffect(() => {
    if (refToQuestionBody.current && refToQuestionBody) {
      refToQuestionBody?.current.scrollTo(0, 0);
    }
  }, [questionNumber]);
  return (
    <div ref={refToQuestionBody}>
      <ScoreHeader />
      <Stack
        align="center"
        direction={isForLargeScreen ? "row" : "column"}
        padding={isForLargeScreen ? "2rem" : "auto"}
      >
        <Image
          borderRadius="lg"
          height={isForLargeScreen ? "25rem" : "auto"}
          width={isForLargeScreen ? "35rem" : "80%"}
          alt={quiz.quizOne.questions[questionNumber].question}
          src={quiz.quizOne.questions[questionNumber].image}
        />
        <VStack
          height={isForLargeScreen ? "25rem" : "auto"}
          spacing="6"
          textAlign="center"
          width="100%"
          justifyContent="space-between"
        >
          <>
            <Heading as="h3" size="lg">
              <Text fontSize="md" inli>
                Q ) {questionNumber + 1}/{quiz.quizOne.questions.length}
              </Text>
              {quiz.quizOne.questions[questionNumber].question}
            </Heading>
            <Heading as="h5" size="sm">
              Points:{quiz.quizOne.questions[questionNumber].points}
            </Heading>
          </>
          <Options
            isButtonDisabled={isButtonDisabled}
            setIsButtonDisabled={setIsButtonDisabled}
          />
          <Button
            isDisabled={
              isButtonDisabled ||
              questionNumber + 1 === quiz.quizOne.questions.length
            }
            mt="8"
            width="80%"
            backgroundColor="#3e9ffe"
            colorScheme="#3e9ffe"
            onClick={() => {
              setIsButtonDisabled(false);
              dispatch({ type: "NEXT_QUESTION" });
            }}
          >
            Next Question
          </Button>
          {/* <Button
            colorScheme="#3e9ffe"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            onClick={()=>}
          >
            Show me the result
          </Button> */}
        </VStack>
      </Stack>
    </div>
  );
};
