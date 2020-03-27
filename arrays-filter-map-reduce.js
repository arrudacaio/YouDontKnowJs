const precos = [
  "preco",
  "R$ 200.00",
  "R$ 400.00",
  "Contas a pagar",
  "R$ 50.00"
];

/**Filter */
const precoFilter = precos.filter(preco => preco.includes("R$"));

console.log(precoFilter);
