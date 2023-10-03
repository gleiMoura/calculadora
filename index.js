function adicionarNoDisplay(value) {  // Essa função coloca o valor na tela para que as pessoas passam ver
    const display = document.getElementById('display'); //cria o elemento HTML display
    display.value += value; //altera o value dentro do display 
}

function limparDisplay() { // essa função limpa o valor no display
    const display = document.getElementById('display');
    display.value = '';
}

function calcularResultado() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

//A função eval acima possibilita intepretar uma string como código javascript. No momento em que colocamos uma operação ali
//o javascript consegue interpretar aquilo como código e fazer a operação e lançar diretamente no display. 

//exemplo de uso do Eval
const x = 10;
const y = 20;
const operacao = 'x + y';

const resultado = eval(operacao);