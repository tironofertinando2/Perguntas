const perguntas = [
    {
        enunciado: "Você acredita que a legalização das drogas recreativas deveria ser implementada",
        alternativas: [
            { texto: "Isso é assustador!", pontuacao: 1 },
            { texto: "Isso é maravilhoso!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você acha que o aborto deveria ser um direito irrestrito para todas as mulheres?",
        alternativas: [
            { texto: "Sim, as mulheres devem ter esse direito.", pontuacao: 2 },
            { texto: "Não, deve haver restrições.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "O ensino religioso deveria ser obrigatório nas escolas públicas?",
        alternativas: [
            { texto: "Sim, deveria ser obrigatório.", pontuacao: 2 },
            { texto: "Não, não deveria ser obrigatório.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "A pena de morte deve ser uma opção para crimes hediondos?",
        alternativas: [
            { texto: "Sim, deve ser aplicada.", pontuacao: 1 },
            { texto: "Não, deve ser abolida.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "O casamento entre pessoas do mesmo sexo deve ser reconhecido legalmente em todo o país?",
        alternativas: [
            { texto: "Sim, deve ser reconhecido.", pontuacao: 1 },
            { texto: "Não, não deve ser reconhecido.", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta
