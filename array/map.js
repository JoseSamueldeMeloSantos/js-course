/**
O map é um método retorna um array com todos os 
valores transformados em outra coisa
a partir de uma função callback recebida 

obs
    -o map pecorre todos os valores do array e faz uma transformação

    -a função callback deve sempre retornar um valor transformado
    
    -a função callback sempre poder ter acesso ao valor,indice e array da função que irá filtrar

    -o map sempre vai retornar um array

    -o map não altera o array original e sim retorna um novo

    estrutura
        a.map((valor, indice, array) => {
        })
 */

const nums = [1,2,3,4,5,6,7,8,9];

let numerosMultiplicados = nums.map((valor) => {
    return valor * 2;
});

console.log(numerosPares);

