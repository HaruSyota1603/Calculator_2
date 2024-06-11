const visor = document.getElementById("resultado");

function insert(num) {

    visor.innerHTML += num;


};

function clean() {
    visor.innerHTML = "";

};

function back() {
    let numeroVisor = visor.textContent;
    visor.innerHTML = numeroVisor.substring(0, numeroVisor.length - 1);

};

function calcular() {
    let numeroVisor = visor.textContent;
    visor.innerText = eval(numeroVisor);
};








// function calcular() {
// let n1, n2, operacao, resultado, caixaResposta

// n1 = Number(document.getElementById("valor1").value);
// n2 = Number(document.getElementById("valor2").value);
// operacao = (document.getElementById("operacao").value);
//  caixaResposta = document.getElementById("cxbResposta");

//  if (operacao === '+') {
//      resultado = n1 + n2;
//  }
//  else if (operacao === '-') {
//     resultado = n1 - n2;
//  }
//  else if (operacao === '*') {
//      resultado = n1 * n2;
// }
//  else {
//      operacao === '/'
//      resultado = n1 / n2
//  };


// caixaResposta.textContent = resultado;
// }