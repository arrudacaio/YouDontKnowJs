/**
 * Quando temos funções aninhadas, a função que está dentro
 * tem acesso as variaveis que estão na função mais externa
 *
 * Porém se eu declarar uma variável na função interna, a externa não
 * consegue acessa-la
 */

function outer() {
  let movie = "O poço";

  function inner() {
    let x = 10;
    console.log(movie.toUpperCase());
  }
  inner();
  //console.log(x * 2);
}

/**Another sintax to define a function */

const sum = function(x, y) {
  return x + y;
};
