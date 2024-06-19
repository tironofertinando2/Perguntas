const perguntas = [
{
enunciado: " Como é chamado o jogador especializado em defesa no vôlei?",
alternativas: [
"Defendedor de quadra",
"Libero"
]
},
{
enunciado: "Quantos jogadores há em uma equipe de vôlei?",
alternativas: [
"são 12 pessoas.",
"são 6 pessoas."
]
},
{
enunciado: "Qual é a altura da rede de vôlei para equipes masculinas ?",
alternativas: [
"Para o masculino 2,90",
"Para o masculino 2;43",

]
},
{
enunciado: "Qual é a pontuação necessária para vencer um set no vôlei?",
alternativas: [
"São 25 pontos ",
"São 35 pontos."
]

},
{
enunciado: "Quantos sets uma equipe precisa vencer para ganhar uma partida de vôlei?",
alternativas: [
"São necessarios 2 X 0.",
"São necessarios 3 sets."
]
}
];
let atual = 0;
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');
function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
alternativasContainer.innerHTML = '';
perguntaAtual.alternativas.forEach((alternativa, index) => {
const button = document.createElement('button');
button.textContent = alternativa;
button.addEventListener('click', () => {
atual++;
if (atual < perguntas.length) {
mostraPergunta();
} else {
caixaPerguntas.textContent = 'Você completou o questionário!';
alternativasContainer.innerHTML = '';
}
});
alternativasContainer.appendChild(button);
});
}
mostraPergunta();
