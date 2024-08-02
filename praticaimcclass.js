class Imc {
    constructor(peso, altura, chamado){
        this.peso = peso
        this.altura = altura
        this.chamado = chamado
    }

    calculo(){
        let final = this.peso / Math.pow(this.altura, 2)
         return parseFloat(final.toFixed(3))
    }

     classifique(){
        let imc = this.calculo();
        if(imc < 18.5){
            return (this.chamado + ' Voce está abaixo do peso')
            
        } else if (imc >= 18.5 && imc < 25){
            return (this.chamado + ' Voce está no peso ideal')
            
        } else if(imc >= 25 && imc < 30){
            return (this.chamado + ' Voce está acima do peso')
            
        } else if(imc >= 30 && imc < 40){
            return (this.chamado + ' Voce está Obeso')
            
        } else{
            return (this.chamado + ' Voce está em Obesidade Grave')
        }
    }
}

const kelvin = new Imc(63, 1.60, 'kelvin')
const laura = new Imc(50, 1.55, 'laura')
console.log(laura.calculo())
console.log(laura.classifique())

