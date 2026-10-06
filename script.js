```javascript
// ========================================
// ARRAY DE PERGUNTAS
// ========================================

const perguntas = [

    {
        pergunta: "Qual linguagem é usada para criar a estrutura de uma página web?",

        respostas: [
            "CSS",
            "HTML",
            "JavaScript",
            "Python"
        ],

        correta: 1
    },

    {
        pergunta: "Qual linguagem é responsável principalmente pela estilização da página?",

        respostas: [
            "HTML",
            "JavaScript",
            "CSS",
            "PHP"
        ],

        correta: 2
    },

    {
        pergunta: "Qual linguagem podemos utilizar para adicionar interatividade ao site?",

        respostas: [
            "CSS",
            "HTML",
            "JavaScript",
            "SQL"
        ],

        correta: 2
    },

    {
        pergunta: "Qual comando é utilizado para mostrar uma mensagem no console?",

        respostas: [
            "console.log()",
            "print()",
            "write()",
            "message()"
        ],

        correta: 0
    },

    {
        pergunta: "Qual evento JavaScript é utilizado quando o usuário clica em um elemento?",

        respostas: [
            "onhover",
            "onclick",
            "onchange",
            "onload"
        ],

        correta: 1
    }

];


// ========================================
// VARIÁVEIS
// ========================================

let indicePergunta = 0;

let pontuacao = 0;

let respondeu = false;


// ========================================
// ELEMENTOS DO HTML
// ========================================

const questionNumber =
    document.getElementById("questionNumber");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const feedback =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextButton");

const progress =
    document.getElementById("progress");

const quiz =
    document.getElementById("quiz");

const result =
    document.getElementById("result");

const score =
    document.getElementById("score");

const message =
    document.getElementById("message");

const restartButton =
    document.getElementById("restartButton");


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function mostrarPergunta() {

    respondeu = false;

    const atual =
        perguntas[indicePergunta];


    questionNumber.textContent =
        `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;


    question.textContent =
        atual.pergunta;


    answers.innerHTML = "";

    feedback.textContent = "";

    nextButton.style.display = "none";


    // Atualizar barra de progresso

    const porcentagem =
        (indicePergunta / perguntas.length) * 100;

    progress.style.width =
        porcentagem + "%";


    // Criar botões das respostas

    atual.respostas.forEach((resposta, index) => {

        const button =
            document.createElement("button");

        button.classList.add("answer");

        button.textContent =
            resposta;


        button.addEventListener("click", () => {

            verificarResposta(
                index,
                button
            );

        });


        answers.appendChild(button);

    });

}


// ========================================
// VERIFICAR RESPOSTA
// ========================================

function verificarResposta(index, botao) {

    // Impedir que o usuário responda
    // mais de uma vez

    if (respondeu) {
        return;
    }

    respondeu = true;


    const correta =
        perguntas[indicePergunta].correta;


    const botoes =
        document.querySelectorAll(".answer");


    // RESPOSTA CORRETA

    if (index === correta) {

        botao.classList.add("correct");

        feedback.textContent =
            "✓ Resposta correta!";

        feedback.style.color =
            "#20c997";

        pontuacao++;

    }

    // RESPOSTA ERRADA

    else {

        botao.classList.add("wrong");

        feedback.textContent =
            "✗ Resposta incorreta!";

        feedback.style.color =
            "#ff5c5c";


        // Mostrar qual era a resposta correta

        botoes[correta]
            .classList.add("correct");

    }


    // Desabilitar todos os botões

    botoes.forEach(botao => {

        botao.style.pointerEvents =
            "none";

    });


    // Mostrar botão próxima pergunta

    nextButton.style.display =
        "block";


    // Se for a última pergunta

    if (
        indicePergunta ===
        perguntas.length - 1
    ) {

        nextButton.textContent =
            "Ver resultado";

    }

}


// ========================================
// PRÓXIMA PERGUNTA
// ========================================

nextButton.addEventListener("click", () => {

    indicePergunta++;


    if (
        indicePergunta <
        perguntas.length
    ) {

        mostrarPergunta();

    }

    else {

        mostrarResultado();

    }

});


// ========================================
// MOSTRAR RESULTADO
// ========================================

function mostrarResultado() {

    quiz.style.display =
        "none";


    result.style.display =
        "block";


    progress.style.width =
        "100%";


    score.textContent =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;


    const porcentagem =
        (pontuacao / perguntas.length) * 100;


    if (porcentagem === 100) {

        message.textContent =
            "🏆 Excelente! Você acertou todas!";

    }

    else if (porcentagem >= 70) {

        message.textContent =
            "👏 Muito bom! Você teve um ótimo resultado.";

    }

    else if (porcentagem >= 50) {

        message.textContent =
            "👍 Bom trabalho! Continue estudando.";

    }

    else {

        message.textContent =
            "📚 Continue estudando e tente novamente!";

    }


    restartButton.style.display =
        "block";

}


// ========================================
// REINICIAR QUIZ
// ========================================

restartButton.addEventListener("click", () => {

    indicePergunta = 0;

    pontuacao = 0;


    quiz.style.display =
        "block";


    result.style.display =
        "none";


    mostrarPergunta();

});


// ========================================
// INICIAR QUIZ
// ========================================

mostrarPergunta();
```
