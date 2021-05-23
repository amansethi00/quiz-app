import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import { quiz } from "../datamodels/data.model";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  let navigate = useNavigate();
  const navigateToQuiz = () => {
    navigate("/quizone");
  };
  return (
    <Stack direction="column" alignItems="center">
      <Heading as="h2">Foodies quiz app</Heading>
      <Text>Let's test your score of foodiness</Text>
      <Flex w="100%" justify="space-between" flexWrap="wrap">
        <Box
          flex="1"
          minW="300px"
          textAlign="center"
          color="white"
          mx="6"
          paddingBottom="100"
          mb="2"
        >
          <Image
            borderRadius="lg"
            height="100%"
            width="100%"
            alt={quiz.quizOne.questions[0].question}
            src={quiz.quizOne.questions[0].image}
          />
          <Heading size={"md"} as="h3" paddingBottom="2" paddingTop="2">
            How well do you know Indian foods?
          </Heading>
          <Button
            colorScheme="#3e9ffe"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            onClick={navigateToQuiz}
          >
            Let's play
          </Button>
        </Box>
        <Box
          flex="1"
          minW="300px"
          textAlign="center"
          color="white"
          mx="6"
          paddingBottom="100"
          mb="2"
        >
          <>
            <Image
              borderRadius="lg"
              height="100%"
              width="100%"
              alt={quiz.quizOne.questions[1].question}
              src={quiz.quizOne.questions[1].image}
            />
            <Heading size={"md"} as="h3" paddingBottom="2" paddingTop="2">
              How well do you know Indian foods?
            </Heading>
            <Button
              colorScheme="#3e9ffe"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              onClick={navigateToQuiz}
            >
              Let's play
            </Button>
          </>
        </Box>
        <Box
          flex="1"
          minW="300px"
          textAlign="center"
          color="white"
          mx="6"
          paddingBottom="100"
          mb="2"
        >
          <>
            <Image
              borderRadius="lg"
              height="100%"
              width="100%"
              alt={quiz.quizOne.questions[2].question}
              src={quiz.quizOne.questions[2].image}
            />
            <Heading size={"md"} as="h3" paddingBottom="2" paddingTop="2">
              How well do you know Indian foods?
            </Heading>
            <Button
              colorScheme="#3e9ffe"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              onClick={navigateToQuiz}
            >
              Let's play
            </Button>
          </>{" "}
        </Box>
      </Flex>
    </Stack>
  );
};
