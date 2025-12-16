// função para adicionar um valor ao valor
function adicionar(valor) {
    document.getElementById('visor').value += valor;
}

// função para limpar o valor
function limpar() {
    document.getElementById('visor').value = '';
}

// função para apagar o último caractere
function apagar() {
    var visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}

// função para calcular o resultado 
function calcular() {
    var visor = document.getElementById('visor');
    try {
        // usa a função eval() para calcular o resultado 
        visor.value = eval(visor.value);
    } catch (error) {
    // Se houver um erro na expressão, mostra "Erro" no visor
    visor.value = 'Erro';

    }
}

// função para calcular fatorial
function fatorial() {
    let n = parseInt(visor.value);
    if (isNaN(n) || n < 0) { // parênteses corrigidos
        visor.value = "inválido";
        return;
    }
    let fat = 1;
    for (let i = 1; i <= n; i++) {
        fat *= i;
    }
    visor.value = fat;
}