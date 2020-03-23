const add = function(x, y) {
  return x + y;
};

const subtract = (x, y) => x - y; // Arrow functions

const multiply = (x, y) => x * y;

function divide(x, y) {
  return x / y;
}

const operations = [add, subtract, multiply, divide];

for (let fun of operations) {
  let result = fun(400, 10); // Por algum motivo eu consigo passar os valores como parametro
  console.log(result);
}

/**Outra maneira que podemos usar as funções em objetos, pois tudo é objeto.
 * Funções são objetos do tipo Function
 */

const thing = {
  doSomething: multiply
};

// Ao fazer thing.doSomething(3,5); estou passando os parametros da função através de uma prop do objeto
