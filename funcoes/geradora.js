/**
 👉 É uma função especial que pode pausar e continuar sua execução sempre que quiser.
Ela não executa tudo de uma vez — em vez disso, gera valores sob demanda, um de cada vez.
 */

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

//para a função geradora retornar uma função geradora

function* geradora2() {
    yield* geradora()
    yield 2
    yield 3
}