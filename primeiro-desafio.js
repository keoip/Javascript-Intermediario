/* Faça um programa para calcular o valor de um viagem.

Voce terá 3 variaveis. Sendo elas:
1 - preço do combustivel;
2 - Gasto medio de combustivel do carro por KM;
3 - Distancia em KM da viagem;

*/

let precoCombustivel = 5.80
let gastoporKm = 10
let distanciaViagemKm = 1260

let gasolinaGasta = distanciaViagemKm / gastoporKm
let valorViagem = gasolinaGasta * precoCombustivel

console.log('Com o preco da gasolina estando', precoCombustivel , 'reias Numa distancia de', distanciaViagemKm , 'km temos um valor gasto em torno de', valorViagem.toFixed(2), 'reais' ) 
