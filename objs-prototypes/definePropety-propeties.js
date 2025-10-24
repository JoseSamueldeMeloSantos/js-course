// Função construtora Produto
function Produto(nome, preco, estoque) {
    // Atribuindo propriedades básicas
    this.nome = nome;
    this.preco = preco;

    /*
     * Object.defineProperty(objeto, propriedade, descriptor)
     *
     * → Serve para definir manualmente uma propriedade em um objeto
     *   controlando suas características (descritor de propriedade).
     */
    let estoquePrivado = estoque
    Object.defineProperty(this, "estoque", {
        enumerable: true,   // se 'true', a propriedade aparece em loops (como for...in ou Object.keys)
        value: estoque,     // valor da propriedade
        writable: false,    // se 'false', o valor NÃO pode ser alterado
        configurable: true,  // se 'true', a propriedade pode ser reconfigurada ou apagada

        //configurando get
        get: function() {
            return estoque
        },

        set: function(valor) {
            //não use this dentro do property
            estoquePrivado = valor
        }
    });

    /*
     * Object.defineProperties(objeto, { descritores })
     *
     * → É semelhante ao defineProperty, mas define várias propriedades de uma vez.
     *   Cada chave do objeto passado representa uma propriedade a ser criada/modificada.
     */
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,       // corrigido para 'nome' (estava 'estoque' no seu código)
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,      // corrigido para 'preco'
            writable: false,
            configurable: true
        }
    });
}

const p1 = new Produto("camiseta", 20, 3);

console.log(p1);


p1.estoque = 500;
p1.nome = "Tênis";

console.log(p1);