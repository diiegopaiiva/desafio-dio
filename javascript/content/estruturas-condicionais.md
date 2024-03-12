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

### Exemplo Completo:

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