//ao passar uma função sem os parenteses vc está passando a referência dela


//declaração nomal
function falaOi() {
    console.log("oi")
}

falaOi()//é possivel chamar ela antes de declaracar por causa do hoisting

//as funções sao objetos de primeira classe no js

//possivel colocar uma função em uma variavel

const souUmDado = function() {
    console.log("oi")
}

souUmDado()

//possivel passar uma função como parametro
function executarFuncao(funcao) {
    funcao()
}

executarFuncao(souUmDado)

//arrow function
const funcaoArrow = () => {
    console.log("soum uma arrow function")
}

funcaoArrow()

/*funcao anonima

function() {
    
}
*/

//dentro de um obj

const obj = {
    falar: function() {console.log},

    falar2() {
        console.log
    }
}