(function() {
  // ============================================================
  // 📘 RESUMO: REMOVENDO E SUBSTITUINDO ELEMENTOS NO DOM
  // ============================================================
  // - remove()        → apaga um elemento diretamente
  // - removeChild()   → apaga um filho específico de um elemento pai
  // - replaceChild()  → troca um filho existente por outro elemento novo
  //
  // OBS: todos atuam sobre elementos já existentes no DOM (na tela)
  // ============================================================

  const elementoPai = document.querySelector(".hero");

  // ------------------------------------------------------------
  // 🟢 1) Criando três elementos só pra fazer os testes
  // ------------------------------------------------------------
  const divA = document.createElement("div");
  divA.textContent = "Elemento A (será removido com remove())";
  divA.style.background = "#e91e63";
  divA.style.color = "white";
  divA.style.padding = "10px";
  divA.style.marginBottom = "5px";

  const divB = document.createElement("div");
  divB.textContent = "Elemento B (será removido com removeChild())";
  divB.style.background = "#9c27b0";
  divB.style.color = "white";
  divB.style.padding = "10px";
  divB.style.marginBottom = "5px";

  const divC = document.createElement("div");
  divC.textContent = "Elemento C (será substituído)";
  divC.style.background = "#3f51b5";
  divC.style.color = "white";
  divC.style.padding = "10px";
  divC.style.marginBottom = "5px";

  elementoPai.append(divA, divB, divC);


  // ------------------------------------------------------------
  // 🔴 2) remove() → remove o próprio elemento
  // ------------------------------------------------------------
  // Remove o divA diretamente, sem precisar do pai
  divA.remove(); 
  // → divA é deletado da tela


  // ------------------------------------------------------------
  // 🟡 3) removeChild() → remove um filho específico
  // ------------------------------------------------------------
  // Aqui o pai (elementoPai) precisa saber qual filho deletar
  elementoPai.removeChild(divB);
  // → divB é removido do DOM usando o pai


  // ------------------------------------------------------------
  // 🔵 4) replaceChild() → substitui um filho por outro
  // ------------------------------------------------------------
  const novoElemento = document.createElement("div");
  novoElemento.textContent = "Elemento NOVO (substituiu o C)";
  novoElemento.style.background = "#4CAF50";
  novoElemento.style.color = "white";
  novoElemento.style.padding = "10px";

  // Substitui divC pelo novoElemento dentro do pai
  elementoPai.replaceChild(novoElemento, divC);
  // → divC é removido e o novoElemento entra no lugar

  // ------------------------------------------------------------
  // 💡 DIFERENÇAS RÁPIDAS
  // ------------------------------------------------------------
  // remove()        → remove o próprio elemento
  // removeChild(el) → remove um filho de um pai específico
  // replaceChild(novo, antigo) → troca um filho por outro
  // ------------------------------------------------------------

})();
