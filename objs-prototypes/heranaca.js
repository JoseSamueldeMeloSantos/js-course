// ===============================
// 🧱 CLASSE MÃE (Superclasse)
// ===============================

// Função construtora "Conta"
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

// Método para sacar
Conta.prototype.sacar = function(valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

// Método para depositar
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

// Método para ver o saldo atual
Conta.prototype.verSaldo = function() {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
  );
};


// ===============================
// 💳 CONTA CORRENTE (Subclasse)
// ===============================

// Função construtora "CC" (herda de Conta)
function CC(agencia, conta, saldo, limite) {
  // Chama o construtor da classe mãe (Conta)
  Conta.call(this, agencia, conta, saldo);

  // Adiciona o novo atributo exclusivo da conta corrente
  this.limite = limite;
}

// Faz a Conta Corrente herdar os métodos de Conta
CC.prototype = Object.create(Conta.prototype);

// Corrige o ponteiro do construtor(necessario para o polimorfismo)
CC.prototype.constructor = CC;

// Sobrescreve (reescreve) o método sacar
// → Aqui acontece o POLIMORFISMO
CC.prototype.sacar = function(valor) {
  // Agora, o saque pode usar também o limite
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};


// ===============================
// 💰 CONTA POUPANÇA (Subclasse)
// ===============================

// Função construtora "CP" (herda de Conta)
function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

// Faz a Conta Poupança herdar os métodos de Conta
CP.prototype = Object.create(Conta.prototype);

// Corrige o ponteiro do construtor
CP.prototype.constructor = CP;


// ===============================
// 🧠 TESTES (Demonstração do Polimorfismo)
// ===============================

const cc = new CC(11, 22, 0, 100); // Conta Corrente com limite de 100
cc.depositar(10);   // Depósito normal
cc.sacar(110);      // Pode sacar usando o limite (sacar até 110)
cc.sacar(1);        // Agora o limite acabou

console.log(); // Linha em branco só pra separar

const cp = new CP(12, 33, 0); // Conta Poupança sem limite
cp.depositar(10);   // Depósito normal
cp.sacar(10);       // Saque permitido
cp.sacar(1);        // Saque negado, saldo insuficiente
