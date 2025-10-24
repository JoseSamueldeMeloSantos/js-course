function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    //call -> define heranca
    Produto.call(this, nome, preco)
    //necessario linkar o prototipe para ter aceesso aos metodos da classe superior
    Object.setPrototypeOf(this, Produto.prototype)

    this.cor = cor
}

const c = new Camiseta("adidas",90,"preta")
console.log(c.preco)
c.desconto(10)
console.log(c.preco)
console.log(c.cor)