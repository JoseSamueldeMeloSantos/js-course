//dentro de uma função com chamada automatica pois é uma boa pratica para não deixar função global
(function() {
  // 1️⃣ Definindo o nome do usuário
  const nomeUsuario = "Daniel";

  // 2️⃣ Criando um elemento <div> dinamicamente
  const topBarElemento = document.createElement("div");

  // 3️⃣ Adicionando uma classe CSS a esse elemento
  topBarElemento.className = "top-bar";

  // 4️⃣ Definindo o conteúdo HTML dentro da <div>
  topBarElemento.innerHTML = `<p>Olá, <b>${nomeUsuario}</b></p>`;

  // 5️⃣ Pegando o elemento existente onde queremos inserir o novo
  const elementoPai = document.querySelector(".hero");

  // 6️⃣ Inserindo o novo elemento ANTES do primeiro filho do elemento pai
  elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild);

  // 7️⃣ Só para ver no console o que foi inserido
  console.log(elementoPai.firstElementChild);
})();
// - createElement() → cria um novo elemento (ainda invisível na página)
  // - appendChild()   → adiciona UM elemento no final do pai
  // - append()        → adiciona um ou mais elementos ou textos no final
  // - insertBefore()  → insere um elemento antes de outro existente