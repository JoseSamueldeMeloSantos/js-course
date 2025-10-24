const produto = {nome: 'caneca', preco: 1.8}

//copiar obj

//forma 1
const caneca = {
    ...produto
}

//forma 2
const blusa = Object.assign({}, produto)

//congelar obj para mudanca
Object.freeze(blusa)

//para pegar corpo da propriedade do proprety 
Object.getOwnPropertyDescriptor(produto, "nome")

//pegar um array com os valores do obj
Object.values(produto)

//pegar um array com as chaves do obj
Object.keys(produto)

//pega um array com as chaves e valores do obj
Object.entries(produto)