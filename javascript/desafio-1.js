const precoCombustivel = 5.79;
const kmPorLitros = 11;
const distanciaKm = 2600;

const litrosConsumidos = distanciaKm / kmPorLitros;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log('O valor gasto foi de $', valorGasto.toFixed(2));