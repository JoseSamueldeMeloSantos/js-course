/**
 * função de callback é uma função passada como argumento para outra função, 
 * para que seja executada depois que uma ação terminar.
 */
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

function processarUsuario(callback) {
  const nome = "Samuel";
  callback(nome); // executa a função passada
}

// Passando a função 'saudacao' como callback
processarUsuario(saudacao);
