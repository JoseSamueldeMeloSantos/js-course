// Criando datas de diferentes formas
const agora = new Date(); // data e hora atuais
const dataString = new Date("2025-10-15 00:00:00"); // data a partir de string ISO
const dataArgs = new Date(2025, 9, 15, 14, 30); // ano, mês (0-11), dia, hora, minuto
const dataTimestamp = new Date(0); // 1 de janeiro de 1970

// Acessando partes da data (getters)
console.log("Ano:", dataArgs.getFullYear());     // 2025
console.log("Mês:", dataArgs.getMonth());        // 9 (outubro)
console.log("Dia do mês:", dataArgs.getDate());  // 15
console.log("Dia da semana:", dataArgs.getDay()); // 3 (quarta-feira)
console.log("Horas:", dataArgs.getHours());      // 14
console.log("Minutos:", dataArgs.getMinutes());  // 30

// Modificando partes da data (setters)
dataArgs.setFullYear(2030); // altera o ano para 2030
dataArgs.setMonth(0);       // altera o mês para janeiro (0)
dataArgs.setDate(1);        // altera o dia do mês para 1
console.log("Data modificada:", dataArgs.toString());

// Comparando datas (diferença em dias)
const d1 = new Date("2025-10-15");
const d2 = new Date("2025-10-10");
const diffMs = d1 - d2; // diferença em milissegundos
const diffDias = diffMs / (1000 * 60 * 60 * 24); // convertendo para dias
console.log("Diferença em dias:", diffDias); // 5

// Formatando datas
console.log("Data atual (toDateString):", agora.toDateString()); // ex: "Wed Oct 15 2025"
console.log("Data atual (toLocaleDateString):", agora.toLocaleDateString()); // ex: "15/10/2025"
console.log("Data atual (toISOString):", agora.toISOString()); // ex: "2025-10-15T12:00:00.000Z"
