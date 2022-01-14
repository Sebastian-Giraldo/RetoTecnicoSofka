class Question {
    /**
     *
     * @param {string} text el texto de la pregunta
     * @param {string[]} choices lista de opciones para la pregunta
     * @param {string} answer la respuesta a lapregunta
     */
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     *
     * @param {string} choice la opcion seleccionada
     * @returns {boolean} returns si la opcion es correcta
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }
}

export { Question };
