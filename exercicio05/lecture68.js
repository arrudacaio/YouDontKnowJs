/**
 * Array of objects, testing for loop.
 */

const obj = [
  {
    name: "Caio",
    age: 19
  },
  {
    name: "Julia",
    age: 21
  }
];

for (let i = 0; i < obj.length; i++) {
  console.log(
    `O nome da pessoa é: ${obj[i].name} e sua idade é: ${obj[i].age}`
  );
}
