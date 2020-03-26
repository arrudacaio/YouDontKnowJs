//  Aprendendo sobre rest.
// Basicamente permite receber vários clientes e coloca-los todos em um array de clientes
// Utilizando o ...
// A ideia é pegar o "resto"
function showList(empresas, ...clientes) {
  console.log(empresas);
  console.log(clientes);
}

showList("Avon", "Caio", "Alexandre", "JUlia");

/**
 * Spread: a ideia é espalhar os items do array, sem precisar percorre-lo
 * Exempo: o método math.max não aceita array no param, portanto, utilizei o spread
 * para jogar todos os elementos do array nesse param.
 */

const numbers = [15, 3, 3, 5216, 12, 54, 65];

console.log(Math.max(...numbers));

// Clonando Objetos usando o spread

const carro = {
  cor: "Azul",
  portas: 4,
  ano: 2020
};

const cloneCarro = { ...carro };

console.log(cloneCarro);
