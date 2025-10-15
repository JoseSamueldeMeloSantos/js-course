// 🔹 1. Desestruturação simples
const numeros = [1, 2, 3, 4, 5];

const [a, b, c] = numeros;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 🔹 2. Pulando elementos
const [primeiro, , terceiro] = numeros;

console.log(primeiro); // 1
console.log(terceiro); // 3

// 🔹 3. Valores padrão
const [x, y, z, w, u, v = 99] = numeros;

console.log(v); // 99 (usou valor padrão pois não existe índice 5)

// 🔹 4. Usando ...rest (resto dos elementos)
const [n1, n2, ...resto] = numeros;

console.log(n1);     // 1
console.log(n2);     // 2
console.log(resto);  // [3, 4, 5] → "resto" é um novo array com os valores restantes

// 🔹 5. Troca de valores (swap) usando desestruturação
let nome1 = "Maria";
let nome2 = "João";

[nome1, nome2] = [nome2, nome1];

console.log(nome1); // João
console.log(nome2); // Maria

//O operador ...rest coleta os valores restantes do array após os elementos que você desestruturou.
//const [a, b, ...resto] = [1, 2, 3, 4, 5];
// a = 1
// b = 2
// resto = [3, 4, 5]
