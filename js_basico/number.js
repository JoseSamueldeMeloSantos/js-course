// ==========================
// 🔢 FUNÇÕES DE NÚMEROS EM JS
// ==========================

// 🔹 Funções do objeto Number
Number.isFinite(x);     // verifica se é um número finito (não Infinity ou NaN)
Number.isNaN(x);        // verifica se o valor é NaN
Number.isInteger(x);    // verifica se é um número inteiro
Number.parseInt(str);   // converte string para inteiro
Number.parseFloat(str); // converte string para número decimal (float)

// 🔹 Métodos de instância (chamados no número)
num.toFixed(n);         // formata com n casas decimais → retorna string
num.toPrecision(n);     // define número total de dígitos → retorna string
num.toString(base);     // converte número para string (pode mudar base: 2, 8, 16)
num.valueOf();          // retorna o valor primitivo do número

// 🔹 Funções globais de conversão (sem precisar de Number.)
parseInt(str);          // converte string em inteiro
parseFloat(str);        // converte string em número decimal
isNaN(x);               // verifica se NÃO é número (versão global)
isFinite(x);            // verifica se é número finito (versão global)

// 🔹 BigInt (operações)
BigInt(valor);          // cria um número inteiro muito grande (ex: BigInt(1234567890123n))
