function add (n1, n2){
    return n1 + n2;
}

function sub (n1, n2){
    return n1 - n2;
}

function mult (n1, n2){
    return n1 * n2;
}

function div (n1, n2){
    return n1 / n2;
}

module.exports = {
    soma: add,
    subtracao: sub,
    multiplicacao: mult,
    divisao: div
  };