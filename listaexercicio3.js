let precoNormalEtiquetaIphone = 3500;
let opcaoDePagamento = '';

if( opcaoDePagamento == 'debito'){
    precoNormalEtiquetaIphone - 350
} else if(opcaoDePagamento == 'vista no dinheiro' || opcaoDePagamento == 'Pix'){
    precoNormalEtiquetaIphone - 525
} else if(opcaoDePagamento == 'Duas vezes'){
    let duasVezes = precoNormalEtiquetaIphone
    console.log(`O Preço final da compra feita em duas vezes é de ${precoNormalEtiquetaIphone}`)
} else if(opcaoDePagamento == 'mais de duas vezes'){
    let maisDeDuasVezes = precoNormalEtiquetaIphone + 350
    console.log(`O Preço final da compra do produto feita em mais de duas vezes é de ${maisDeDuasVezes}`)
}