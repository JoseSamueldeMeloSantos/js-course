const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}


//vincula o prototype do primeiro com o do segundo
Object.setPrototypeOf(objA,objB)

const p2 = {
nome:'caneca',
preco:15
}

//definido um obj de linha vinculado ao produto
object.etPrototypeOf(p2,Produto.prototype)

p2.aumento(10)

//criando como um produto usando create
const p = Object.create(Produto.prototype)

//opcional
const p3 = Object.create(Produto.prototype, 
    { 
        tamanho: {
            writable: true,
            configurable: true,
            enumerable:true,
            value: 113
        }
    }
)