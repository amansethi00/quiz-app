import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QuestionProvider } from "./context/question-data";
const rootElement = document.getElementById("root");
render(
  <Router>
    <ChakraProvider>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </ChakraProvider>
  </Router>,
  rootElement
);
