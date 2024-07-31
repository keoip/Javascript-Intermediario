 let nom = (nomee)=>{
 console.log(`Seu nome é ${nomee}`)
}



let maiorDeIdade = (valor)=>{
 if(valor >= 18){
    console.log(`Voce é maior de idade e já tem ${valor}`)
 } else{
    console.log(`Voce não é maior de idade e tem apenas ${valor}`)
  }
}

nom('kelvin') + maiorDeIdade(19)