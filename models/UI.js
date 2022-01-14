export class UI {
    constructor() { }
    /**
     *
     * @param {sting} text
     */
    showQuestion(text) {
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }

    /**
     *
     * @param {string[]} opciones
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = "";

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.addEventListener("click", () => callback(choices[i]));
            button.className = "button";
            button.innerText = choices[i];

            choicesContainer.append(button);
        }
    }

    showScores(score) {
        const gameOverHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Posicion</th>
                    <th>Nombre de usuario</th>
                    <th>Puntaje</th>
                    </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Anónimo</td>
                    <td>${score}</td>
                </tr>
            </tbody>
        </table>
        <a href="index.html" type="button" class="btn btn-primary">
        Reiniciar cuestionario
        </a>
        `;
        // <h2 id="score">Your scores: ${quiz.score}</h2>

        const element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    }

    showProgress(currentIndex, total) {
        var element = document.getElementById("progress");
        element.innerHTML = `Pregunta ${currentIndex} de ${total+1}
        <div class="mb-3">
        <a
          href="index.html"
          type="button"
          id="task-title"
          class="btn btn-primary"
        >
          Reiniciar quiz
        </a>
        <a
          href="resultado.html"
          type="button"
          id="task-title"
          class="btn btn-primary"
        >
          Finalizar juego
        </a>
      </div>
        `;
    }
}
