/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/

const palavra = "Target Sistemas";
let palavraInvertida = "";


for(let i = 1; i < palavra.length + 1; i++){
    palavraInvertida += palavra[palavra.length - i] 
}

console.log(palavraInvertida)