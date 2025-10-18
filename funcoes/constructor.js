/**
 * 
 Assim como a factory ela tbm cria e retorna obj a diferença tá no uso do new

    OBS:
        -sempre declare a função com a primeira letra sendo maiuscula 
        -quando for criar o obj use o NEW
        -use sempre o this para declarar os atributos e metodos


É o jeito “clássico” de criar objetos antes do class existir no JavaScript.
 */

function Pessoa(nome, idade) {//uso do maiusculo
  //sempre use o this na declaração de atrib e metodo
  this.nome = nome;
  this.idade = idade;

  this.apresentar = function() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  };
}
               //uso do new
const pessoa1 = new Pessoa("Samuel", 20);
const pessoa2 = new Pessoa("Ana", 22);

pessoa1.apresentar();
pessoa2.apresentar();
