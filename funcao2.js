
function classifique(imc){
    if(imc < 18.5){
        return ( imc.toFixed(2) + ' Voce está abaixo do peso')
        
    } else if (imc >= 18.5 && imc < 25){
        return ( imc.toFixed(2) + ' Voce está no peso ideal')
        
    } else if(imc >= 25 && imc < 30){
        return ( imc.toFixed(2) + ' Voce está acima do peso')
        
    } else if(imc >= 30 && imc < 40){
        return ( imc.toFixed(2) +' Voce está Obeso')
        
    } else{
        return ( imc.toFixed(2) +' Voce está em Obesidade Grave')
    }
}

function Imc(peso, altura){
    return peso / Math.pow(altura, 2)
}

// FUNÇÃO PRINCIPAL QUE SERÁ EXECUTADA APENAS UMA VEZ
(function () {
    let imc = Imc(60, 1.70)
    console.log(classifique(imc)) 
})() // CHAMADA DE FUNÇÃO EM VOLTO DE () E DEPOIS () COMO TODA FUNÇÃO

/*

Quando funções são declaradas conseguimos manipular ela de varias formas, como passar ela como  variavel, como parametro, colocar outra função dentro dela e etc.. para chama-la geralmente estavamos usando o nome dela e só, porém tem outro jeito que é colocando ela em ''() para deixa-la em evidencia e dizer que queremos que ela seja executada e depois colocar o ''()'' de novo como em toda função!!

*/

/*
(() => {
    let peso = 70
    let altura = 1.75

    let imc = Imc(peso, altura)
    console.log(classifique(imc))
})() // CHAMADA DE FUNÇÃO EMVOLTO DE () E DEPOIS () COMO TODA FUNÇÃO
*/

/*

No exemplo acima depois uma arow function em volto de ''()'' assim sendo executada automatica sozinha, sem precisar ''chama-la''

*/ 