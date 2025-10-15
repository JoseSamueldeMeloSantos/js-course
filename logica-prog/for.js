// =====================
// FOR tradicional
// =====================

// Quando você quer controle total do índice
const frutas = ['maçã', 'banana', 'uva'];

console.log('🔁 for - percorre índices manualmente:');
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}:`, frutas[i]);
}
// Saída:
// Índice 0: maçã
// Índice 1: banana
// Índice 2: uva

// =====================
// FOR...IN -> ler os indices
// =====================

// Quando você quer percorrer as chaves (nomes de propriedades) de um objeto
const pessoa = {
  nome: 'Lucas',
  idade: 25
};

console.log('\n🔁 for...in - percorre chaves de um objeto:');
for (let chave in pessoa) {
  console.log(`Chave: ${chave} | Valor: ${pessoa[chave]}`);
}
// Saída:
// Chave: nome | Valor: Lucas
// Chave: idade | Valor: 25

// Também funciona com arrays (mas retorna índices como strings)
console.log('\n🔁 for...in - em array (cuidado):');
for (let i in frutas) {
  console.log(`Índice (como string): ${i} | Valor: ${frutas[i]}`);
}
// Saída:
// Índice (como string): 0 | Valor: maçã
// Índice (como string): 1 | Valor: banana
// Índice (como string): 2 | Valor: uva

// =====================
// FOR...OF -> ler os valores
// =====================

// Quando você quer percorrer os VALORES diretamente de um iterável (array, string, etc)
console.log('\n🔁 for...of - percorre valores de um array:');
for (let fruta of frutas) {
  console.log(`Fruta: ${fruta}`);
}
// Saída:
// Fruta: maçã
// Fruta: banana
// Fruta: uva

// Também funciona com strings
const texto = "Olá";
console.log('\n🔁 for...of - percorre caracteres de uma string:');
for (let letra of texto) {
  console.log(`Letra: ${letra}`);
}
// Saída:
// Letra: O
// Letra: l
// Letra: á

// ❌ Não funciona diretamente com objetos simples
const obj = { a: 1, b: 2 };
// for (let item of obj) {
//   console.log(item);
// }
// Isso gera erro: TypeError: obj is not iterable

// ✅ Forma correta de usar for...of com objetos:
console.log('\n✅ for...of com Object.entries (em objetos):');
for (let [chave, valor] of Object.entries(obj)) {
  console.log(`Chave: ${chave} | Valor: ${valor}`);
}
// Saída:
// Chave: a | Valor: 1
// Chave: b | Valor: 2
