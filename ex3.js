/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

const dados = require("./dados.json");


let diasComFaturamento = 0;
let faturamentoTotal = 0;
let mediaMensal = 0;

let qtdDiasComFaturamentoSuperiorAMedia = 0;

let menorValorFaturado = dados[0].valor;
let maiorValorFaturado = dados[0].valor;


// Busca o menor e maior faturamento
maiorEMenorFaturamento();

mediaMensal = faturamentoTotal / diasComFaturamento;


// Busca a quantidade de dias em que o valor de faturamento diário foi superior à média mensal
diasComFaturamentoSuperiorAMedia();



console.log(`Menor faturamento: ${menorValorFaturado}`);
console.log(`Maior faturamento: ${maiorValorFaturado}`);
console.log(`Quantidade de dias em que o valor de faturamento diário foi superior à média mensal: ${qtdDiasComFaturamentoSuperiorAMedia} dias`);





function diasComFaturamentoSuperiorAMedia() {
    
    for (let i = 0; i < dados.length; i++) {

        if (dados[i].valor > mediaMensal) {
            qtdDiasComFaturamentoSuperiorAMedia++;
        }
    }
}




function maiorEMenorFaturamento() {

    for (let i = 0; i < dados.length; i++) {

        if (dados[i].valor !== 0) {

            if (dados[i].valor < menorValorFaturado) {
                menorValorFaturado = dados[i].valor;
            }

            if (dados[i].valor > maiorValorFaturado) {
                maiorValorFaturado = dados[i].valor;
            }

            diasComFaturamento++;
            faturamentoTotal += dados[i].valor;

        }
    }
}

