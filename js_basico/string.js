// ==========================
// 🧩 TUDO SOBRE STRINGS EM JS
// ==========================

// 🔹 Formas de criar strings
let nome1 = "Samuel";
let nome2 = 'Melo';
let nome3 = `Meu nome é ${nome1} ${nome2}`; // template literal

console.log(nome3); // Interpolação de variáveis

// --------------------------
// 🧠 Strings são imutáveis e indexadas
let linguagem = "JavaScript";
console.log(linguagem[0]); // "J"
console.log(linguagem.length); // 10

// --------------------------
// ⚙️ Métodos de busca
console.log(linguagem.charAt(4)); // "S"
console.log(linguagem.indexOf("Script")); // 4
console.log(linguagem.lastIndexOf("a")); // 3
console.log(linguagem.includes("Java")); // true
console.log(linguagem.startsWith("Java")); // true
console.log(linguagem.endsWith("Script")); // true

// --------------------------
// 🔹 Manipulação de texto
let palavra = " banana ";
console.log(palavra.trim()); // remove espaços dos lados
console.log(palavra.trimStart()); // remove só início
console.log(palavra.trimEnd()); // remove só final
console.log(palavra.toUpperCase()); // " BANANA "
console.log(palavra.toLowerCase()); // " banana "
console.log(palavra.replace("a", "x")); // substitui a primeira
console.log(palavra.replaceAll("a", "x")); // substitui todas
console.log(palavra.slice(1, 5)); // "bana"
console.log(palavra.substring(2, 6)); // "anan"
console.log("ha".repeat(3)); // "hahaha"

// --------------------------
// 🔹 Quebra e junção
let texto = "a b c";
let partes = texto.split(" "); // ["a", "b", "c"]
console.log(partes);
console.log("Oi".concat(" ", "Samuel")); // "Oi Samuel"

// --------------------------
// 🔹 Template Literals (Interpolação e Multilinhas)
let produto = "celular";
let preco = 2000;
let msg = `O ${produto} custa R$${preco},00.`;
console.log(msg);

let poema = `
Rosas são vermelhas,
Violetas são azuis,
JS é incrível,
E agora você sabe tudo sobre strings. 😄
`;
console.log(poema);

// --------------------------
// 🔹 Conversão entre tipos
let num = 10;
let str = String(num);   // "10"
let numDeNovo = Number(str); // 10
console.log(typeof str, typeof numDeNovo);

// Coerção implícita:
console.log("5" + 1); // "51" → concatenação
console.log("5" - 1); // 4 → conversão automática

// --------------------------
// 🔹 Caracteres especiais
console.log("Linha 1\nLinha 2"); // \n nova linha
console.log("Coluna 1\tColuna 2"); // \t tab
console.log("Aspas simples: \' e duplas: \"");
console.log("Barra invertida: \\");

// --------------------------
// 🔹 Converter para array de caracteres
let letras = Array.from("JS");
console.log(letras); // ["J", "S"]

// --------------------------
// 🔹 Comparação de strings
console.log("abc" < "abd"); // true
console.log("A" < "a");     // true (maiúsculas vêm antes)
console.log("a".toLowerCase() === "A".toLowerCase()); // true

// --------------------------
// 🔹 Unicode e códigos de caracteres
console.log("A".charCodeAt(0)); // 65
console.log(String.fromCharCode(65)); // "A"

// --------------------------
// 🔹 Resumo prático
let resumo = `
📘 RESUMO RÁPIDO:
- Criar: ' ', " ", \` \`
- Tamanho: .length
- Buscar: indexOf(), includes(), startsWith(), endsWith()
- Cortar: slice(), substring()
- Alterar: replace(), replaceAll()
- Format: toUpperCase(), toLowerCase(), trim()
- Dividir: split(), concat()
- Interpolar: \`Olá \${nome}\`
- Unicode: charCodeAt(), fromCharCode()
`;

console.log(resumo);
