class ContaCorrente{
    _cliente;
    agencia;
    conta;
    _saldo;
    static numeroDeContas = 0;
    constructor(cliente, agencia, conta){
        this._saldo = 0;
        this._cliente = cliente;
        
        this.agencia = agencia;
        this.conta = conta;

        ContaCorrente.numeroDeContas += 1;
    }
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
        else {
            console.log(`Saldo insuficiente. Você tentou sacar R$${valor}. Seu saldo atual: R$${this._saldo}.`);
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log(`Não é um valor válido. Você tentou depositar R$${valor}.`);
        }
        else {
            this._saldo += valor;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

export default ContaCorrente;