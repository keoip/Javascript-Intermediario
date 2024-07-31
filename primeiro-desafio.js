/* Faça um programa para calcular o valor de um viagem.

Voce terá 3 variaveis. Sendo elas:
1 - preço do combustivel;
2 - Gasto medio de combustivel do carro por KM;
3 - Distancia em KM da viagem;

*/

let calculoViagem = (precoCombustivel, gastoPorKm, distanciaViagemKm)=>{
    let gasolinaGasta = distanciaViagemKm / gastoPorKm
    let valorViagem = gasolinaGasta * precoCombustivel
    return valorViagem.toFixed(2)
}

console.log(calculoViagem(5.80, 10, 1260));



    
   
