
let main = ()=>{
    const gasolinaGasta = DistanciaDaViagem / GastoMedioPorKm
    return gasolinaGasta
}

let condicional = (TipoCombustivel, CombustivelGasto, PrecoEtanol, PrecoGasolina)=>{
    if(TipoCombustivel === 1){

        let ValorGasto = CombustivelGasto * PrecoEtanol
        console.log('Com Etanol voce teria gasto ' + ValorGasto)
     
     } else if(TipoCombustivel === 2){
     
         let ValorGasto = CombustivelGasto * PrecoGasolina
         let valorGasto = Number(ValorGasto)
         console.log('Com Gasolina voce teria gasto  ' + valorGasto)
     }
}

let gasolinaGasta = main()

console.log(condicional(2, gasolinaGasta.toFixed(2), 5.31, 6.13))
