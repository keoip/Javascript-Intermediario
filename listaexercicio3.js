let aplicarDesconto = (valor, desconto)=>{
    return valor - (valor * (desconto/100))
}

let aplicarJuros = (valor, juros)=>{
    return valor + ( valor * (juros/100))
}

 let pagamento = (precoEtiquetaIphone, pagamentos )=>{
    if( pagamentos == 1){
        let debito = aplicarDesconto(3500, 10)
        console.log(`O Preço final da comptra feita no debito é de ${debito}`)
    } else if(pagamentos == 2){
        let vista = aplicarDesconto(3500, 15)
        console.log(`O Preço final da compra a vista no dinheiro ou no Pix é de ${vista}`)
    } else if(pagamentos == 3){
        let duasVezes = precoEtiquetaIphone
        console.log(`O Preço final da compra feita em duas vezes é de ${duasVezes}`)
    } else if(pagamentos == 4){
        let maisDeDuasVezes = aplicarJuros(3500, 10)
        console.log(`O Preço final da compra do produto feita em mais de duas vezes é de ${maisDeDuasVezes}`)
    }
}

pagamento(3500, 4);


function percentual(n1, n2){
    return x * (x/100)
}

console.log(percentual(200, 10))