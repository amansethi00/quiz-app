import { QuizModel } from "../types/quiz.type";
export const quiz: QuizModel = {
  quizOne: {
    questions: [
      {
        question:
          "This soft, spongy and savoury snack is found all over Gujarat. It’s made of a mixture of rice and urad dal. What’s the name?",
        points: 10,
        image:
          "https://www.amexessentials.com/wp-content/uploads/2021/01/Gujarat-snack.jpg",
        options: [
          {
            text: "Dhokla",
            isRight: true
          },
          {
            text: "Vada",
            isRight: false
          },
          {
            text: "Handvi",
            isRight: false
          },
          {
            text: "Fafda",
            isRight: false
          }
        ]
      },
      {
        question:
          "From the coastal area around Mangalore in the state of Karnataka come multiple dishes made with a technique called ‘ghee roast’ (spices cooked in ghee). What is ghee?",
        points: 10,
        image:
          "https://www.amexessentials.com/wp-content/uploads/2021/01/ghee.jpg",
        options: [
          {
            text: "Coconut oil",
            isRight: false
          },
          {
            text: "Clarified Butter",
            isRight: true
          },
          {
            text: "Salted butter",
            isRight: false
          },
          {
            text: "Manglorian Butter",
            isRight: false
          }
        ]
      },
      {
        question: "What is this desert called?",
        image:
          "https://www.amexessentials.com/wp-content/uploads/2021/01/Dessert-Pictured.jpg",
        points: 10,
        options: [
          {
            text: "jackfruit",
            isRight: false
          },
          {
            text: "Gulab Jamun",
            isRight: false
          },
          {
            text: "Rasmalai",
            isRight: true
          },
          {
            text: "Kheer",
            isRight: false
          }
        ]
      },
      {
        question: "Name that pasta!",
        image:
          "https://merriam-webster.com/assets/mw/images/quiz/quiz-games-quizplay-question/alt-573b6e3630643-2213-a52032bd3d651b78f75df7e14395e1b8@1x.jpg",
        points: 10,
        options: [
          {
            text: "penne",
            isRight: false
          },
          {
            text: "orecchiette",
            isRight: true
          },
          {
            text: "farfalle",
            isRight: false
          },
          {
            text: "radiatori",
            isRight: false
          }
        ]
      },
      {
        question:
          "What is the name of the spice commonly used in Asian cuisine that creates a tingly, numbing sensation in the mouth?",
        points: 10,
        image:
          "https://merriam-webster.com/assets/mw/images/quiz/quiz-games-quizplay-question/alt-573b6856c2d5d-2205-e5c9231226f48df0cf2410a6505a1434@1x.jpg",
        options: [
          {
            text: "sichuan peppercorn",
            isRight: true
          },
          {
            text: "barberry",
            isRight: false
          },
          {
            text: "anise",
            isRight: false
          },
          {
            text: "ghost pepper",
            isRight: false
          }
        ]
      },
      {
        question:
          "Kerala is known as ‘The Land of Spices’, with one particular spice – dubbed ‘black gold’ – the most celebrated of all. What is it?",
        points: 10,
        image:
          "https://www.amexessentials.com/wp-content/uploads/2021/01/Spices.jpg",
        options: [
          {
            text: "Black pepper",
            isRight: true
          },
          {
            text: "Nigelle seed",
            isRight: false
          },
          {
            text: "Mustard seed",
            isRight: false
          },
          {
            text: "ghost pepper",
            isRight: false
          }
        ]
      },
      {
        question: "Which of the following is NOT an Indian bread?",
        points: 10,
        image:
          "https://www.amexessentials.com/wp-content/uploads/2021/01/Naan.jpg",
        options: [
          {
            text: "Chapati",
            isRight: false
          },
          {
            text: "Naan",
            isRight: false
          },
          {
            text: "Lavash",
            isRight: true
          },
          {
            text: "Paratha",
            isRight: false
          }
        ]
      }
    ]
  }
};
