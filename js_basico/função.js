function saudacao(nome) {
    console.log('bom dia ${nome}')
}

saudacao('samuel')

function soma(x, y) {
    return x + y
}

soma(1,2)

//atribuindo valores padroes
function subtracao(x = 1, y = 2) {
    return x - y
}

subtracao()

//função anonima
const raiz = function (n) {
    //corpo
    return n ** 0.2
};

//função arrow 
const arco = (n) => 3