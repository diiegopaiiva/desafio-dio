const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 11;
const distanciaKm = 2600;

let tipoCombustivel;
let precoCombustivel;
let valorGasto;

// Perguntar ao usuário qual tipo de combustível ele quer
const prompt = require('prompt-sync')(); // Importa o módulo prompt-sync
const escolhaUsuario = prompt("Escolha o tipo de combustível (Digite 'Etanol' ou 'Gasolina'): ");

// Convertendo a entrada do usuário para minúsculas para garantir correspondência de caso insensível
const escolhaLowerCase = escolhaUsuario.toLowerCase();

// Verificando a escolha do usuário
if (escolhaLowerCase === 'etanol') {
    tipoCombustivel = 'Etanol';
    precoCombustivel = precoEtanol;
} else if (escolhaLowerCase === 'gasolina') {
    tipoCombustivel = 'Gasolina';
    precoCombustivel = precoGasolina;
} else {
    // Se o usuário não escolheu uma opção válida
    console.log("Opção inválida.");
    // Parar a execução do código
    return;
}

const litrosConsumidos = distanciaKm / kmPorLitros;
valorGasto = litrosConsumidos * precoCombustivel;

console.log(`Tipo de combustível: ${tipoCombustivel}`);
console.log(`Valor gasto: ${valorGasto.toFixed(2)}`); // A função toFixed() é usada para exibir apenas duas casas decimais
