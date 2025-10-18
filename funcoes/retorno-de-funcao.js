//return
//retorna um valor
//termina a funcao
//quando a funcao e void(nao retorna nada) o retorno padrão e undefined

//é possivel retornar uma função em uma função
function hello() {
    return function() {
        console.log('hello')
    }
}