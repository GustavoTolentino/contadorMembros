const express = require('express');
const app = express();
let valor = 12010;

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});


// Função para obter a quantidade de dias passados desde uma data específica
function obterDiasPassados() {
  const dataEstipulada = new Date('2023-06-07');
  const dataAtual = new Date();
  const tempoPassado = dataAtual - dataEstipulada;
  const diasPassados = Math.floor(tempoPassado / (1000 * 60 * 60 * 24));
  return diasPassados;
}

// Função para atualizar o valor a cada 24 horas
function atualizarValor() {
  valor += Math.floor(obterDiasPassados() / 1) * 80; // Incremento de 80 a cada 24 horas
}

app.get('/', (req, res) => {
  atualizarValor();
  res.send(`Valor atualizado: ${valor}`);
});

