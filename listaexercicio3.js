let precoNormalEtiquetaIphone = 3500;
let opcaoDePagamento = 'mais de duas vezes';

if( opcaoDePagamento == 'debito'){
    let debito = precoNormalEtiquetaIphone - 350
    console.log(`O Preço final da comptra feita no debito é de ${debito}`)
} else if(opcaoDePagamento == 'vista no dinheiro' || opcaoDePagamento == 'Pix'){
    let vista = precoNormalEtiquetaIphone - 525
    console.log(`O Preço final da compra a vista no dinheiro ou no Pix é de ${vista}`)
} else if(opcaoDePagamento == 'Duas vezes'){
    let duasVezes = precoNormalEtiquetaIphone
    console.log(`O Preço final da compra feita em duas vezes é de ${duasVezes}`)
} else if(opcaoDePagamento == 'mais de duas vezes'){
    let maisDeDuasVezes = precoNormalEtiquetaIphone + 350
    console.log(`O Preço final da compra do produto feita em mais de duas vezes é de ${maisDeDuasVezes}`)
}