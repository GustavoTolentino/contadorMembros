const express = require('express');
import { Router } from 'express';
const app = express();
const route = Router();

let valor = 12010;

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

route.get('/', (req, res) => {
    atualizarValor();
    return res.json({
        success: true,
        contador: valor
    });
});
app.use(route);
app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
