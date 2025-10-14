// ==========================
// 🧮 FUNÇÕES DO OBJETO MATH EM JS
// ==========================

// 🔹 Propriedades
Math.PI;           // constante de π (3.14159...)
Math.E;            // número de Euler (2.718...)
Math.SQRT2;        // raiz quadrada de 2
Math.SQRT1_2;      // 1 dividido por √2
Math.LN2;          // logaritmo natural de 2
Math.LN10;         // logaritmo natural de 10
Math.LOG2E;        // log base 2 de e
Math.LOG10E;       // log base 10 de e

// --------------------------
// 🔹 Arredondamento
Math.round(x);     // arredonda para o inteiro mais próximo
Math.floor(x);     // arredonda para baixo
Math.ceil(x);      // arredonda para cima
Math.trunc(x);     // remove as casas decimais

// --------------------------
// 🔹 Valores absolutos e sinais
Math.abs(x);       // valor absoluto (remove o sinal)
Math.sign(x);      // retorna -1, 0 ou 1 dependendo do sinal do número

// --------------------------
// 🔹 Potência e raiz
Math.pow(base, exp); // base elevada ao expoente
Math.sqrt(x);        // raiz quadrada
Math.cbrt(x);        // raiz cúbica
Math.hypot(a, b);    // calcula √(a² + b² + ...)

// --------------------------
// 🔹 Logaritmos e exponenciais
Math.exp(x);        // e^x (exponencial)
Math.log(x);        // logaritmo natural (base e)
Math.log10(x);      // logaritmo base 10
Math.log2(x);       // logaritmo base 2

// --------------------------
// 🔹 Mínimos e máximos
Math.max(a, b, c);  // maior valor da lista
Math.min(a, b, c);  // menor valor da lista

// --------------------------
// 🔹 Aleatórios
Math.random();      // número aleatório entre 0 e 1
// exemplo: número aleatório entre 1 e 10
Math.floor(Math.random() * 10) + 1;

// --------------------------
// 🔹 Funções trigonométricas
Math.sin(x);        // seno (x em radianos)
Math.cos(x);        // cosseno
Math.tan(x);        // tangente
Math.asin(x);       // arco-seno
Math.acos(x);       // arco-cosseno
Math.atan(x);       // arco-tangente
Math.atan2(y, x);   // arco-tangente considerando os sinais de x e y

// --------------------------
// 🔹 Outras utilidades
Math.clz32(x);      // conta zeros à esquerda na representação binária de 32 bits
Math.imul(a, b);    // multiplicação inteira de 32 bits
Math.fround(x);     // converte para número de precisão simples (float32)

// --------------------------
// 🔹 Exemplos de uso rápido
Math.abs(-5);        // 5
Math.max(1, 10, 7);  // 10
Math.min(3, 2, 8);   // 2
Math.pow(2, 8);      // 256
Math.sqrt(81);       // 9
Math.random() * 100; // número aleatório até 100
