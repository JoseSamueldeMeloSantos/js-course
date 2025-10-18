//O JS guarda valores passados em exceço em funções function em uma variavel chamada arguments(guarda os em exceço e os normais)
function funcao() {
    console.log(arguments)
}

//é possivell passar argumentos em exceço ou em falta por causa disso
funcao(2321,3123123,3213123,32123)

//no js é possivel definir valores padroes para argumentos caso vc não envie eles
function funcao2(a = 2,b = 1, c = 3) {
    console.log(a + b + c)
}

//caso vc queira passar valor na funcao e usar o padrao use tipo undefined ou so nao envie o valor
funcao2(5, undefined, 6)

//passando  parametro de atribuição via desestreturação
function funcao3({nome, sobrenome ,idade}) {
    console.log(nome, sobrenome, idade)
}

let obj = {nome: 'luiz',sobrenome:'otavio',idade:20}
funcao(obj)

function funcao4([a,b,c]) {
    console.log(a,b,c)
}

funcao([1,2,3])