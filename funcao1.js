let valorFinal = (valor, percentualZuros)=>{
    let valorAcrecentado = (percentualZuros / 100) * valor
    return valor + valorAcrecentado
}

console.log(valorFinal(300, 15))