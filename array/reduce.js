/**
 * reduce é um método de arrays que serve para reduzir 
 * todos os elementos do array a um único valor.
 * 
    obs:
        -percorre todo o array reduzindo o elemento
        -retorna um unico elemento
        -recebe uma func callback como parametro + um valor inicial(opcional)
        -a func callback pode determinar como parametro 
            um acumulador, elementoAtual, indice, array do array em questão

    
    estrutura:

        array.reduce((acumulador, elementoAtual, indice, array) => {
            // lógica de redução
        }, valorInicial);

 */

const nums = [1,2,3,4,5,6,7,8,9];

let somador = nums.reduce((acumulador, valorAtual) => {
    return acumulador += valorAtual;
}, 0);

console.log(somador)