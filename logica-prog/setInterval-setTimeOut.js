// Função que será executada repetidamente a cada 2 segundos
const intervalo = setInterval(() => {
  console.log("Executando a cada 2 segundos...");
}, 2000); // 2000 milissegundos = 2 segundos

// Função que será executada apenas uma vez após 7 segundos
setTimeout(() => {
  console.log("Encerrando intervalo após 7 segundos...");
  
  // Parando o setInterval usando clearInterval
  clearInterval(intervalo);
  
  console.log("Intervalo parado.");
}, 7000); // 7000 milissegundos = 7 segundos


// Função que será executada apenas uma vez após 7 segundos
setTimeout(() => {
  console.log("Estudar JS é bom d+");
}, 7000); 
