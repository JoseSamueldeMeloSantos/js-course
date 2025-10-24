/**
 * prototypes e usado para colocar todos os metodos de uma classe para economizar memoria
 * 
 * e definido como um atributo invisivel pertencente a toda classe no js __phroto__
 */

function Pessoa(nome,sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

//esse metodo vai pertencer a classe porem nao vai constar que vai
Pessoa.prototype.falarNome = function() {
    return this.nome + " de " + this.sobrenome
}

