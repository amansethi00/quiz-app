import { useQuestion } from "../context/question-data";
import { Heading } from "@chakra-ui/react";
export const ScoreHeader = () => {
  const {
    state: { score }
  } = useQuestion();
  return <Heading as="h2">Score:{score}</Heading>;
};
