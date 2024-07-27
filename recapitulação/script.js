let num = document.getElementById('inumber');
let lista = document.getElementById('ilist');
let resposta = document.getElementById('resposta'); // Corrigido o nome
let valoresVetor = [];

// Função para verificar se o número está no intervalo desejado
function isNumber(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

// Função para verificar se o número já está na lista
function inlist(numero, vetor) {
    return vetor.indexOf(Number(numero)) !== -1; // Corrigido o operador
}

// Função para adicionar um número à lista
function adicionar() {
    if (isNumber(num.value) && !inlist(num.value, valoresVetor)) {
        valoresVetor.push(Number(num.value));
        let item = document.createElement('option');
        item.innerText = `O valor ${num.value} foi adicionado`;
        lista.appendChild(item); // Corrigido para appendChild
        resposta.innerHTML = '';
    } else {
        alert('[ESSE NÚMERO JÁ FOI DIGITADO OU É MAIOR QUE 100]');
    }

    num.value = ''
}

// Função para validar e mostrar resultados
function validacao() {
    if (valoresVetor.length === 0) {
        alert('Preencha o campo!');
    } else {
        let total = valoresVetor.length;
        let soma = 0;
        for (let i = 0; i < valoresVetor.length; i++) {
            soma += valoresVetor[i];
        }
        let media = soma / total;
        let maiorNumero = Math.max(...valoresVetor);
        let menorNumero = Math.min(...valoresVetor);

        resposta.innerHTML = ''; 
        resposta.innerHTML += `O total de números é ${total}<br>`;
        resposta.innerHTML += `A soma dos números é ${soma}<br>`;
        resposta.innerHTML += `A média dos números é ${media}<br>`;
        resposta.innerHTML += `O maior número é ${maiorNumero}<br>`;
        resposta.innerHTML += `O menor número é ${menorNumero}<br>`;
    }
}
