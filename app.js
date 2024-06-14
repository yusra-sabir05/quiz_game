#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: " Q1: What is typescript",
        choices: ["A. A statically typed superset of JavaScript",
            "B. A dynamically typed superset of JavaScript",
            "C. A programming language that compiles to JavaScript",
            "D. A library for building web applications"]
    },
    {
        name: "question_2",
        type: "list",
        message: " Q2: What is the advantage of using TypeScript over JavaScript?",
        choices: ["A. TypeScript provides static typing, which can help catch errors at compile-time",
            "B. TypeScript provides more features than JavaScript",
            "C.TypeScript is faster then JavaScript",
            "D. TypeScript is more popular then JavaScript "]
    },
    {
        name: "question_3",
        type: "list",
        message: " Q3: What is the type of the variable  let x = 5 ?",
        choices: ["A.Any",
            "B.String",
            "C.Boolean",
            "D.Number"]
    },
    {
        name: "question_4",
        type: "list",
        message: " Q4: What is an interface in TypeScript?",
        choices: ["A. A way to define a function signature",
            "B.A blueprint for an object ",
            "C. A way to define a class",
            "D. A way to define a module "]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5: What is a function in TypeScript??",
        choices: ["A. A way to define a module",
            "B. A way to define a class",
            "C.A block of code that performs a specific task",
            "D. A way to define a namespace "]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "A. A statically typed superset of JavaScript":
        console.log("Q1. Correct!");
        ++score;
        break;
    default:
        console.log("Q1. Incorrect!");
}
switch (quiz.question_2) {
    case "A. TypeScript provides static typing, which can help catch errors at compile-time":
        console.log("Q2. Correct!");
        ++score;
        break;
    default:
        console.log("Q2. Incorrect!");
}
switch (quiz.question_3) {
    case "D.Number":
        console.log("Q3. Correct!");
        ++score;
        break;
    default:
        console.log("Q3. Incorrect!");
}
switch (quiz.question_4) {
    case "B.A blueprint for an object ":
        console.log("Q4. Correct!");
        ++score;
        break;
    default:
        console.log("Q4. Incorrect!");
}
switch (quiz.question_5) {
    case "C.A block of code that performs a specific task":
        console.log("Q5. Correct!");
        ++score;
        break;
    default:
        console.log("Q5. Incorrect!");
}
console.log(` Your Score: ${score}`);
