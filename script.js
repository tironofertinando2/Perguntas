const perguntas = [
    {
        enunciado: "Qual é a altura da rede no vôlei masculino e no feminino?",
        alternativas: [
            { texto: "a altura da rede é de 2,43!", pontuacao: 1 },
            { texto: "No vôlei masculino, a altura da rede é de 2,43 metros; no feminino, é de 2,24 metros.!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Quantos jogadores há em cada equipe no vôlei?",
        alternativas: [
            { texto: "são 6 pessoas em quadra", pontuacao: 2 },
            { texto: "são 12 pessoas em quadra", pontuacao: 1 }
        ]
    },
    {
        enunciado: "O que é um "ace" no vôlei?

",
        alternativas: [
            { texto: "quando o saque vai errado.", pontuacao: 1 },
            { texto: "ponto limpo do saque", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Qual é a duração máxima permitida para um tempo técnico no vôlei?",
        alternativas: [
            { texto: "dura mais de 40 minutos .", pontuacao: 2 },
            { texto: "Cada tempo técnico tem a duração máxima de 30 segundos.", pontuacao: 1
            }
        ]
    },
    {
        enunciado: "Qual é a regra básica sobre o número de toques permitidos antes que a bola deve ser enviada para o outro lado da quadra?

",
        alternativas: [
            { texto: "quatro toques seria o correto.", pontuacao: 1 },
            { texto: "Cada equipe pode dar no máximo 3 toques na bola antes de enviá-la para o lado adversário.
.", pontuacao: 2 }
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
