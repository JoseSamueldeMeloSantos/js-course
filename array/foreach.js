/**
 * foreach() é um um for,semelhante ao for of,usado para interar um array
 * 
 *  obs:
 *      -o foreach recebe um metodo callback
 *      -a função callback pode ter acesso aos parametros elementoAtual, indice, array
 *      -não retorna nada
 * 
 *  estrutura:
 *      
          array.forEach((elementoAtual, indice, array) => {
        // código a ser executado para cada elemento
    });

 */

const nums = [1,2,3,4,5,6,7,8,9];

nums.forEach((valor) => console.log(valor))