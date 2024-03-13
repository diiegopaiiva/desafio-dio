As estruturas condicionais são um elemento fundamental em programação que permitem que um programa execute diferentes ações com base em condições específicas. Em JavaScript, assim como em muitas outras linguagens de programação, as estruturas condicionais geralmente envolvem o uso de declarações `if`, `else if` e `else`. Aqui está uma explicação sobre cada uma delas:

### 1. Declaração `if`:

A declaração `if` é usada para executar um bloco de código se uma condição especificada for verdadeira. Se a condição não for atendida, o bloco de código dentro do `if` não será executado.

```javascript
if (condição) {
    // Bloco de código a ser executado se a condição for verdadeira
}
```

### 2. Declaração `else if`:

A declaração `else if` é usada em conjunto com `if` para fornecer várias condições alternativas a serem testadas. Se a condição especificada em um `if` não for atendida, o código dentro do `else if` será verificado. Se essa condição for verdadeira, o bloco de código correspondente será executado.

```javascript
if (condição1) {
    // Bloco de código a ser executado se a condição1 for verdadeira
} else if (condição2) {
    // Bloco de código a ser executado se a condição2 for verdadeira
} else {
    // Bloco de código a ser executado se nenhuma das condições anteriores for verdadeira
}
```

### 3. Declaração `else`:

A declaração `else` é usada para executar um bloco de código se nenhuma das condições anteriores for verdadeira.

```javascript
if (condição) {
    // Bloco de código a ser executado se a condição for verdadeira
} else {
    // Bloco de código a ser executado se a condição não for verdadeira
}
```

## Exemplo Completo:

```javascript
let idade = 20;

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 18 && idade < 65) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
```

Neste exemplo, o programa imprime diferentes mensagens com base na idade da pessoa: "Menor de idade" se a idade for menor que 18, "Adulto" se a idade estiver entre 18 e 64 (inclusive), e "Idoso" se a idade for 65 ou mais.


### Booleanos em JavaScript:

Em JavaScript, um booleano é um tipo de dado que tem apenas dois valores possíveis: `true` ou `false`. Os booleanos são frequentemente usados em expressões lógicas e em estruturas condicionais para tomar decisões no código.

Por exemplo:
```javascript
let condicao = true;
```
Neste exemplo, `condicao` é uma variável do tipo booleano que armazena o valor `true`.

### Estruturas Condicionais e Booleanos:

As estruturas condicionais em JavaScript, como a declaração `if`, `else if`, e `else`, usam expressões booleanas para determinar quais blocos de código devem ser executados.

Por exemplo:
```javascript
let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```
Neste exemplo, a expressão `idade >= 18` é avaliada como `true` ou `false` dependendo do valor da variável `idade`. Se `idade` for 20, a expressão será avaliada como `true`, então o primeiro bloco de código será executado.

### Operadores de Comparação e Booleanos:

Operadores de comparação, como `>`, `<`, `>=`, `<=`, `==`, `===`, `!=` e `!==`, retornam valores booleanos (`true` ou `false`) dependendo do resultado da comparação.

Por exemplo:
```javascript
let x = 5;
let y = 10;
let z = 5;

console.log(x > y);   // false
console.log(x === z); // true
```

### Operadores Lógicos e Booleanos:

Operadores lógicos, como `&&` (AND), `||` (OR) e `!` (NOT), manipulam valores booleanos e retornam novos valores booleanos com base nas operações lógicas aplicadas.

Por exemplo:
```javascript
let a = true;
let b = false;

console.log(a && b); // false (true AND false)
console.log(a || b); // true (true OR false)
console.log(!a);     // false (NOT true)
```

Esses são conceitos fundamentais em JavaScript que permitem controlar o fluxo do seu programa e tomar decisões com base nas condições especificadas.

### O operador de "resto de divisão", 
também conhecido como operador de módulo ou `%`, retorna o resto da divisão de dois números. Este operador é comumente usado em situações onde você precisa verificar se um número é divisível por outro, ou para realizar alguma ação com base no resultado da divisão.

Vamos ver um exemplo simples:

```javascript
// Verificar se um número é par ou ímpar usando o operador de resto de divisão

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é um número par.");
    } else {
        console.log(numero + " é um número ímpar.");
    }
}

verificarParOuImpar(10);  // Saída: 10 é um número par.
verificarParOuImpar(7);   // Saída: 7 é um número ímpar.
verificarParOuImpar(22);  // Saída: 22 é um número par.
```

Neste exemplo, a função `verificarParOuImpar` recebe um número como argumento. Dentro da função, usamos o operador `%` para calcular o resto da divisão desse número por 2. Se o resto for igual a 0, significa que o número é par. Caso contrário, é ímpar.

Assim, podemos utilizar o operador de resto de divisão para realizar diversas operações e verificações em nossos programas, tornando-o uma ferramenta útil em muitas situações.

### Operador de Igualdade (`==`):

Em JavaScript, existem diferentes tipos de operadores de igualdade que você pode usar para comparar valores. Vamos abordar os principais:

O operador de igualdade (`==`) compara dois valores para verificar se eles são iguais em termos de valor. Este operador realiza uma comparação simples e tenta converter os operandos se eles forem de tipos diferentes antes de fazer a comparação.

Exemplo:
```javascript
console.log(5 == 5);  // true
console.log(5 == "5"); // true, porque o JavaScript converte "5" para 5 antes da comparação
console.log(5 == 6);  // false
```

## Operador de Igualdade Estrita (`===`):
O operador de igualdade estrita (`===`) também compara dois valores para verificar se eles são iguais em termos de valor. No entanto, ao contrário do operador `==`, o operador `===` também verifica se os tipos de dados dos operandos são os mesmos.

Exemplo:
```javascript
console.log(5 === 5);  // true
console.log(5 === "5"); // false, porque "5" é uma string e 5 é um número
console.log(5 === 6);  // false
```

## Operadores de Desigualdade (`!=` e `!==`):
Os operadores de desigualdade (`!=` e `!==`) são os inversos dos operadores de igualdade (`==` e `===`). Eles retornam `true` se os valores comparados forem diferentes, e `false` se forem iguais. O operador de desigualdade estrita (`!==`) também leva em consideração os tipos de dados dos operandos.

Exemplo:
```javascript
console.log(5 != 6);    // true
console.log(5 !== "5"); // true, porque "5" é uma string e 5 é um número
console.log(5 !== 5);   // false
```

## Dica:
É uma boa prática de programação preferir o uso do operador de igualdade estrita (`===`) em vez do operador de igualdade (`==`), pois o operador estrito considera tanto o valor quanto o tipo dos operandos, o que pode evitar resultados inesperados devido à coerção de tipos.

### IF e ELSE

A estrutura condicional com `if` e `else` é uma das construções fundamentais em programação que permite que um programa tome decisões com base em condições específicas. Essa estrutura é usada quando você precisa executar diferentes blocos de código dependendo se uma condição é verdadeira ou falsa.

Aqui está uma explicação básica sobre como a estrutura condicional com `if` e `else` funciona em JavaScript:

```javascript
if (condição) {
    // Bloco de código a ser executado se a condição for verdadeira
} else {
    // Bloco de código a ser executado se a condição não for verdadeira
}
```

- A condição é uma expressão que será avaliada como verdadeira ou falsa.
- Se a condição for verdadeira, o bloco de código dentro do `if` será executado.
- Se a condição for falsa, o bloco de código dentro do `else` será executado.

Exemplo:

```javascript
let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde!");
}
```

Neste exemplo, se a hora for menor que 12, a mensagem "Bom dia!" será exibida. Caso contrário, a mensagem "Boa tarde!" será exibida.

## Usando `if`, `else if` e `else` juntos:

Além do `if` e `else`, você também pode usar a declaração `else if` para fornecer múltiplas condições alternativas a serem verificadas.

```javascript
let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
```

Neste exemplo, três condições são verificadas em sequência. Se a hora for menor que 12, "Bom dia!" será exibido. Se não for, mas for maior ou igual a 12 e menor que 18, "Boa tarde!" será exibido. Caso contrário, "Boa noite!" será exibido.