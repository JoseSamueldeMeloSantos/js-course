//obj literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: "Miranda",
    idade: 25
}

function criaCarro(nome,marca,ano) {
    return {
        nome: nome,
        marca: marca,
        ano: ano
    }
}

const carro1 = criaCarro("uno", "fiat", 1999)