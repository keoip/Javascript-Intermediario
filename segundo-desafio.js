
const PrecoEtanol = 5.79
const PrecoGasolina = 6.66
const DistanciaDaViagem = 100
const GastoMedioPorKm = 10
const CombustivelGasto = DistanciaDaViagem / GastoMedioPorKm
const TipoCombustivel = 'Etanol'

if(TipoCombustivel === 'Etanol'){

   let ValorGasto = CombustivelGasto * PrecoEtanol
   console.log(ValorGasto)

} else if(TipoCombustivel === 'Gasolina'){

    let ValorGasto = CombustivelGasto * PrecoGasolina
    console.log(ValorGasto)
}

