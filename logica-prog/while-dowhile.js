// Inicializando duas variáveis com o mesmo valor
let a = 3;
let b = 3;

console.log("Exemplo com while:");

// O loop while verifica a condição ANTES de executar
while (a > 0) {
  // Só entra aqui se a > 0 for verdadeiro
  console.log("a =", a);
  a--; // Decrementa a cada volta
}

console.log("\nExemplo com do...while:");

// O loop do...while executa o bloco PRIMEIRO, depois verifica a condição
do {
  console.log("b =", b);
  b--; // Decrementa a cada volta
} while (b > 0); // Só aqui ele verifica se deve continuar
