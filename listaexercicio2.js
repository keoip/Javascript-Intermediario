const Peso = 70
const Altura = 1.60

const Imc = Peso / Math.pow(Altura, 2) /* 'Math' é uma biblioteca que calcula funções matemtaticas */ 

if(Imc < 18.5){
    console.log( Imc.toFixed(2) + ' Voce está abaixo do peso')

} else if (Imc >= 18.5 && Imc < 25){
    console.log( Imc.toFixed(2) + ' Voce está no peso ideal')
    
} else if(Imc >= 25 && Imc < 30){
    console.log( Imc.toFixed(2) + ' Voce está acima do peso')

} else if(Imc >= 30 && Imc < 40){
    console.log( Imc.toFixed(2) +' Voce está Obeso')

} else{
    console.log( Imc.toFixed(2) +' Voce está em Obesidade Grave')
}