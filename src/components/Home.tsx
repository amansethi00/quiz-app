import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  Image,
  Text,
  Spinner
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchListOfQuiz } from "../home.service";
import { Quiz } from "../types/allQuizz.type";
export const Home = () => {
  let navigate = useNavigate();
  const navigateToQuiz = () => {
    navigate("/quizone");
  };
  const [listOfQuiz, setListOfQuiz] = useState<Quiz[]>([]);

  useEffect(() => {
    fetchListOfQuiz(setListOfQuiz);
  }, []);
  console.log(listOfQuiz);
  return (
    <Stack direction="column" alignItems="center">
      {listOfQuiz.length < 1 && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}

      <Heading as="h2">Foodies quiz app</Heading>
      <Text>Let's test your score of foodiness</Text>
      <Flex w="100%" justify="space-between" flexWrap="wrap">
        {listOfQuiz.map((quiz, index) => {
          return (
            <Box
              flex="1"
              minW="300px"
              textAlign="center"
              color="white"
              mx="6"
              paddingBottom="100"
              mb="2"
              key={index}
            >
              <Image
                borderRadius="lg"
                height="100%"
                width="100%"
                alt={quiz.quizName}
                src={quiz.quizImage}
              />
              <Heading size={"md"} as="h3" paddingBottom="2" paddingTop="2">
                {quiz.quizName}
              </Heading>
              <Button
                colorScheme="#3e9ffe"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                onClick={navigateToQuiz}
              >
                Let's play
              </Button>
            </Box>
          );
        })}
      </Flex>
    </Stack>
  );
};
