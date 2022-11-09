class ContaCorrente{
    constructor(cliente, agencia, conta, saldo){
        this.cliente = cliente;
        this.agencia = agencia;
        this.conta = conta;

        this._saldo = saldo;
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