function dividir(a, b) {
  // Verifica se o divisor é zero
  if (b === 0) {
    // Lança um erro manualmente com throw
    throw new Error("Não é possível dividir por zero!");
  }
  return a / b;
}

try {
  // Tenta executar a função que pode gerar erro
  let resultado = dividir(10, 0); // Vai lançar erro
  console.log("Resultado:", resultado);
} catch (erro) {
  // Se houver erro no try, cai aqui
  console.log("Erro capturado:", erro.message);
} finally {
  // Sempre executa, com ou sem erro
  console.log("Finalizando operação.");
}
