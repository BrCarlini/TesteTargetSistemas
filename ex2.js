/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

let n1 = 0;
let n2 = 1;
let numeroFuturo = 0;

let numeroASerVerificado = 55;

while (numeroASerVerificado > numeroFuturo){
    numeroFuturo = n1 + n2;
    n1 = n2;
    n2 = numeroFuturo;
}


if(numeroASerVerificado == numeroFuturo){
    console.log(`O número ${numeroASerVerificado} PERTENCE a sequência.`)
}else {
    console.log(`O número ${numeroASerVerificado} NÃO PERTENCE a sequência.`)
}

