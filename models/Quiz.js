//@ts-check
import { Question } from "./Question.js";

export class Quiz {
    score = 0;
    questionIndex = 0;

    /**
   *
   * @param {Question[]} questions del quiz
   */
    constructor(questions) {
        this.questions = questions;
    }

    /**
   *
   * @returns {Question} pregunta encontrada
   */
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    isEnded() {
        return this.questions.length === this.questionIndex;
    }

    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++;
            if (this.getQuestionIndex().correctAnswer(answer) && this.questionIndex > 5) {
                this.score += 2;
            } else if (this.getQuestionIndex().correctAnswer(answer) && this.questionIndex > 10) {
                this.score += 3;
            } else if (this.getQuestionIndex().correctAnswer(answer) && this.questionIndex > 15) {
                this.score += 4;
            } else if (this.getQuestionIndex().correctAnswer(answer) && this.questionIndex > 20) {
                this.score += 5;
            }
        }
        this.questionIndex++;
    }
}
