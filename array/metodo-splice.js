//                -5       -4       -3         -2          -1
//                 0      1          2        4         5                         
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
//retorna o elemento removido
//nomes.splice(indice, quant-remoção,elementos-adicionas...)
////a partir do indice colocado é que ele vai remover os elementos e colocar os novos

nomes.splice(0, 1)//vai remover maria

nomes.splice(0, 1, 'Carlos','Samuel')//vai remover joao e adicionar carlos e samuel 

//removendo todos os elementos
nomes.splice(0,Number.MAX_VALUE)