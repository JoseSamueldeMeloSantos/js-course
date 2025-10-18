/**
O filter é um método retorna um array filtrado 
a partir de uma função callback recebida 

obs
    -o filter pecorre todos os valores do array e faz a validação

    -a função callback deve sempre retornar true ou false
    
    -a função callback sempre poder ter acesso  ao valor,indice e array da função que irá filtrar

    -o filter sempre vai retornar um array

    -não altera o array original

    estrutura
        a.filter((valor, indice, array) => {
        })
 */

const nums = [1,2,3,4,5,6,7,8,9];

let numerosPares = nums.filter((valor) => {
    return (valor % 2) == 0;
});

console.log(numerosPares);

