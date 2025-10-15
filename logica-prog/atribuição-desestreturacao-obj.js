// Objeto com várias propriedades
const usuario = {
  nome: 'João',
  idade: 32,
  endereco: {
    rua: 'Rua A',
    cidade: 'Rio de Janeiro'
  },
  profissao: 'Engenheiro'
};

// 🔹 1. Desestruturação simples
// Pegando valores com o mesmo nome das chaves do objeto
const { nome, idade } = usuario;
console.log(nome);  // João
console.log(idade); // 32

// 🔹 2. Renomeando variáveis
// Pegando a chave 'profissao' e renomeando para 'ocupacao'
const { profissao: ocupacao } = usuario;
console.log(ocupacao); // Engenheiro

// 🔹 3. Valor padrão (caso a chave não exista no objeto)
// Aqui 'telefone' não existe, então usamos um valor padrão
const { telefone = 'Sem telefone' } = usuario;
console.log(telefone); // Sem telefone

// 🔹 4. Desestruturação de objeto aninhado
// Acessando 'cidade' que está dentro do objeto 'endereco'
const { endereco: { cidade } } = usuario;
console.log(cidade); // Rio de Janeiro

// 🔹 5. Usando desestruturação como parâmetro de função
function exibirUsuario({ nome, idade }) {
  console.log(`Usuário: ${nome}, Idade: ${idade}`);
}
exibirUsuario(usuario); // Usuário: João, Idade: 32

// 🔹 6. Usando nome diferente SEM renomear (erro comum)
const { nomeCompleto } = usuario;
console.log(nomeCompleto); // undefined — 'nomeCompleto' não existe no objeto

// 🔹 7. Forma CORRETA de usar nome diferente (com renomeação)
const { nome: nomeUsuario } = usuario;
console.log(nomeUsuario); // João

//tbm é possivel usar ...rest