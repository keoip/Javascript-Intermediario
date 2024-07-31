let Imc = (peso, altura)=>{
    return peso / Math.pow(altura, 2)
} 

let classificarImc = (Imc)=>{
    if(Imc < 18.5){
        return ( Imc.toFixed(2) + ' Voce está abaixo do peso')
    
    } else if (Imc >= 18.5 && Imc < 25){
        return ( Imc.toFixed(2) + ' Voce está no peso ideal')
        
    } else if(Imc >= 25 && Imc < 30){
        return ( Imc.toFixed(2) + ' Voce está acima do peso')
    
    } else if(Imc >= 30 && Imc < 40){
        return ( Imc.toFixed(2) +' Voce está Obeso')
    
    } else{
        return ( Imc.toFixed(2) +' Voce está em Obesidade Grave')
    }
}

let imcCalculado = Imc(80 , 1.60)
let fixed = imcCalculado.toFixed(2)
console.log(classificarImc(imcCalculado)) 

