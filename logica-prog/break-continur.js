// Exemplo de uso do break
console.log("Exemplo com break:");
for (let i = 1; i <= 5; i++) {
  // Se o valor de i for 3, o loop é interrompido
  if (i === 3) {
    break; // Sai do loop completamente
  }
  console.log("i =", i); // Imprime os valores antes do break
}

console.log("\nExemplo com continue:");
for (let j = 1; j <= 5; j++) {
  // Se o valor de j for 3, essa iteração é pulada
  if (j === 3) {
    continue; // Pula o restante do código e vai para a próxima repetição
  }
  console.log("j =", j); // Imprime todos os valores, exceto o 3
}
