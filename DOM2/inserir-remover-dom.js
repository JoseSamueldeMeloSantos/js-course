// ======================================
// 🧱 1. CRIAR ELEMENTOS E ATRIBUTOS
// ======================================

// Cria um elemento <h1>
const title = document.createElement("h1")

// Cria um atributo manualmente e adiciona ao elemento
const atributo = document.createAttribute("id")
atributo.value = "title1"
title.setAttributeNode(atributo)

// Também pode definir atributos diretamente:
title.setAttribute("title", "Título criado dinamicamente")
title.setAttribute("style", "color: red;")

// Cria um nó de texto e adiciona dentro do elemento
const text = document.createTextNode("Texto criado com createTextNode")
title.appendChild(text)

// Ou altera o texto direto:
title.textContent = "Texto com textContent"


// ======================================
// 🧩 2. INSERIR ELEMENTOS NO DOM
// ======================================

const container = document.querySelector(".container")

// --- appendChild ---
// Adiciona o elemento no final do elemento pai
container.appendChild(title)


// --- insertBefore ---
// Adiciona antes de outro elemento filho existente
const title2 = document.createElement("h1")
title2.textContent = "Título inserido antes da lista"

const list = document.querySelector("ul")
container.insertBefore(title2, list) // Insere antes da <ul>


// --- prepend --- (versão moderna)
// Adiciona no início (antes do primeiro filho)
container.prepend(title2)


// ======================================
// ⚡ 3. MÉTODOS ADJACENTES
// ======================================

const container2 = document.querySelector(".container2")

// Estes métodos inserem conteúdo em relação à posição do elemento selecionado.
// As posições possíveis são:
//  - "beforebegin": antes do elemento
//  - "afterbegin": logo dentro, antes do primeiro filho
//  - "beforeend": logo dentro, depois do último filho
//  - "afterend": depois do elemento

// --- insertAdjacentHTML ---
// Insere conteúdo HTML (como string)
container2.insertAdjacentHTML("beforebegin", "<b>Texto antes do container</b>")
container2.insertAdjacentHTML("afterbegin", "<b>Texto no início do container</b>")
container2.insertAdjacentHTML("beforeend", "<b>Texto no final do container</b>")
container2.insertAdjacentHTML("afterend", "<b>Texto depois do container</b>")

// --- insertAdjacentText ---
// Insere apenas texto (sem interpretar tags HTML)
container2.insertAdjacentText("afterbegin", "Texto simples dentro do container")

// --- insertAdjacentElement ---
// Insere um elemento DOM pronto
const em = document.createElement("em")
em.textContent = "Texto com ênfase"
container2.insertAdjacentElement("beforeend", em)


// ======================================
// 📦 4. INSERIR USANDO before() E after()
// ======================================

// Cria um elemento <span>
const span = document.createElement("span")
span.textContent = "Span inserido dinamicamente"

const segundoParagrafo = container.querySelector("p:nth-of-type(2)")

// Insere ANTES do elemento (no mesmo nível)
segundoParagrafo.before(span)

// .after() insere DEPOIS do elemento (também no mesmo nível)
// segundoParagrafo.after(span)


// ======================================
// 🧬 5. CLONAR ELEMENTOS
// ======================================

// cloneNode(true) = copia o elemento E todo seu conteúdo
// cloneNode(false) = copia apenas o elemento vazio
let sublevel = document.querySelector("ul ul").cloneNode(true)

// Inserindo o clone depois de um <h2>
const h2 = document.querySelector("h2")
container.insertBefore(sublevel, h2.nextElementSibling)


// ======================================
// 🗑️ 6. REMOVER ELEMENTOS
// ======================================

// Remove o próprio elemento
// list.remove()

// Ou remove pelo elemento pai:
list.parentElement.removeChild(list)


// ======================================
// 🔁 7. SUBSTITUIR ELEMENTOS
// ======================================

// replaceChild(novo, antigo)
// Substitui um elemento existente por outro
const parent = document.body
const newChild = container.querySelector("h1").cloneNode(true)
const oldChild = document.querySelector("h1")
parent.replaceChild(newChild, oldChild)
