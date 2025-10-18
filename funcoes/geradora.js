

function* geradora() {

    //yield é parecido com um return mas tem pousa de codigo e retorno ao mesmo tempo
    yield 'valor1'

    yield 'valor2'

    yield 'valor3'
}

const g1 = geradora()

//para obter cada valor do yield eu devo usar o .next() na ordem
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())

//caso não tenha mais valores o done será true