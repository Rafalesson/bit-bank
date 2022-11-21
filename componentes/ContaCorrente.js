import Conta from "./Conta.js";

class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    ContaCorrente.numeroDeContas += 1;
    super(0, cliente, agencia);
  }

  // Sobrescrevendo o comportamento de sacar da classe pai (Conta)
  sacar(valor) {
    let taxa = 1.1;
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }
}

export default ContaCorrente;