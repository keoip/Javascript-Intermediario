
 let pagamento = (precoEtiquetaIphone, pagamentos )=>{
    if( pagamentos == 1){
        let debito = precoEtiquetaIphone - 350
        console.log(`O Preço final da comptra feita no debito é de ${debito}`)
    } else if(pagamentos == 2 || pagamentos == 2){
        let vista = precoEtiquetaIphone - 525
        console.log(`O Preço final da compra a vista no dinheiro ou no Pix é de ${vista}`)
    } else if(pagamentos == 3){
        let duasVezes = precoEtiquetaIphone
        console.log(`O Preço final da compra feita em duas vezes é de ${duasVezes}`)
    } else if(pagamentos == 4){
        let maisDeDuasVezes = precoEtiquetaIphone + 350
        console.log(`O Preço final da compra do produto feita em mais de duas vezes é de ${maisDeDuasVezes}`)
    }
}

pagamento(3500, 1);