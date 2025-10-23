const pessoa = {
    nome: "luiz",
    sobrenome: "Otavio",

    falaNome() {
        console.log(this.nome)
    }
    
}

pessoa.nome
pessoa["nome"]

//instanciando obj
const pessoa1 = new pessoa()
pessoa1.nome = "samuel"
pessoa1.sobrenome = "melo"

//chamar metodo
pessoa.falaNome


//apaga o atributo
delete pessoa.nome