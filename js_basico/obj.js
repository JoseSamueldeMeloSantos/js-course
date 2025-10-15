//obj literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: "Miranda",
    idade: 25,

    fala () {
        console.log("olá, eu sou ${this.nome}")
    }
}

//função que cria obj(factory)
function criaCarro(nome,marca,ano) {
    return {
        nome: nome,
        marca: marca,
        ano: ano
    }
}

const carro1 = criaCarro("uno", "fiat", 1999)