/**
 * Uma função factory (ou factory function)
 *  é uma função que cria e retorna objetos — ou seja, uma “fábrica de objetos”.
 * 
 * Em vez de usar class ou new, você usa uma função comum que monta e devolve um objeto pronto pra uso.
 */

function criarPessoa(nome, idade) {
  return {
    nome,
    idade,

    //metodo
    apresentar() {
      console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  };
}

const pessoa1 = criarPessoa("Samuel", 20);
const pessoa2 = criarPessoa("Ana", 22);

pessoa1.apresentar();
pessoa2.apresentar();
